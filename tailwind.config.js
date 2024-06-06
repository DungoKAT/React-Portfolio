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
            blue: colors.blue,
            components: {
                background: "var(--background)",
                button: "var(--button)",
                buttonHover: "var(--button-hover)",
                buttonHoverInvert: "var(--button-hover-invert)",
                font: "var(--font)",
                fontHover: "var(--font-hover)",
                linkFont: "var(--link-font)",
                linkFontHover: "var(--link-font-hover)",
            },
        },
        fontFamily: {
            opensans: ["Open Sans", "sans-serif"],
            notosans: ["Noto Sans", "sans-serif"],
            kanit: ["Kanit", "sans-serif"],
            arvo: ["Arvo", "sans-serif"],
        },
        animation: {
            fadeIn: "fade-in .15s linear",
            fadeUp1: "fade-up1 .3s ease-in",
            fadeUp2: "fade-up2 .5s ease-in",
            fadeUp3: "fade-up3 .7s ease-in",
            fadeUp4: "fade-up3 1s ease-in",
            leftRightInfinite: "left-right-infinite 1.5s ease-in-out infinite",
            shadowFadeInfinite: "shadow-fade-infinite 5s ease-in-out infinite",
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
