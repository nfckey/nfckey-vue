/* eslint-disable no-undef */
const animate = require('tailwindcss-animate')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: [
    'dark',
    {
      pattern: /sub-card_[a-zA-Z]+$/ // sub-card_color
    },
    {
      pattern: /badge_[a-zA-Z]+$/ // badge_color
    },
    {
      pattern: /sub-card__delimiter_[a-zA-Z]+$/ // sub-card__delimiter_color
    },
    {
      pattern: /bullet-points__item__icon_[a-zA-Z]+$/ // bullet-points__item__icon_color
    }
  ],

  content: ['./src/**/*.{js,jsx,vue}'],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        inter: ['Inter'],
        manrope: ['Manrope']
      },
      colors: {
        'brand-100': '#31919E',
        'brand-200': '#39A9B8',
        'brand-300': '#4CB9C8',
        'brand-400': '#66C3D0',
        'brand-500': '#77CAD5',
        'brand-600': '#88D0DA',
        'brand-700': '#99D7E0',
        'brand-800': '#AADEE5',
        'brand-900': '#BBE4EA',
        'brand-1000': '#CCEBEF',
        'brand-1100': '#DDF2F5',
        'brand-1200': '#EEF8FA',
        'warning-50': '#2C1E08',
        'warning-100': '#583D10',
        'warning-200': '#845B19',
        'warning-300': '#B07A21',
        'warning-400': '#DC9829',
        'warning-500': '#E3AD54',
        'warning-600': '#EAC17F',
        'warning-700': '#FFEED9',
        'warning-800': '#F8EAD4',
        'vneutral-50': '#121417',
        'vneutral-100': '#24282F',
        'vneutral-200': '#363C46',
        'vneutral-300': '#48505E',
        'vneutral-400': '#5A6475',
        'vneutral-500': '#7B8391',
        'vneutral-600': '#9CA2AC',
        'vneutral-700': '#BDC1C8',
        'vneutral-800': '#DEE0E3',
        'vneutral-900': '#E3E4E7',
        'vneutral-1000': '#E6E7E9',
        'vneutral-1100': '#EBECED',
        'vneutral-1200': '#EEEFEF',
        'vneutral-1300': '#F1F1F2',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' }
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 }
        }
      },
      backgroundSize: {
        'size-200': '200% 200%'
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%'
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out'
      }
    }
  },
  plugins: [animate]
}
