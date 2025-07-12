from PIL import Image, ImageEnhance, ImageOps
import os

def reduce_opacity(image, opacity=0.3):
    """Reduce opacity of an RGBA image (0.0 to 1.0)."""
    assert 0 <= opacity <= 1, "Opacity must be between 0 and 1"
    if image.mode != 'RGBA':
        image = image.convert('RGBA')

    alpha = image.split()[3]
    alpha = ImageEnhance.Brightness(alpha).enhance(opacity)
    image.putalpha(alpha)
    return image

input_folder = "/Users/fahima.begum/personal/NC/Website/NaturalCoirs/12_july_products"
output_folder = "/Users/fahima.begum/personal/NC/Website/NaturalCoirs/12_july_products_watermarked"
watermark_path = "/Users/fahima.begum/personal/NC/Website/NaturalCoirs/Products/Copy of NC Package Label - 1 (6)-Photoroom.png"  # Path to your watermark image

# Load watermark and ensure it's RGBA
original_watermark = Image.open(watermark_path).convert("RGBA")
os.makedirs(output_folder, exist_ok=True)

for root, dirs, files in os.walk(input_folder):
    for filename in files:
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            input_path = os.path.join(root, filename)
            base_image = ImageOps.exif_transpose(Image.open(input_path)).convert("RGBA")
            # Resize watermark to match image size (100%)
            scale_ratio = min(
                base_image.width / original_watermark.width,
                base_image.height / original_watermark.height
            ) * 1  # 100% of base image size

            new_size = (
                int(original_watermark.width * scale_ratio),
                int(original_watermark.height * scale_ratio)
            )
            scaled_watermark = original_watermark.resize(new_size, Image.Resampling.LANCZOS)

            # 🔥 Reduce watermark opacity here
            scaled_watermark = reduce_opacity(scaled_watermark, opacity=0.5)  # Change 0.5 as needed

            # Center position
            position = (
                (base_image.width - scaled_watermark.width) // 2,
                (base_image.height - scaled_watermark.height) // 2
            )

            # Paste watermark onto base image
            transparent = Image.new("RGBA", base_image.size)
            transparent.paste(base_image, (0, 0))
            transparent.paste(scaled_watermark, position, mask=scaled_watermark)

            # Prepare output path
            relative_path = os.path.relpath(root, input_folder)
            output_dir = os.path.join(output_folder, relative_path)
            os.makedirs(output_dir, exist_ok=True)
            output_path = os.path.join(output_dir, filename)

            transparent.convert("RGB").save(output_path, "JPEG")
            print(f"✅ Watermarked: {output_path}")
