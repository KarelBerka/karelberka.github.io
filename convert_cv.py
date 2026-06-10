import os
from docx import Document

# Paths
DOCX_PATH = r"C:\Users\krapn\Dropbox\CV\CVs\CV_Berka_20260505_CZ.docx"
OUTPUT_HTML = r"C:\Users\krapn\Dropbox\Antigravity\karelberka.github.io\cv.html"
# Simple HTML template
HTML_HEADER = """
<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
    <title>Curriculum Vitae - Karel Berka</title>
    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />
    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />
    <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap\" rel=\"stylesheet\" />
    <link rel=\"stylesheet\" href=\"css/style.css\" />
</head>
<body class=\"theme-light\">
    <!-- Navbar (reuse from index) -->
    <header class=\"header\">
        <div class=\"container nav-container\">
            <h1 class=\"logo\"><a href=\"index.html\" style=\"color: inherit; text-decoration: none;\">Karel Berka</a></h1>
            <nav class=\"nav\">
                <ul>
                    <li><a href=\"index.html#about\" class=\"nav-link\">About</a></li>
                    <li><a href=\"index.html#chemdata\" class=\"nav-link\">ChemData Lab</a></li>
                    <li><a href=\"index.html#tools\" class=\"nav-link\">Tools</a></li>
                    <li><a href=\"index.html#teaching\" class=\"nav-link\">Teaching</a></li>
                    <li><a href=\"index.html#outreach\" class=\"nav-link\">Outreach</a></li>
                    <li><a href=\"index.html#publications\" class=\"nav-link\">Publications</a></li>
                    <li><a href=\"cv.html\" class=\"nav-link\">CV</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main class=\"container\" style=\"padding-top: 120px; padding-bottom: 80px;\">
        <div class=\"cv-section\">
"""
HTML_FOOTER = """
        </div>
    </main>
    <footer class=\"footer\">
        <div class=\"container footer-content\">
            <p>&copy; <script>document.write(new Date().getFullYear())</script> Karel Berka. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
"""

def convert_docx_to_html():
    doc = Document(DOCX_PATH)
    html_parts = []
    for para in doc.paragraphs:
        text = para.text.strip()
        if not text:
            continue
        style = para.style.name.lower()
        if 'heading' in style:
            level = ''.join(filter(str.isdigit, style)) or '1'
            html_parts.append(f"<h{level}>" + text + f"</h{level}>")
        else:
            # Preserve bold runs
            runs_html = ''
            for run in para.runs:
                run_text = run.text.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
                if run.bold:
                    runs_html += f"<strong>{run_text}</strong>"
                else:
                    runs_html += run_text
            html_parts.append(f"<p>{runs_html}</p>")
    return '\n'.join(html_parts)

if __name__ == '__main__':
    body_html = convert_docx_to_html()
    full_html = HTML_HEADER + body_html + HTML_FOOTER
    os.makedirs(os.path.dirname(OUTPUT_HTML), exist_ok=True)
    with open(OUTPUT_HTML, 'w', encoding='utf-8') as f:
        f.write(full_html)
    print(f"CV HTML generated at {OUTPUT_HTML}")
