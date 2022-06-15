module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'eslint-config-prettier',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'valid-typeof': 'error',
		"no-unsafe-negation": 'error',
		'no-unused-vars': 'error',
		'no-unexpected-multiline': 'error',
		"no-undef": 'error',
		'indent': [
			'error',
			'space'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};