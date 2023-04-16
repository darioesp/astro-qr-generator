module.exports = {
	printWidth: 100,
	useTabs: true,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	trailingComma: 'none',
	tabWidth: 2,
	multilineTernary: 'always-multiline',
	overrides: [
		{
			files: ['*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false
			}
		}
	],
	endOfLine: 'lf'
}
