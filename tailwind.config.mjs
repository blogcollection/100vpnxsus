/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          darkest: '#080318',
          dark: '#100526',
          mid: '#18073A',
          card: '#220B4D',
          elevated: '#2C105E',
        },
        brand: {
          deep: '#6D28D9',
          DEFAULT: '#7C3AED',
          light: '#8B5CF6',
          glow: '#A855F7',
          soft: '#DDD6FE',
        },
        accent: {
          DEFAULT: '#FFB800',
          hover: '#FFC233',
          light: '#FFD15C',
          dark: '#E6A500',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        'glow-purple': '0 0 35px -5px rgba(139, 92, 246, 0.35)',
        'glow-purple-lg': '0 0 60px -10px rgba(168, 85, 247, 0.45)',
        'glow-gold': '0 0 25px -3px rgba(255, 184, 0, 0.45)',
        'dashboard': '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(124, 58, 237, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
