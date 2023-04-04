module.exports = {
	printWidth: 100,
	useTabs: true,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	trialingComma: 'none',
	tabWidth: 2,
	overrides: [
		{
			files: ['*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false,
			},
		},
	],
	endOfLine: 'lf',
}
