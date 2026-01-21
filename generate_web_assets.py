import os
from PIL import Image

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

if __name__ == "__main__":
    main()
