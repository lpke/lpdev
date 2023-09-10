import type { Config as TailwindConfig } from 'tailwindcss';

const tailwindConfig: TailwindConfig = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};

export default tailwindConfig;
