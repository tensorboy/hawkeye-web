import os
from PIL import Image, ImageDraw, ImageFont

def create_og_image(root, logo_img):
    """Create Open Graph image (1200x630) with branding"""
    og = Image.new('RGB', (1200, 630), color='#0a0a0f')
    draw = ImageDraw.Draw(og)

    # Add gradient effect (simplified) - amber tint at top
    for y in range(200):
        for x in range(1200):
            r, g, b = og.getpixel((x, y))
            r = min(255, r + int(40 * (1 - y / 200)))
            g = min(255, g + int(30 * (1 - y / 200)))
            og.putpixel((x, y), (r, g, b))

    # Add logo (centered, large)
    logo_size = 180
    logo_resized = logo_img.resize((logo_size, logo_size), Image.Resampling.LANCZOS)
    logo_x = (1200 - logo_size) // 2
    logo_y = 120

    # Handle transparency
    if logo_resized.mode == 'RGBA':
        og.paste(logo_resized, (logo_x, logo_y), logo_resized)
    else:
        og.paste(logo_resized, (logo_x, logo_y))

    # Add text
    try:
        title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 72)
        subtitle_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 32)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()

    # Title
    title = "Hawkeye"
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    draw.text(((1200 - title_width) // 2, 330), title, fill='#ffffff', font=title_font)

    # Subtitle
    subtitle = "Prompt-Free AI Coworker"
    sub_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    sub_width = sub_bbox[2] - sub_bbox[0]
    draw.text(((1200 - sub_width) // 2, 420), subtitle, fill='#f59e0b', font=subtitle_font)

    # Tagline
    tagline = "No prompts needed. Just work naturally."
    tag_bbox = draw.textbbox((0, 0), tagline, font=subtitle_font)
    tag_width = tag_bbox[2] - tag_bbox[0]
    draw.text(((1200 - tag_width) // 2, 480), tagline, fill='#94a3b8', font=subtitle_font)

    og.save(f"{root}/og-image.png", quality=95)
    print("Saved og-image.png (1200x630)")

def create_twitter_image(root, logo_img):
    """Create Twitter card image (1200x600)"""
    tw = Image.new('RGB', (1200, 600), color='#0a0a0f')
    draw = ImageDraw.Draw(tw)

    # Add logo
    logo_size = 160
    logo_resized = logo_img.resize((logo_size, logo_size), Image.Resampling.LANCZOS)
    logo_x = (1200 - logo_size) // 2
    logo_y = 100

    if logo_resized.mode == 'RGBA':
        tw.paste(logo_resized, (logo_x, logo_y), logo_resized)
    else:
        tw.paste(logo_resized, (logo_x, logo_y))

    try:
        title_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 64)
        subtitle_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 28)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()

    title = "Hawkeye"
    title_bbox = draw.textbbox((0, 0), title, font=title_font)
    title_width = title_bbox[2] - title_bbox[0]
    draw.text(((1200 - title_width) // 2, 290), title, fill='#ffffff', font=title_font)

    subtitle = "Your Prompt-Free AI Coworker"
    sub_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    sub_width = sub_bbox[2] - sub_bbox[0]
    draw.text(((1200 - sub_width) // 2, 380), subtitle, fill='#f59e0b', font=subtitle_font)

    tagline = "Open Source • Local-First • 100% Private"
    tag_bbox = draw.textbbox((0, 0), tagline, font=subtitle_font)
    tag_width = tag_bbox[2] - tag_bbox[0]
    draw.text(((1200 - tag_width) // 2, 440), tagline, fill='#94a3b8', font=subtitle_font)

    tw.save(f"{root}/twitter-image.png", quality=95)
    print("Saved twitter-image.png (1200x600)")

def create_pwa_icons(root, logo_img):
    """Create PWA icons (192x192 and 512x512)"""
    # 192x192
    icon_192 = logo_img.resize((192, 192), Image.Resampling.LANCZOS)
    icon_192.save(f"{root}/icon-192x192.png")
    print("Saved icon-192x192.png")

    # 512x512
    icon_512 = logo_img.resize((512, 512), Image.Resampling.LANCZOS)
    icon_512.save(f"{root}/icon-512x512.png")
    print("Saved icon-512x512.png")

def create_screenshot_placeholder(root):
    """Create a placeholder screenshot"""
    screenshots_dir = f"{root}/screenshots"
    os.makedirs(screenshots_dir, exist_ok=True)

    # Create placeholder desktop screenshot (1280x720)
    ss = Image.new('RGB', (1280, 720), color='#1a1a2e')
    draw = ImageDraw.Draw(ss)

    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 48)
    except:
        font = ImageFont.load_default()

    text = "Hawkeye Desktop App"
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    draw.text(((1280 - text_width) // 2, 320), text, fill='#667eea', font=font)

    # Add border
    draw.rectangle([(20, 20), (1260, 700)], outline='#334155', width=2)

    ss.save(f"{screenshots_dir}/desktop.png")
    print("Saved screenshots/desktop.png (1280x720)")

def main():
    root = "/Users/wangpengan/Desktop/workforyou/hawkiyi-web/public"
    logo_path = f"{root}/logo.png"

    if not os.path.exists(logo_path):
        print("Logo not found!")
        return

    img = Image.open(logo_path)

    # Generate favicon-16x16.png
    img.resize((16, 16), Image.Resampling.LANCZOS).save(f"{root}/favicon-16x16.png")
    print("Saved favicon-16x16.png")

    # Generate favicon-32x32.png
    img.resize((32, 32), Image.Resampling.LANCZOS).save(f"{root}/favicon-32x32.png")
    print("Saved favicon-32x32.png")

    # Generate apple-touch-icon.png (180x180)
    img.resize((180, 180), Image.Resampling.LANCZOS).save(f"{root}/apple-touch-icon.png")
    print("Saved apple-touch-icon.png")

    # Generate PWA icons
    create_pwa_icons(root, img)

    # Generate OG image
    create_og_image(root, img)

    # Generate Twitter image
    create_twitter_image(root, img)

    # Generate screenshot placeholder
    create_screenshot_placeholder(root)

    print("\n✅ All web assets generated successfully!")

if __name__ == "__main__":
    main()
