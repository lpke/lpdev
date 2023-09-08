import type { Config as TailwindConfig } from 'tailwindcss';

const tailwindConfig: TailwindConfig = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default tailwindConfig;
