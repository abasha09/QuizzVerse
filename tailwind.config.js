/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        black_6: "#8A8A98",
        bgColor: "rgba(18, 18, 21, 1)",
        bg_2: "#121215",
        bg_4: "#1F1F24",
        primary: "rgba(171, 171, 252, 1)",
        primary1: "#5959E9",
        txt_white2: "#BEC3D5",
        bg_6: "#262631",
        primary_4: "#FDBE8A",
      },
      fontSize: { "6xl": "4rem", "2.5xl": "2.5rem" },
      backgroundImage: {
        customGradient:
          "linear-gradient(90deg, rgba(130, 252, 244, 1), rgba(171, 171, 252, 1), rgba(253, 190, 138, 1))",
        customGradient2: "linear-gradient(90deg, #82FCF4 0%, #ABABFC 100%)",
        "main-background": "url('./icons/main-background.svg')",
      },
      lineHeight: {
        header: "72px",
      },
      borderRadius: { "4xl": "2rem" },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
};
