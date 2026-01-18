import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'grimnir': {
          // Dark mode colors (default)
          'bg-dark': '#0f172a',        // Dark navy/black
          'bg-darker': '#020617',      // Near black
          'bg-card': '#1e293b',        // Dark slate for cards
          'bg-card-hover': '#334155',   // Lighter slate for hover
          'border-dark': '#334155',     // Border color
          'text-light': '#e2e8f0',      // Light text
          'text-muted': '#94a3b8',     // Muted text
          // Light mode colors
          'bg-light': '#ffffff',       // White
          'bg-light-card': '#f8fafc',   // Light gray for cards
          'text-dark': '#1e293b',       // Dark text
          'text-muted-light': '#64748b', // Muted text light
          // Accent colors (work in both modes)
          'accent-blue': '#3b82f6',     // Bright blue
          'accent-blue-light': '#60a5fa', // Lighter blue
          'accent-cyan': '#06b6d4',     // Cyan
          'gold': '#fbbf24',            // Gold accent
          'gold-bright': '#fcd34d',     // Bright gold
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['Monaco', 'Menlo', 'Consolas', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#e2e8f0',
            '--tw-prose-headings': '#f1f5f9',
            '--tw-prose-lead': '#cbd5e1',
            '--tw-prose-links': '#60a5fa',
            '--tw-prose-bold': '#f1f5f9',
            '--tw-prose-counters': '#cbd5e1',
            '--tw-prose-bullets': '#475569',
            '--tw-prose-hr': '#334155',
            '--tw-prose-quotes': '#f1f5f9',
            '--tw-prose-quote-borders': '#334155',
            '--tw-prose-captions': '#94a3b8',
            '--tw-prose-code': '#f1f5f9',
            '--tw-prose-pre-code': '#e2e8f0',
            '--tw-prose-pre-bg': '#1e293b',
            '--tw-prose-th-borders': '#334155',
            '--tw-prose-td-borders': '#334155',
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
}
