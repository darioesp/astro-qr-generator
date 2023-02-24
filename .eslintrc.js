module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		'eslint-config-prettier',
		"standard",
		"plugin:astro/recommended",
	],
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
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		indent: ['warn', 'tab'],
		'no-unused-vars': 'warn',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
			},
		],
		'no-multiple-empty-lines': 'off',
		'no-tabs': 'off',
		quotes: ['warn', 'single'],
		'jsx-quotes': ['warn', 'prefer-single'],
		'eol-last': 'off',
	},
}
