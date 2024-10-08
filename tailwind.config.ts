import { type Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  plugins: [
    import('@tailwindcss/typography'),
  ],
} satisfies Config;
