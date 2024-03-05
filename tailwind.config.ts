import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        base: '16px',
        lg: '19.2px',
        xl: '23.04px',
        '2xl': '27.65px',
        '3xl': '33.18px',
        '4xl': '39.81px',
        '5xl': '47.78px',
      },
      colors: {
        gray: 'rgba(255, 255, 255, .6)',
      },
    },
  },
  plugins: [],
}
export default config
