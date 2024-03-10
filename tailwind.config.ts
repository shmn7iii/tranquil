import { type Config } from "tailwindcss";
import typography from "typography";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  plugins: [typography],
} satisfies Config;
