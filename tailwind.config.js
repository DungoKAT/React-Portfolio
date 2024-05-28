/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const colors = require("tailwindcss/colors");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            transparent: colors.transparent,
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            components: {
                background: "var(--background)",
                buttonHover: "var(--button-hover)",
                buttonHoverInvert: "var(--button-hover-invert)",
                font: "var(--font)",
                fontHover: "var(--font-hover)",
            },
        },
        fontFamily: {
            opensans: ["Open Sans", "sans-serif"],
            notosans: ["Noto Sans", "sans-serif"],
        },
        screens: {
            mobile479: "479px",
            tablet640: "640px",
            tablet767: "767px",
            tablet991: "991px",
            laptop1024: "1024px",
            desktop1110: "1110px",
            desktop1280: "1280px",
            desktop1440: "1440px",
            desktop1920: "1920px",
        },
        extend: {},
    },
    plugins: [],
};
