import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "gradient-x": "gradient-x 3s ease infinite",
            },
            keyframes: {
                "gradient-x": {
                    "0%, 100%": {
                        backgroundPosition: "left center",
                    },
                    "50%": {
                        backgroundPosition: "right center",
                    },
                },
            },
        },
    },
    plugins: [],
};

export default config;
