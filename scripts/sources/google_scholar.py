"""
Standalone Google Scholar profile metrics fetcher.
Parses the public Google Scholar profile page with graceful fallback to the last cached snapshot.

Usage:
    uv run --with certifi python -m scripts.sources.google_scholar
"""
import re
from . import (
    http_get_text,
    load_cached_source_json,
    load_manual_config,
    save_source_json,
    utc_now_iso,
)


def _to_int(val):
    try:
        return int(re.sub(r"[^\d]", "", str(val)))
    except ValueError:
        return None


def fetch():
    cfg = load_manual_config()
    scholar_id = cfg["identifiers"]["google_scholar_id"]
    profile_url = f"https://scholar.google.cz/citations?hl=en&user={scholar_id}"
    cached = load_cached_source_json("google_scholar.json")

    try:
        html = http_get_text(
            profile_url,
            headers={
                "User-Agent": (
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
                ),
                "Accept-Language": "en-US,en;q=0.9",
            },
            timeout=20,
        )
        vals = re.findall(r'<td class="gsc_rsb_std">([^<]+)</td>', html)
        if len(vals) < 6:
            raise RuntimeError(f"Unexpected Google Scholar metrics table (found {len(vals)} cells)")

        payload = {
            "source": "Google Scholar",
            "status": "ok",
            "fetched_at": utc_now_iso(),
            "profile_url": f"https://scholar.google.cz/citations?hl=cs&user={scholar_id}",
            "user_id": scholar_id,
            "citations": _to_int(vals[0]),
            "citations_5y": _to_int(vals[1]),
            "h_index": _to_int(vals[2]),
            "h_index_5y": _to_int(vals[3]),
            "i10_index": _to_int(vals[4]),
            "i10_index_5y": _to_int(vals[5]),
        }
        save_source_json("google_scholar.json", payload)
        return payload
    except Exception as exc:
        if cached:
            cached["last_attempt_error"] = str(exc)
            cached["status"] = "cached_fallback"
            save_source_json("google_scholar.json", cached)
            return cached
        payload = {
            "source": "Google Scholar",
            "status": "error",
            "error": str(exc),
            "fetched_at": utc_now_iso(),
            "profile_url": f"https://scholar.google.cz/citations?hl=cs&user={scholar_id}",
            "user_id": scholar_id,
            "citations": None,
            "h_index": None,
            "i10_index": None,
        }
        save_source_json("google_scholar.json", payload)
        return payload


if __name__ == "__main__":
    data = fetch()
    print(
        f"[Google Scholar] {data['status']}: {data.get('citations')} citations "
        f"(5y: {data.get('citations_5y')}), h-index={data.get('h_index')}, i10={data.get('i10_index')}"
    )
