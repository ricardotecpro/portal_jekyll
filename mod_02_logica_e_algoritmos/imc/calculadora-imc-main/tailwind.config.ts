import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        animaRight: {
          'from': {transform: 'translateX(40px)', opacity: '0'},
          'to': {transform: 'translateX(0px)', opacity: '1'},
        },
        animaLeft: {
          'from': {transform: 'translateX(-40px)', opacity: '0'},
          'to': {transform: 'translateX(0px)', opacity: '1'},
        },
        animaTop: {
          'from': {transform: 'translateY(-40px)', opacity: '0'},
          'to': {transform: 'translateY(0px)', opacity: '1'},
        },
        animaDown: {
          'from': {transform: 'translateY(40px)', opacity: '0'},
          'to': {transform: 'translateY(0px)', opacity: '1'},
        },
    
      },
      animation: {
        animaRight: 'animaRight .5s forwards',
        animaLeft: 'animaLeft .5s forwards',
        animaTop: 'animaTop .5s forwards',
        animaDown: 'animaDown .5s forwards',
      },
    },
  },
  plugins: [],
}
export default config
