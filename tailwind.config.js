/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svg,css}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto  xl:max-w-[87.5rem]": {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] md:text-[1rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-light text-sm tracking-tight uppercase": {},
        },
        ".button": {
          "@apply text-xs font-bold uppercase tracking-wider": {},
        },
      });
    }),
  ],
};
