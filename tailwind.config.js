/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				principal: "#FFAFDA",
				secundario: "#6155F5",
				terciario: "#121C29",
				white: "#FFFFFF",
				text: "#1A1A1A",
				gray: "#333333",
			},
		},
		fontFamily: {
			circular: ["CircularStd", "sans-serif"],
			playfair: ["PlayfairDisplay", "serif"],
			sans: ["CircularStd", "Montserrat", "sans-serif"],
			serif: ["PlayfairDisplay", "Playfair Display", "serif"],
		},
	},
	plugins: [],
};
