# Karel Berka - Personal Homepage

This repository contains the source code for the personal and academic homepage of **Prof. Karel Berka, Ph.D.**

🔗 **Live Webpage:** [https://karelberka.github.io/](https://karelberka.github.io/)

---

## Directory Structure

To keep the repository clean and manageable, files are organized as follows:

```text
karelberka.github.io/
│
├── index.html                   # Main page (About, Outreach, Selected Publications, Contact)
├── publication.html             # Dynamic publication details detail page
├── .gitignore                   # Files excluded from Git tracking
├── README.md                    # Project documentation
│
├── css/
│   └── style.css                # Styling (Light/Dark themes, responsive layout)
│
├── js/
│   ├── script.js                # Core interactive logic (Canvas background, filters, contact form)
│   └── data.js                  # Publication catalog (JSON array)
│
├── scripts/
│   └── generate_missing_thumbnails.py   # Python utility script to generate publication art via Gemini
│
└── img/
    ├── profile/                 # Profile pictures, favicon caricatures, and signature files
    ├── projects/                # Logo and screenshots for research platforms (MOLEonline, ChannelsDB)
    └── publications/            # Individual publication thumbnails (named as pub_[Year]_[Journal]_[Author].png)
```

---

## Technical Details

- **Frontend**: Pure HTML5, CSS3, and Vanilla JavaScript (zero external JS dependencies).
- **Interactivity**: Includes a responsive molecular-dynamics simulation canvas background that interacts with mouse hover coordinates.
- **Language Support**: Dynamic English and Czech translation toggle via localStorage.
- **Publications Detail**: Subpage loads details dynamically from `js/data.js` based on query parameters (e.g., `publication.html?id=10.1093/nar/gkag511`).

---

## Generation of Publication Art

A python utility script is available at `scripts/generate_missing_thumbnails.py`. It reads a metadata file (`enriched_works.json`) and queries the Gemini API (`imagen-4.0-generate-001`) to generate beautiful, scientific-oriented AI illustrations for newly added publications.

### Running the Generator

1. Install the Google GenAI SDK:
   ```bash
   pip install google-genai
   ```
2. Configure your API key:
   ```bash
   export GEMINI_API_KEY="your-api-key-here"
   ```
3. Run the script:
   ```bash
   python scripts/generate_missing_thumbnails.py
   ```
It will automatically search for publication thumbnails in `img/publications/` that are small placeholders (~68 bytes transparent files) and replace them with high-quality generated illustrations.
