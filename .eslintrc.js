// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: [
        'standard',
        'plugin:vue/recommended',
    ],
    // required to lint *.vue files
    plugins: [
        'vue',
    ],
    // add your custom rules here
    rules: {
        'quotes': [2, 'single', { 'allowTemplateLiterals': true }],
        'object-curly-spacing': 'off',
        'template-curly-spacing': 'off',
        'comma-dangle': [2, 'only-multiline'],
        semi: [2, 'always'],
        'dot-notation': 0,
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        indent: 'off',
        'prefer-const': 'off',
        'promise/param-names': 'off',
        'vue/html-indent': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/mustache-interpolation-spacing': 'off',
        'vue/html-self-closing': 'off',
        'vue/max-attributes-per-line': ['error', {
            singleline: 3,
            multiline: {
                max: 1,
                allowFirstLine: false,
            },
        }],
    },
    globals: {
        App: true,
        Page: true,
        wx: true,
        getApp: true,
        getPage: true,
        requirePlugin: true,
        getCurrentPages: true,
        _: true
    }
};
