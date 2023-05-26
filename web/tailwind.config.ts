import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        header: "145px",
      },
      height: {
        header: "145px",
      },
      colors: {
        primary: "#329a9a",
      },
    },
  },
  plugins: [],
} satisfies Config;
