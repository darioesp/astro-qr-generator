module.exports = {
	env: {},
	extends: ['eslint:recommended', 'prettier', 'standard', 'plugin:astro/recommended'],
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				extraFileExtensions: ['.astro']
			},
			rules: {
				'astro/no-set-html-directive': 'error'
			}
		}
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './jsconfig.json',
		'@typescript-eslint/no-unused-vars': 'off'
	},
	rules: {
		indent: ['warn', 'tab'],
		'no-unused-vars': 'warn',
		'no-multiple-empty-lines': 'off',
		'no-tabs': 'off',
		'jsx-quotes': ['warn', 'prefer-single'],
		'prettier/prettier': 'error',
		'comma-dangle': 'off',
		'space-before-function-paren': ['error', 'never']
	},
	plugins: ['prettier']
}
