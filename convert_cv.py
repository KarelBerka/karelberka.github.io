import sys
import os
from docx import Document

def docx_to_html(docx_path, output_path):
    doc = Document(docx_path)
    html_lines = ['<div class="cv-content">']
    for para in doc.paragraphs:
        text = para.text.strip()
        if not text:
            continue
        style = para.style.name.lower()
        if 'heading' in style:
            level = ''.join(filter(str.isdigit, style)) or '1'
            html_lines.append(f'<h{level}>{text}</h{level}>')
        else:
            html_lines.append(f'<p>{text}</p>')
    html_lines.append('</div>')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(html_lines))

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print('Usage: python convert_cv.py <input.docx> <output.html>')
        sys.exit(1)
    input_path = sys.argv[1]
    output_path = sys.argv[2]
    if not os.path.isfile(input_path):
        print(f'Error: {input_path} not found')
        sys.exit(1)
    docx_to_html(input_path, output_path)
    print(f'Converted {input_path} to {output_path}')
