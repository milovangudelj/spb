import plugin from "tailwindcss/plugin";

export const fontVariationPlugin = plugin(
  function ({ addBase, matchUtilities, theme }) {
    addBase({
      ":root": {
        "--fv-wght": '"wght" 400',
        "--fv-slnt": '"slnt" 0',
        "--fv-wdth": '"wdth" 100',
        "--fv-opsz": '"opsz" 14',
      },
    });
    matchUtilities(
      {
        "fv-weight": (value) => ({
          "--fv-wght": `"wght" ${value}`,
          fontVariationSettings: `var(--fv-wght), var(--fv-slnt), var(--fv-wdth), var(--fv-opsz)`,
        }),
      },
      {
        values: theme("fontVariation.weight"),
        supportsNegativeValues: false,
      },
    );
    matchUtilities(
      {
        "fv-slant": (value) => ({
          "--fv-slnt": `"slnt" ${value}`,
          fontVariationSettings: `var(--fv-wght), var(--fv-slnt), var(--fv-wdth), var(--fv-opsz)`,
        }),
      },
      {
        values: theme("fontVariation.slant"),
        supportsNegativeValues: true,
      },
    );
    matchUtilities(
      {
        "fv-width": (value) => ({
          "--fv-wdth": `"wdth" ${value}`,
          fontVariationSettings: `var(--fv-wght), var(--fv-slnt), var(--fv-wdth), var(--fv-opsz)`,
        }),
      },
      {
        values: theme("fontVariation.width"),
        supportsNegativeValues: false,
      },
    );
    matchUtilities(
      {
        "fv-optical": (value) => ({
          "--fv-opsz": `"opsz" ${value}`,
          fontVariationSettings: `var(--fv-wght), var(--fv-slnt), var(--fv-wdth), var(--fv-opsz)`,
        }),
      },
      {
        values: theme("fontVariation.opticalSizing"),
        supportsNegativeValues: false,
      },
    );
  },
  {
    theme: {
      fontVariation: {
        weight: {
          100: "100",
          200: "200",
          300: "300",
          400: "400",
          500: "500",
          600: "600",
          700: "700",
          800: "800",
          900: "900",
          thin: "100",
          extralight: "200",
          light: "300",
          normal: "400",
          medium: "500",
          semibold: "600",
          bold: "700",
          extrabold: "800",
          black: "900",
        },
        slant: {
          0: "0",
          1: "3",
          2: "6",
          3: "9",
          4: "12",
          5: "15",
        },
        width: {
          "ultra-condensed": "25",
          "extra-condensed": "50",
          condensed: "62.5",
          "semi-condensed": "75",
          normal: "100",
          "semi-expanded": "125",
          expanded: "150",
          "extra-expanded": "175",
          "ultra-expanded": "200",
          25: "25",
          50: "50",
          62.5: "62.5",
          75: "75",
          100: "100",
          125: "125",
          150: "150",
          175: "175",
          200: "200",
        },
        opticalSizing: {
          auto: "auto",
          none: "none",
          6: "6",
          14: "14",
          144: "144",
        },
      },
    },
  },
);
