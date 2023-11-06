/* eslint-disable import/no-extraneous-dependencies */

import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@pandacss/preset-panda"],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  utilities: {
    color: {
      values: "colors",
    },
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          // Status shades
          error: { value: "var(--colors-red-600)" },
          neutral: { value: "var(--colors-grey-600)" },
          success: { value: "var(--colors-green-600)" },
          warning: { value: "var(--colors-orange-600)" },
          info: { value: "var(--colors-blue-600)" },

          // Primary shades
          "primary-100": { value: "var(--colors-purple-100)" },
          "primary-300": { value: "var(--colors-purple-300)" },
          "primary-600": { value: "var(--colors-purple-600)" },
          primary: { value: "var(--colors-purple-700)" },
          "primary-900": { value: "var(--colors-purple-900)" },

          // Secondary shades
          "secondary-100": { value: "var(--colors-pink-100)" },
          "secondary-300": { value: "var(--colors-pink-300)" },
          "secondary-600": { value: "var(--colors-pink-600)" },
          secondary: { value: "var(--colors-pink-700)" },
          "secondary-900": { value: "var(--colors-pink-900)" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
