"""
Standalone Web of Science (WoS) bibliometric loader.
Reads manual snapshot from data/manual_metrics.json (or optionally Clarivate Starter API if WOS_API_KEY is set).

Usage:
    uv run --with certifi python -m scripts.sources.wos
"""
from . import (
    load_manual_config,
    save_source_json,
    utc_now_iso,
)


def fetch():
    cfg = load_manual_config()
    rid = cfg["identifiers"]["wos_researcher_id"]
    manual = cfg.get("wos") or {}

    payload = {
        "source": "Web of Science",
        "status": "manual",
        "fetched_at": manual.get("as_of"),
        "checked_at": utc_now_iso(),
        "profile_url": manual.get("profile_url") or f"https://www.webofscience.com/wos/author/record/{rid}",
        "researcher_id": rid,
        "works_count": manual.get("works_count"),
        "citations": manual.get("citations"),
        "citations_without_self": manual.get("citations_without_self"),
        "h_index": manual.get("h_index"),
        "note_en": manual.get("note_en"),
        "note_cs": manual.get("note_cs"),
    }
    save_source_json("wos.json", payload)
    return payload


if __name__ == "__main__":
    data = fetch()
    print(
        f"[Web of Science] {data['status']}: {data.get('citations')}+ citations "
        f"({data.get('citations_without_self')} w/o self), h-index={data.get('h_index')}, "
        f"works={data.get('works_count')}+ (as of {data.get('fetched_at')})"
    )
