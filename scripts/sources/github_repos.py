"""
Standalone GitHub repository metadata syncer.
Fetches live public metadata (stars, primary language, last pushed date, archived status)
for every GitHub repository referenced in toolsData inside js/data.js.

Usage:
    uv run --with certifi python -m scripts.sources.github_repos
"""
import re
from . import (
    http_get_json,
    load_cached_source_json,
    load_dotenv_key,
    load_site_data,
    save_source_json,
    utc_now_iso,
)


def _extract_repo_slug(url):
    if not url:
        return None
    m = re.match(r"^https?://github\.com/([^/]+)/([^/?#]+)", url.strip())
    if not m:
        return None
    return f"{m.group(1)}/{m.group(2).rstrip('/')}"


def fetch():
    _, tools = load_site_data()
    token = load_dotenv_key("GITHUB_TOKEN")
    headers = {"Accept": "application/vnd.github+json"}
    if token:
        headers["Authorization"] = f"Bearer {token}"

    cached = load_cached_source_json("github.json") or {}
    repos_meta = dict(cached.get("repos") or {})

    slugs = set()
    for t in tools:
        for field in ("github", "github_backup"):
            slug = _extract_repo_slug(t.get(field))
            if slug:
                slugs.add(slug)

    fetched_ok = 0
    errors = {}
    for slug in sorted(slugs):
        try:
            r = http_get_json(f"https://api.github.com/repos/{slug}", headers=headers, timeout=15)
            if r.get("private"):
                # Never expose private repo metadata
                continue
            repos_meta[slug.lower()] = {
                "full_name": r.get("full_name"),
                "stars": r.get("stargazers_count", 0),
                "forks": r.get("forks_count", 0),
                "language": r.get("language"),
                "pushed_at": (r.get("pushed_at") or "")[:10],
                "updated_at": (r.get("updated_at") or "")[:10],
                "archived": bool(r.get("archived")),
                "has_pages": bool(r.get("has_pages")),
                "homepage": r.get("homepage") or "",
                "license": (r.get("license") or {}).get("spdx_id"),
            }
            fetched_ok += 1
        except Exception as exc:
            errors[slug] = str(exc)

    payload = {
        "source": "GitHub",
        "status": "ok" if fetched_ok > 0 else "cached_fallback",
        "fetched_at": utc_now_iso(),
        "total_repos": len(repos_meta),
        "fetched_ok": fetched_ok,
        "errors": errors,
        "repos": repos_meta,
    }
    save_source_json("github.json", payload)
    return payload


if __name__ == "__main__":
    data = fetch()
    print(f"[GitHub] {data['status']}: synced {data['fetched_ok']}/{data['total_repos']} repos (errors: {len(data['errors'])})")
