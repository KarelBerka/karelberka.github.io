"""
Standalone OpenAlex bibliometric fetcher.
Fetches author-level metrics (filtering out pre-2004 homonym works) and per-DOI citation counts.

Usage:
    uv run --with certifi python -m scripts.sources.openalex
"""
import urllib.parse
from . import (
    http_get_json,
    load_dotenv_key,
    load_manual_config,
    load_site_data,
    save_source_json,
    utc_now_iso,
)


def fetch():
    cfg = load_manual_config()
    ids = cfg["identifiers"]
    author_id = ids["openalex_author_id"]
    min_year = int(ids.get("min_publication_year", 2004))
    api_key = load_dotenv_key("OPENALEX_API_KEY")

    def add_key(url):
        if api_key:
            sep = "&" if "?" in url else "?"
            return f"{url}{sep}api_key={urllib.parse.quote(api_key)}"
        return url

    # 1. Author-level metrics
    author_url = add_key(
        f"https://api.openalex.org/authors/{author_id}"
        "?select=id,display_name,orcid,works_count,cited_by_count,summary_stats,counts_by_year"
    )
    author = http_get_json(author_url)

    counts_by_year = [
        y for y in (author.get("counts_by_year") or [])
        if int(y.get("year", 0)) >= min_year
    ]
    homonym_works = sum(
        int(y.get("works_count", 0))
        for y in (author.get("counts_by_year") or [])
        if int(y.get("year", 0)) < min_year
    )
    filtered_works_count = max(0, int(author.get("works_count", 0)) - homonym_works)
    stats = author.get("summary_stats") or {}

    # 2. Per-paper citation counts in batches of 50 DOIs
    pubs, _ = load_site_data()
    dois = sorted({(p.get("doi") or "").strip().lower() for p in pubs if p.get("doi")})
    per_doi = {}
    batch_size = 50
    for i in range(0, len(dois), batch_size):
        batch = dois[i : i + batch_size]
        filt = "|".join(f"https://doi.org/{d}" for d in batch)
        url = add_key(
            "https://api.openalex.org/works?"
            + urllib.parse.urlencode({
                "filter": f"doi:{filt}",
                "select": "id,doi,cited_by_count,publication_year,open_access",
                "per-page": 100,
            })
        )
        res = http_get_json(url)
        for w in res.get("results", []):
            d = (w.get("doi") or "").replace("https://doi.org/", "").strip().lower()
            if d:
                per_doi[d] = {
                    "citations": w.get("cited_by_count", 0),
                    "openalex_id": (w.get("id") or "").replace("https://openalex.org/", ""),
                    "is_oa": bool((w.get("open_access") or {}).get("is_oa")),
                }

    payload = {
        "source": "OpenAlex",
        "status": "ok",
        "fetched_at": utc_now_iso(),
        "profile_url": f"https://openalex.org/{author_id}",
        "author_id": author_id,
        "works_count": filtered_works_count,
        "raw_works_count": author.get("works_count", 0),
        "filtered_homonym_works": homonym_works,
        "citations": author.get("cited_by_count", 0),
        "h_index": stats.get("h_index"),
        "i10_index": stats.get("i10_index"),
        "two_yr_mean_citedness": round(float(stats.get("2yr_mean_citedness", 0.0)), 2),
        "counts_by_year": sorted(counts_by_year, key=lambda x: x["year"]),
        "per_doi": per_doi,
    }
    save_source_json("openalex.json", payload)
    return payload


if __name__ == "__main__":
    data = fetch()
    print(
        f"[OpenAlex] OK: {data['citations']} citations, h-index={data['h_index']}, "
        f"i10={data['i10_index']}, works={data['works_count']} (per-DOI: {len(data['per_doi'])})"
    )
