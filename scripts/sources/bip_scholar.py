"""
Standalone BIP! Scholar bibliometric fetcher (Athena RC / IMSI).
Uses the official BIP! JSON API for researcher scores and per-paper impact classes (C1-C5).

Usage:
    uv run --with certifi python -m scripts.sources.bip_scholar
"""
import concurrent.futures
import urllib.parse
from . import (
    http_get_json,
    load_cached_source_json,
    load_manual_config,
    load_site_data,
    save_source_json,
    utc_now_iso,
)


def _fetch_paper_score(doi):
    encoded = urllib.parse.quote(doi, safe="")
    url = f"https://bip-api.imsi.athenarc.gr/paper/scores/{encoded}"
    try:
        d = http_get_json(url, timeout=12)
        return doi, {
            "cc": d.get("cc"),
            "cc_3yr": d.get("3_year_cc"),
            "pop_class": d.get("pop_class"),
            "inf_class": d.get("inf_class"),
            "imp_class": d.get("imp_class"),
            "cc_class": d.get("cc_class"),
        }
    except Exception:
        return doi, None


def fetch(fetch_papers=True):
    cfg = load_manual_config()
    orcid = cfg["identifiers"]["orcid"]
    url = f"https://bip-api.imsi.athenarc.gr/scholar/scores/{orcid}"
    raw = http_get_json(url, timeout=20)

    work_types = raw.get("work_types_num") or {}
    openness = raw.get("openness") or {}

    per_doi = {}
    cached = load_cached_source_json("bip_scholar.json") or {}
    if cached.get("per_doi"):
        per_doi.update(cached["per_doi"])

    if fetch_papers:
        pubs, _ = load_site_data()
        dois = sorted({(p.get("doi") or "").strip().lower() for p in pubs if p.get("doi")})
        with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
            for doi, info in pool.map(_fetch_paper_score, dois):
                if info is not None:
                    per_doi[doi] = info

    payload = {
        "source": "BIP! Scholar",
        "status": "ok",
        "fetched_at": utc_now_iso(),
        "profile_url": f"https://bip.imsi.athenarc.gr/scholar/profile/{orcid}",
        "orcid": orcid,
        "works_count": work_types.get("papers"),
        "citations": raw.get("citations_num"),
        "h_index": raw.get("h_index"),
        "i10_index": raw.get("i10_index"),
        "popular_works": raw.get("popular_works_count"),
        "influential_works": raw.get("influential_works_count"),
        "impulse": raw.get("impulse"),
        "academic_age": raw.get("academic_age"),
        "responsible_academic_age": raw.get("responsible_academic_age"),
        "open_access_papers": openness.get("open_papers"),
        "open_access_percentage": openness.get("open_percentage"),
        "per_doi": per_doi,
    }
    save_source_json("bip_scholar.json", payload)
    return payload


if __name__ == "__main__":
    data = fetch(fetch_papers=True)
    print(
        f"[BIP! Scholar] OK: {data['citations']} citations, h-index={data['h_index']}, "
        f"works={data['works_count']}, popular={data['popular_works']}, "
        f"influential={data['influential_works']} (per-DOI: {len(data['per_doi'])})"
    )
