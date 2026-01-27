/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode via class toggle (ThemeProvider)
  theme: {
    extend: {
      colors: {
        // iOS System Blue - Primary color (replacing purple)
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',  // iOS system blue light
          600: '#0284c7',  // iOS system blue
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // iOS System Colors
        ios: {
          blue: 'var(--color-system-blue)',
          green: 'var(--color-system-green)',
          orange: 'var(--color-system-orange)',
          red: 'var(--color-system-red)',
          teal: 'var(--color-system-teal)',
          yellow: 'var(--color-system-yellow)',
          pink: 'var(--color-system-pink)',
          purple: 'var(--color-system-purple)',
          indigo: 'var(--color-system-indigo)',
        },
        // iOS Semantic Colors
        label: {
          DEFAULT: 'var(--color-label)',
          secondary: 'var(--color-label-secondary)',
          tertiary: 'var(--color-label-tertiary)',
          quaternary: 'var(--color-label-quaternary)',
        },
        background: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
        },
        grouped: {
          DEFAULT: 'var(--color-bg-grouped)',
          secondary: 'var(--color-bg-grouped-secondary)',
          tertiary: 'var(--color-bg-grouped-tertiary)',
        },
        fill: {
          DEFAULT: 'var(--color-fill)',
          secondary: 'var(--color-fill-secondary)',
          tertiary: 'var(--color-fill-tertiary)',
          quaternary: 'var(--color-fill-quaternary)',
        },
        separator: {
          DEFAULT: 'var(--color-separator)',
          opaque: 'var(--color-separator-opaque)',
        },
        // iOS Gray Scale
        'ios-gray': {
          DEFAULT: 'var(--color-gray)',
          2: 'var(--color-gray-2)',
          3: 'var(--color-gray-3)',
          4: 'var(--color-gray-4)',
          5: 'var(--color-gray-5)',
          6: 'var(--color-gray-6)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
        'gradient-ios': 'linear-gradient(135deg, var(--color-system-blue) 0%, var(--color-system-teal) 100%)',
      },
      // iOS-standard spacing
      spacing: {
        '4.5': '18px',
        '11': '44px', // iOS touch target
        '12.25': '49px', // iOS tab bar height
        '13': '52px', // iOS large title row
      },
      // iOS-standard border radius
      borderRadius: {
        'ios-sm': '8px',
        'ios': '10px',
        'ios-lg': '12px',
        'ios-xl': '16px',
        'ios-2xl': '20px',
        'ios-card': '12px',
      },
      // iOS-standard font sizes
      fontSize: {
        'ios-caption2': ['11px', { lineHeight: '13px', letterSpacing: '0.07px' }],
        'ios-caption1': ['12px', { lineHeight: '16px' }],
        'ios-footnote': ['13px', { lineHeight: '18px', letterSpacing: '-0.08px' }],
        'ios-subheadline': ['15px', { lineHeight: '20px', letterSpacing: '-0.24px' }],
        'ios-callout': ['16px', { lineHeight: '21px', letterSpacing: '-0.32px' }],
        'ios-body': ['17px', { lineHeight: '22px', letterSpacing: '-0.41px' }],
        'ios-headline': ['17px', { lineHeight: '22px', letterSpacing: '-0.41px', fontWeight: '600' }],
        'ios-title3': ['20px', { lineHeight: '25px', letterSpacing: '0.38px', fontWeight: '600' }],
        'ios-title2': ['22px', { lineHeight: '28px', letterSpacing: '0.35px', fontWeight: '700' }],
        'ios-title1': ['28px', { lineHeight: '34px', letterSpacing: '0.36px', fontWeight: '700' }],
        'ios-largeTitle': ['34px', { lineHeight: '41px', letterSpacing: '0.37px', fontWeight: '700' }],
      },
      // iOS-standard minimum touch target
      minHeight: {
        'touch': '44px',
        'tabbar': '49px',
      },
      minWidth: {
        'touch': '44px',
      },
    },
  },
  plugins: [],
}
