"""
Standalone Scopus bibliometric fetcher via Elsevier Author Retrieval API.
Requires ELSEVIER_API_KEY (or SCOPUS_API_KEY) in environment or ~/.env; optional ELSEVIER_INSTTOKEN.
Falls back safely to data/manual_metrics.json or cached data/metrics/scopus.json.

Usage:
    uv run --with certifi python -m scripts.sources.scopus
"""
import urllib.parse
from . import (
    http_get_json,
    load_cached_source_json,
    load_dotenv_key,
    load_manual_config,
    save_source_json,
    utc_now_iso,
)


def _to_int(v):
    try:
        return int(v) if v is not None else None
    except (ValueError, TypeError):
        return None


def fetch():
    cfg = load_manual_config()
    author_id = cfg["identifiers"]["scopus_author_id"]
    manual = cfg.get("scopus") or {}
    cached = load_cached_source_json("scopus.json") or {}
    profile_url = f"https://www.scopus.com/authid/detail.uri?authorId={author_id}"

    api_key = load_dotenv_key("ELSEVIER_API_KEY") or load_dotenv_key("SCOPUS_API_KEY")
    inst_token = load_dotenv_key("ELSEVIER_INSTTOKEN")

    if api_key:
        headers = {
            "X-ELS-APIKey": api_key,
            "Accept": "application/json",
        }
        if inst_token:
            headers["X-ELS-Insttoken"] = inst_token

        for view in ("METRICS", "ENHANCED", "STANDARD"):
            try:
                url = (
                    f"https://api.elsevier.com/content/author/author_id/{urllib.parse.quote(author_id)}"
                    f"?view={view}"
                )
                raw = http_get_json(url, headers=headers, timeout=20)
                resp = raw.get("author-retrieval-response")
                if isinstance(resp, list) and resp:
                    resp = resp[0]
                if not isinstance(resp, dict):
                    continue
                core = resp.get("coredata") or {}
                docs = _to_int(core.get("document-count"))
                cits = _to_int(core.get("citation-count"))
                cited_by = _to_int(core.get("cited-by-count"))
                h_idx = _to_int(resp.get("h-index"))
                if any(x is not None for x in (docs, cits, h_idx)):
                    payload = {
                        "source": "Scopus",
                        "status": "ok",
                        "api_view": view,
                        "fetched_at": utc_now_iso(),
                        "profile_url": profile_url,
                        "author_id": author_id,
                        "works_count": docs,
                        "citations": cits,
                        "cited_by_count": cited_by,
                        "h_index": h_idx,
                    }
                    save_source_json("scopus.json", payload)
                    return payload
            except Exception as exc:
                last_err = str(exc)
        err_msg = last_err
    else:
        err_msg = "ELSEVIER_API_KEY not configured"

    # Fallback: prefer cached API values if present, otherwise manual_metrics.json
    base = cached if cached.get("citations") is not None else manual
    payload = {
        "source": "Scopus",
        "status": "manual" if base.get("citations") is not None else "needs_api_key",
        "fetched_at": base.get("fetched_at") or base.get("as_of"),
        "checked_at": utc_now_iso(),
        "profile_url": profile_url,
        "author_id": author_id,
        "works_count": base.get("works_count"),
        "citations": base.get("citations"),
        "cited_by_count": base.get("cited_by_count"),
        "h_index": base.get("h_index"),
        "note_en": manual.get("note_en"),
        "note_cs": manual.get("note_cs"),
        "last_attempt_error": err_msg,
    }
    save_source_json("scopus.json", payload)
    return payload


if __name__ == "__main__":
    data = fetch()
    print(
        f"[Scopus] {data['status']}: citations={data.get('citations')}, "
        f"h-index={data.get('h_index')}, works={data.get('works_count')} ({data.get('last_attempt_error', '')})"
    )
