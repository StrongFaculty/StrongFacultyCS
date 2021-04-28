module.exports = {
	mode: 'jit',
	prefix: 'tw-',
	purge: [ './public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
