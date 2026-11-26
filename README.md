# Karel Berka - Personal Homepage

This repository contains the source code for the personal and academic homepage of **Prof. Karel Berka, Ph.D.**

🔗 **Live Webpage:** [https://karelberka.github.io/](https://karelberka.github.io/)

---

## Directory Structure

```text
karelberka.github.io/
│
├── index.html                   # Main page (About, ChemData Lab, Tools, Teaching, Outreach, Publications & Bibliometrics, Contact)
├── publication.html             # Dynamic publication detail page (with OpenAlex & BIP! Scholar impact metrics)
├── cv.html                      # Interactive CV (Full / 1-Page / 2-Page / Europass) with multi-source bibliometrics table
├── README.md                    # Project documentation
│
├── .github/workflows/
│   └── update-metrics.yml       # Weekly GitHub Action syncing bibliometrics & GitHub repo metadata
│
├── css/
│   └── style.css                # Styling (Light/Dark themes, responsive layout, bibliometric dashboard, publication chapters)
│
├── js/
│   ├── data.js                  # Single source of truth for publicationsData (4 chapters) and toolsData
│   ├── metrics.js               # Auto-generated multi-source bibliometrics & GitHub metadata bundle
│   ├── script.js                # Dynamic renderers (Publications chapters, Bibliometrics dashboard, Tools, Molecular canvas)
│   └── citation.js              # Citation modal (BibTeX, RIS, ČSN ISO 690, APA 7th, ACS, Nature)
│
├── data/
│   ├── manual_metrics.json      # Author IDs & manual fallback values (Web of Science, Scopus)
│   └── metrics/                 # Separate per-source JSON snapshots (openalex, bip_scholar, google_scholar, scopus, wos, github)
│
├── scripts/
│   ├── sync_metrics.py          # Orchestrator running modular sources & building js/metrics.js
│   ├── generate_missing_thumbnails.py  # Generates missing/placeholder publication thumbnails via Gemini API
│   └── sources/
│       ├── openalex.py          # OpenAlex author metrics (filtered >= 2004) + per-DOI citation counts
│       ├── bip_scholar.py       # BIP! Scholar researcher scores + per-DOI impact classes (C1–C5)
│       ├── google_scholar.py    # Google Scholar profile metrics (with cached fallback)
│       ├── scopus.py            # Scopus Elsevier Author Retrieval API (ELSEVIER_API_KEY) + fallback
│       ├── wos.py               # Web of Science loader (data/manual_metrics.json)
│       └── github_repos.py      # Public GitHub repository metadata sync (stars, language, last push)
│
└── img/
    ├── profile/                 # Profile pictures, favicon caricatures, and signature files
    ├── projects/                # Logo and screenshots for research platforms
    └── publications/            # Individual publication artwork thumbnails
```

---

## Modular Bibliometrics & GitHub Sync

Each citation and metadata source lives in its own module under `scripts/sources/` and writes an independent snapshot under `data/metrics/`. Run all sources or a single source individually:

```bash
# Sync all sources and rebuild js/metrics.js
uv run --with certifi python scripts/sync_metrics.py --source all

# Run a single source independently
uv run --with certifi python scripts/sync_metrics.py --source openalex
uv run --with certifi python scripts/sync_metrics.py --source bip
uv run --with certifi python scripts/sync_metrics.py --source scholar
uv run --with certifi python scripts/sync_metrics.py --source scopus
uv run --with certifi python scripts/sync_metrics.py --source wos
uv run --with certifi python scripts/sync_metrics.py --source github
```

### Optional API Keys (Environment / GitHub Secrets)
- `OPENALEX_API_KEY` — optional free key from [openalex.org](https://openalex.org/settings/api) for dedicated daily budget.
- `ELSEVIER_API_KEY` (+ optional `ELSEVIER_INSTTOKEN`) — free developer key from [dev.elsevier.com](https://dev.elsevier.com/) to pull live Scopus metrics for Author ID `35585258000` (falls back to `data/manual_metrics.json` when unset).
- `GITHUB_TOKEN` — optional token for higher GitHub API rate limits (automatically provided in GitHub Actions).
- Web of Science (`E-2839-2010`) values are maintained in `data/manual_metrics.json`.
