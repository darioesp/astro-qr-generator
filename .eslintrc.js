module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: ['eslint:recommended', 'eslint-config-prettier', 'standard', 'plugin:astro/recommended'],
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				extraFileExtensions: ['.astro'],
			},
			rules: {
				'astro/no-set-html-directive': 'error',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './jsconfig.json',
		'@typescript-eslint/no-unused-vars': 'off',
	},
	rules: {
		indent: ['warn', 'tab'],
		tabWidth: 4,
		'no-unused-vars': 'warn',
		'no-multiple-empty-lines': 'off',
		'no-tabs': 'off',
		'jsx-quotes': ['warn', 'prefer-single'],
		'comma-dangle': ['never'],
	},
}
