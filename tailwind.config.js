
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode:"jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
	theme: {
		extend: {
			borderRadius: {
				"4xl": "2.5rem",
			  },
			  fontFamily: {
				display: [
				  ["Mona Sans", ...defaultTheme.fontFamily.sans],
				  { fontVariationSettings: '"wdth" 125' },
				  
				],
				text: ["var(--font-text)"],
			  },
			
			colors: {
				primary: "#BF83B3",
				secondary: "#917145",
				bgLight: "#f5f5f5",
				bgDark: "bg-gray-900",
				textLight: "#eaeaea",
				textDark: "#eaeaea",
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
				  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			  },
		}
	},
  plugins: [],
  
};
