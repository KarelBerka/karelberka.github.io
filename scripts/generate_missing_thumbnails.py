"""
Generate missing or placeholder (<500B) publication thumbnails referenced in js/data.js
using Google GenAI image generation via generate_content (Gemini Developer API).

Usage:
    uv run --with google-genai python scripts/generate_missing_thumbnails.py
"""
import json
import os
import re
import sys
import time
from pathlib import Path

from google import genai
from google.genai import types

ROOT = Path(__file__).resolve().parent.parent
DATA_JS = ROOT / "js" / "data.js"


def load_publications():
    txt = DATA_JS.read_text(encoding="utf-8")
    m = re.search(r"const publicationsData\s*=\s*(\[.*?\]);\s*//", txt, re.S)
    if not m:
        raise RuntimeError("Could not parse publicationsData from js/data.js")
    return json.loads(m.group(1))


def load_api_key():
    if os.environ.get("GEMINI_API_KEY"):
        return os.environ["GEMINI_API_KEY"]
    dotenv = Path.home() / ".env"
    if dotenv.exists():
        for line in dotenv.read_text(encoding="utf-8", errors="ignore").splitlines():
            m = re.match(r"^\s*GEMINI_API_KEY\s*=\s*['\"]?([^'\"\s#]+)['\"]?", line)
            if m:
                os.environ["GEMINI_API_KEY"] = m.group(1)
                return m.group(1)
    return None


def pick_image_models(client):
    preferred = [
        "gemini-2.5-flash-image",
        "gemini-3.1-flash-image-preview",
        "gemini-3-pro-image-preview",
        "gemini-2.5-flash-image-preview",
        "gemini-2.0-flash-exp-image-generation",
    ]
    available = []
    try:
        for m in client.models.list():
            name = (m.name or "").replace("models/", "")
            if "image" in name.lower():
                available.append(name)
    except Exception as exc:
        print(f"Warning: could not list models ({exc}), using defaults", flush=True)

    print(f"Discovered image models: {available}", flush=True)
    ordered = [m for m in preferred if not available or m in available]
    for m in available:
        if m not in ordered and "imagen" not in m.lower():
            ordered.append(m)
    return ordered or preferred


def generate_one(client, model_name, prompt):
    resp = client.models.generate_content(
        model=model_name,
        contents=prompt,
        config=types.GenerateContentConfig(
            response_modalities=["IMAGE"],
        ),
    )
    for cand in getattr(resp, "candidates", []) or []:
        content = getattr(cand, "content", None)
        for part in getattr(content, "parts", []) or []:
            inline = getattr(part, "inline_data", None)
            if inline and getattr(inline, "data", None):
                return inline.data
    raise RuntimeError("No image bytes returned in response")


def main():
    if not load_api_key():
        print("ERROR: GEMINI_API_KEY not found in environment or ~/.env", file=sys.stderr)
        sys.exit(1)

    client = genai.Client()
    models = pick_image_models(client)
    pubs = load_publications()

    targets = []
    for pub in pubs:
        img_rel = pub.get("image")
        if not img_rel:
            continue
        img_path = ROOT / img_rel
        if not img_path.exists() or img_path.stat().st_size < 500:
            targets.append((pub, img_path))

    print(f"Found {len(targets)} missing/placeholder thumbnails to generate.", flush=True)
    if not targets:
        return

    ok = 0
    failed = []
    active_model = None
    for idx, (pub, img_path) in enumerate(targets, 1):
        img_path.parent.mkdir(parents=True, exist_ok=True)
        title = pub.get("title", "Scientific study")
        abstract = (pub.get("abstract") or "")[:400]
        prompt = (
            "Create a square 1:1 vibrant editorial scientific illustration (strictly NO text, NO letters, NO numbers, NO labels) "
            f"representing the computational chemistry / structural biology concept of: '{title}'. "
            f"Scientific context: {abstract}. "
            "Clean stylized 3D/vector scientific artwork with glowing molecules, protein ribbons, or lipid bilayers on a deep teal-slate gradient background."
        )
        print(f"[{idx}/{len(targets)}] Generating {img_path.name} ({pub.get('year')}) ...", flush=True)

        candidates = [active_model] + [m for m in models if m != active_model] if active_model else models
        generated = False
        for model_name in candidates:
            try:
                img_bytes = generate_one(client, model_name, prompt)
                img_path.write_bytes(img_bytes)
                active_model = model_name
                print(f"  -> OK ({model_name}, {img_path.stat().st_size} bytes)", flush=True)
                ok += 1
                generated = True
                break
            except Exception as exc:
                err_str = str(exc)
                print(f"  -> {model_name} failed: {err_str[:180]}", flush=True)
                if "429" in err_str or "RESOURCE_EXHAUSTED" in err_str:
                    time.sleep(8)
                    try:
                        img_bytes = generate_one(client, model_name, prompt)
                        img_path.write_bytes(img_bytes)
                        active_model = model_name
                        print(f"  -> OK on retry ({model_name}, {img_path.stat().st_size} bytes)", flush=True)
                        ok += 1
                        generated = True
                        break
                    except Exception as exc2:
                        print(f"  -> retry failed: {str(exc2)[:150]}", flush=True)
                continue
        if not generated:
            failed.append(img_path.name)
        time.sleep(1.0)

    print(f"\nDone: {ok}/{len(targets)} generated. Failed: {len(failed)} {failed}", flush=True)


if __name__ == "__main__":
    main()
