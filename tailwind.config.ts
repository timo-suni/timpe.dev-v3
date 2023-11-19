import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '35%': { opacity: '1' },
          '50%': { opacity: '0' },
          '75%': { opacity: '0' },
        }
      },
      animation: {
        'blink': 'blink 1.5s infinite',
        'pulseShadow': 'pulse-shadow 6s infinite'
      }
    },
    fontFamily: {
      video: ["Video", "serif"],
      effra: ["Effra", "sans-serif"],
    },
  },
  plugins: [],
}
export default config
