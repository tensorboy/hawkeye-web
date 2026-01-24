#!/usr/bin/env python3
"""Test all language pages for Hawkeye website."""

from playwright.sync_api import sync_playwright
import os

SCREENSHOTS_DIR = "/tmp/hawkeye_tests"
os.makedirs(SCREENSHOTS_DIR, exist_ok=True)

LANGUAGES = [
    {"code": "zh", "path": "/", "name": "Chinese"},
    {"code": "en", "path": "/en", "name": "English"},
    {"code": "ja", "path": "/ja", "name": "Japanese"},
    {"code": "ko", "path": "/ko", "name": "Korean"},
    {"code": "es", "path": "/es", "name": "Spanish"},
    {"code": "fr", "path": "/fr", "name": "French"},
    {"code": "de", "path": "/de", "name": "German"},
]

def test_language_page(page, lang):
    """Test a single language page."""
    print(f"\n{'='*50}")
    print(f"Testing {lang['name']} ({lang['code']}) - {lang['path']}")
    print('='*50)

    # Navigate to page
    url = f"http://localhost:3000{lang['path']}"
    page.goto(url)
    page.wait_for_load_state('networkidle')

    # Take screenshot of initial page
    screenshot_path = f"{SCREENSHOTS_DIR}/{lang['code']}_1_initial.png"
    page.screenshot(path=screenshot_path, full_page=False)
    print(f"[OK] Page loaded - screenshot: {screenshot_path}")

    # Check page title/heading exists
    heading = page.locator("h1").first
    if heading.is_visible():
        print(f"[OK] Main heading visible: {heading.inner_text()[:50]}...")
    else:
        print("[WARN] Main heading not visible")

    # Test language selector - click to open dropdown
    try:
        lang_selector = page.locator("button").filter(has=page.locator("svg")).first
        # Find the language selector button (has Globe icon)
        lang_buttons = page.locator("button").all()
        for btn in lang_buttons:
            try:
                if btn.is_visible() and btn.inner_text() == "":
                    # This might be an icon-only button
                    pass
            except:
                pass

        # Look for language selector by finding element with flag emoji
        lang_dropdown = page.locator("button:has-text('🇨🇳'), button:has-text('🇺🇸'), button:has-text('🇯🇵'), button:has-text('🇰🇷'), button:has-text('🇪🇸'), button:has-text('🇫🇷'), button:has-text('🇩🇪')").first
        if lang_dropdown.is_visible():
            lang_dropdown.click()
            page.wait_for_timeout(500)
            screenshot_path = f"{SCREENSHOTS_DIR}/{lang['code']}_2_lang_selector.png"
            page.screenshot(path=screenshot_path, full_page=False)
            print(f"[OK] Language selector opened - screenshot: {screenshot_path}")

            # Check if all language options are visible
            all_langs_visible = True
            for check_lang in LANGUAGES:
                flag = {"zh": "🇨🇳", "en": "🇺🇸", "ja": "🇯🇵", "ko": "🇰🇷", "es": "🇪🇸", "fr": "🇫🇷", "de": "🇩🇪"}[check_lang["code"]]
                if page.locator(f"text={flag}").count() > 0:
                    print(f"    [OK] {check_lang['name']} option visible")
                else:
                    print(f"    [WARN] {check_lang['name']} option not found")
                    all_langs_visible = False

            # Close dropdown by clicking elsewhere
            page.locator("body").click(position={"x": 10, "y": 10})
            page.wait_for_timeout(300)
        else:
            print("[WARN] Language selector not found")
    except Exception as e:
        print(f"[WARN] Language selector test failed: {e}")

    # Test theme toggle
    try:
        # Find theme toggle button (has Sun or Moon icon)
        theme_btns = page.locator("button[aria-label*='theme'], button[aria-label*='Theme'], button[aria-label*='mode']").all()
        if not theme_btns:
            # Try finding by icon
            theme_btns = page.locator("button").filter(has=page.locator("svg")).all()

        # Click any button that might be the theme toggle
        found_theme = False
        for btn in theme_btns:
            try:
                if btn.is_visible():
                    btn.click()
                    page.wait_for_timeout(500)

                    # Check if theme dropdown appeared or theme changed
                    dropdown = page.locator("text=Light, text=Dark, text=System").first
                    if dropdown.is_visible() or page.locator("html.dark").count() > 0 or page.locator("[data-theme='dark']").count() > 0:
                        screenshot_path = f"{SCREENSHOTS_DIR}/{lang['code']}_3_theme_toggle.png"
                        page.screenshot(path=screenshot_path, full_page=False)
                        print(f"[OK] Theme toggle works - screenshot: {screenshot_path}")
                        found_theme = True

                        # Try to click Dark mode
                        dark_btn = page.locator("text=Dark").first
                        if dark_btn.is_visible():
                            dark_btn.click()
                            page.wait_for_timeout(500)
                            screenshot_path = f"{SCREENSHOTS_DIR}/{lang['code']}_4_dark_mode.png"
                            page.screenshot(path=screenshot_path, full_page=False)
                            print(f"[OK] Dark mode activated - screenshot: {screenshot_path}")
                        break
            except:
                continue

        if not found_theme:
            print("[WARN] Theme toggle not found or not working")
    except Exception as e:
        print(f"[WARN] Theme toggle test failed: {e}")

    # Test navigation
    try:
        nav_links = page.locator("nav a, nav button").all()
        nav_count = len([l for l in nav_links if l.is_visible()])
        print(f"[OK] Navigation has {nav_count} visible links/buttons")

        # Try to click Features section link
        features_link = page.locator("a[href='#features'], a:has-text('Features'), a:has-text('功能'), a:has-text('機能'), a:has-text('기능'), a:has-text('Características'), a:has-text('Fonctionnalités'), a:has-text('Funktionen')").first
        if features_link.is_visible():
            features_link.click()
            page.wait_for_timeout(500)
            screenshot_path = f"{SCREENSHOTS_DIR}/{lang['code']}_5_features.png"
            page.screenshot(path=screenshot_path, full_page=False)
            print(f"[OK] Features section navigation works - screenshot: {screenshot_path}")
    except Exception as e:
        print(f"[WARN] Navigation test failed: {e}")

    # Scroll to bottom to check footer
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(500)
    screenshot_path = f"{SCREENSHOTS_DIR}/{lang['code']}_6_footer.png"
    page.screenshot(path=screenshot_path, full_page=False)
    print(f"[OK] Footer screenshot: {screenshot_path}")

    return True


def main():
    print("Starting Hawkeye Language Tests")
    print(f"Screenshots will be saved to: {SCREENSHOTS_DIR}")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()

        results = {}
        for lang in LANGUAGES:
            try:
                results[lang['code']] = test_language_page(page, lang)
            except Exception as e:
                print(f"[ERROR] {lang['name']} test failed: {e}")
                results[lang['code']] = False

        browser.close()

    # Summary
    print("\n" + "="*50)
    print("TEST SUMMARY")
    print("="*50)
    for lang in LANGUAGES:
        status = "PASS" if results.get(lang['code']) else "FAIL"
        print(f"{lang['name']:12} ({lang['code']}): {status}")

    print(f"\nScreenshots saved to: {SCREENSHOTS_DIR}")
    print("Test completed!")


if __name__ == "__main__":
    main()
