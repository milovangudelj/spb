import type { Config } from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-karla)", ...defaultTheme.fontFamily.sans],
      karla: ["var(--font-karla)", ...defaultTheme.fontFamily.sans],
      serif: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
      lora: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      d1: [
        "99.08px",
        {
          fontWeight: "700",
          letterSpacing: "-1px",
          lineHeight: "1.3",
        },
      ],
      "d1-mobile": [
        "82.57px",
        {
          fontWeight: "700",
          letterSpacing: "normal",
          lineHeight: "1.3",
        },
      ],
      d2: [
        "82.57px",
        {
          fontWeight: "700",
          letterSpacing: "normal",
          lineHeight: "1.3",
        },
      ],
      "d2-mobile": [
        "68.81px",
        {
          fontWeight: "700",
          letterSpacing: "normal",
          lineHeight: "1.3",
        },
      ],
      h1: [
        "68.81px",
        {
          fontWeight: "700",
          letterSpacing: "normal",
          lineHeight: "1.3",
        },
      ],
      "h1-mobile": [
        "57.34px",
        {
          fontWeight: "700",
          letterSpacing: "normal",
          lineHeight: "1.3",
        },
      ],
      h2: [
        "57.34px",
        {
          fontWeight: "700",
          letterSpacing: "normal",
          lineHeight: "1.3",
        },
      ],
      "h2-mobile": [
        "47.78px",
        {
          fontWeight: "700",
          letterSpacing: "normal",
          lineHeight: "1.3",
        },
      ],
      h3: [
        "47.78px",
        {
          fontWeight: "700",
          letterSpacing: "normal",
          lineHeight: "1.3",
        },
      ],
      "h3-mobile": [
        "39.82px",
        {
          fontWeight: "700",
          letterSpacing: "normal",
          lineHeight: "1.3",
        },
      ],
      h4: [
        "39.82px",
        {
          fontWeight: "700",
          letterSpacing: "normal",
          lineHeight: "1.3",
        },
      ],
      "h4-mobile": [
        "33.18px",
        {
          fontWeight: "700",
          letterSpacing: "normal",
          lineHeight: "1.3",
        },
      ],
      h5: [
        "33.18px",
        {
          fontWeight: "700",
          letterSpacing: "normal",
          lineHeight: "1.3",
        },
      ],
      "h5-mobile": [
        "27.65px",
        {
          fontWeight: "700",
          letterSpacing: "normal",
          lineHeight: "1.3",
        },
      ],
      h6: [
        "27.65px",
        {
          fontWeight: "700",
          letterSpacing: "normal",
          lineHeight: "1.3",
        },
      ],
      "h6-mobile": [
        "23.04px",
        {
          fontWeight: "700",
          letterSpacing: "normal",
          lineHeight: "1.3",
        },
      ],
      "sub-heading": [
        "23.04px",
        {
          fontWeight: "500",
          letterSpacing: "normal",
          lineHeight: "1.5",
        },
      ],
      "sub-heading-mobile": [
        "19.2px",
        {
          fontWeight: "500",
          letterSpacing: "normal",
          lineHeight: "1.5",
        },
      ],
      body: [
        "18px",
        {
          fontWeight: "400",
          letterSpacing: "normal",
          lineHeight: "1.75",
        },
      ],
      button: [
        "18px",
        {
          fontWeight: "700",
          lineHeight: "1.3",
        },
      ],
      "button-md": [
        "15px",
        {
          fontWeight: "700",
          lineHeight: "1.3",
        },
      ],
      "button-sm": [
        "12.5px",
        {
          fontWeight: "700",
          lineHeight: "1.3",
        },
      ],
      "label-md": [
        "15px",
        {
          fontWeight: "400",
          letterSpacing: "normal",
          lineHeight: "1.75",
        },
      ],
      "label-sm": [
        "12.5px",
        {
          fontWeight: "400",
          letterSpacing: "normal",
          lineHeight: "1.75",
        },
      ],
    },
    extend: {
      animation: {
        slide: "slide 60s linear infinite",
        "slide-reverse": "slide-reverse 60s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        "slide-reverse": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config
