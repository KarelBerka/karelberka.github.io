import os
import json
import base64
from google import genai
from google.genai import types

# Make sure you have the google-genai library installed:
# pip install google-genai
# And set your GEMINI_API_KEY environment variable.

client = genai.Client()

site_dir = "c:/Users/krapn/Dropbox/Antigravity/karelberka.github.io"
json_path = "c:/Users/krapn/.gemini/antigravity/brain/28f05e3b-4e88-41b8-91ac-d8535a6dc663/scratch/enriched_works.json"

# A tiny transparent 1x1 PNG in base64. 
# We use this to detect which files are the placeholders vs real AI images.
TRANSPARENT_B64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
transparent_bytes = base64.b64decode(TRANSPARENT_B64)

with open(json_path, "r", encoding="utf-8") as f:
    works = json.load(f)

# Rebuild the name mapping logic to match the current filenames
name_mapping = {}
generated_names = {}
import re

for idx, w in enumerate(works, 1):
    year = w.get("year", "UnknownYear")
    journal = w.get("journal", "")
    authors = w.get("authors", "")
    
    if not journal:
        journal = "NoJournal"
    
    if authors:
        words = re.findall(r'[A-Za-z]+', authors)
        first_author = words[0] if words else "UnknownAuthor"
    else:
        first_author = "UnknownAuthor"
        
    journal_clean = re.sub(r'[^a-zA-Z0-9]', '', journal)
    first_author_clean = re.sub(r'[^a-zA-Z0-9]', '', first_author)
    
    base_name = f"pub_{year}_{journal_clean}_{first_author_clean}"
    
    if base_name in generated_names:
        generated_names[base_name] += 1
        final_name = f"{base_name}_{generated_names[base_name]}.png"
    else:
        generated_names[base_name] = 1
        final_name = f"{base_name}.png"
        
    # Check if the file is a placeholder
    file_path = os.path.join(site_dir, "img", "publications", final_name)
    
    # We only generate if the file is small (the transparent placeholder is ~68 bytes)
    if os.path.exists(file_path):
        size = os.path.getsize(file_path)
        if size < 100:
            print(f"[{final_name}] Needs generation. Triggering AI...")
            
            prompt = f"Cartoonish, colorful, high-quality, clean scientific illustration for a paper titled '{w.get('title')}'. Abstract: {w.get('abstract', '')[:500]}..."
            
            try:
                # Generate using Imagen 4
                result = client.models.generate_images(
                    model='imagen-4.0-generate-001',
                    prompt=prompt,
                    config=types.GenerateImagesConfig(
                        number_of_images=1,
                        output_mime_type="image/png",
                        aspect_ratio="1:1"
                    )
                )
                
                # Save the generated image over the placeholder
                for generated_image in result.generated_images:
                    with open(file_path, "wb") as img_file:
                        img_file.write(generated_image.image.image_bytes)
                print(f"  -> Successfully generated {final_name}")
                
            except Exception as e:
                print(f"  -> Failed to generate {final_name}: {e}")
        else:
            pass # Already generated
            
print("\nProcess finished.")
