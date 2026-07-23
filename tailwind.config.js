/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f5f1ed',
        foreground: '#1a1a1a',
        card: '#ffffff',
        'card-foreground': '#1a1a1a',
        popover: '#ffffff',
        'popover-foreground': '#1a1a1a',
        primary: '#1a1a1a',
        'primary-foreground': '#f5f1ed',
        secondary: '#d4cac1',
        'secondary-foreground': '#1a1a1a',
        muted: '#e8e3dd',
        'muted-foreground': '#8a8a8a',
        accent: '#c9b8a8',
        'accent-foreground': '#ffffff',
        border: '#e8e3dd',
        input: '#e8e3dd',
        ring: '#d4cac1',
      },
      borderRadius: {
        lg: '0.625rem',
        md: '0.4375rem',
        sm: '0.3125rem',
      },
    },
  },
  plugins: [],
}

