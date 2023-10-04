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
      fontSize: {
        'customFontOne' : ['24px', {
          lineHeight: '32px',
          letterSpacing: '-0.48px',
          fontWeight: '600'
        }],
        'customFontTwo' : ['14px', {
          lineHeight: '24px',
          fontWeight: '400',
        }] 
      },
    },
  },
  plugins: [],
}
export default config
