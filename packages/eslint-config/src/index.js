/**
 * Export `untile` configuration preset.
 */

const importPlugin = require('eslint-plugin-import');
const jestPlugin = require('eslint-plugin-jest');
const newWithErrorPlugin = require('eslint-plugin-new-with-error');
const noRelativeImportPathsPlugin = require('eslint-plugin-no-relative-import-paths');
const nodePlugin = require('eslint-plugin-n');
const promisePlugin = require('eslint-plugin-promise');
const securityPlugin = require('eslint-plugin-security');
const sortDestructureKeysPlugin = require('eslint-plugin-sort-destructure-keys');
const sortImportsPlugin = require('@youre/eslint-plugin-sort-imports-es6-autofix');
const sqlTemplatePlugin = require('eslint-plugin-sql-template');
const switchCasePlugin = require('eslint-plugin-switch-case');

module.exports = [
  importPlugin.flatConfigs.recommended,
  {
    files: [
      'test/**/*.js'
    ],
    ...jestPlugin.configs['flat/recommended']
  },
  nodePlugin.configs['flat/recommended-script'],
  {
    ...promisePlugin.configs['flat/recommended'],
    rules: {
      ...promisePlugin.configs['flat/recommended'].rules,
      'promise/no-native': 'off'
    }
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        browser: true,
        es6: true,
        jasmine: true,
        jest: true,
        mocha: true,
        node: true
      },
      parser: require('@babel/eslint-parser'),
      parserOptions: {
        babelOptions: {
          babelrc: false,
          configFile: false
        },
        requireConfigFile: false
      },
      sourceType: 'module'
    },
    plugins: {
      'new-with-error': newWithErrorPlugin,
      'no-relative-import-paths': noRelativeImportPathsPlugin,
      'security': securityPlugin,
      'sort-destructure-keys': sortDestructureKeysPlugin,
      'sort-imports': sortImportsPlugin,
      'sql-template': sqlTemplatePlugin,
      'switch-case': switchCasePlugin
    },
    rules: {
      'accessor-pairs': 'error',
      'array-bracket-spacing': 'error',
      'arrow-parens': ['error', 'as-needed'],
      'arrow-spacing': 'error',
      'block-spacing': 'off',
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      camelcase: 'off',
      'capitalized-comments': ['error', 'always', { ignoreConsecutiveComments: true }],
      'comma-dangle': 'error',
      'comma-spacing': 'error',
      'comma-style': 'error',
      complexity: 'off',
      'computed-property-spacing': 'error',
      'consistent-return': 'off',
      'consistent-this': ['error', 'self'],
      curly: 'error',
      'default-case': 'error',
      'dot-location': ['error', 'property'],
      'dot-notation': 'error',
      'eol-last': 'error',
      eqeqeq: ['error', 'smart'],
      'func-call-spacing': 'error',
      'func-names': 'off',
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'generator-star-spacing': ['error', 'before'],
      'id-length': ['error', { exceptions: ['_', 'e', 'i', 'r', 't', 'x', 'y', 'z'] }],
      'id-match': ['error', '^_$|^[a-zA-Z][a-zA-Z0-9]*$|^[A-Z][_A-Z0-9]+[A-Z0-9]$', {
        onlyDeclarations: true,
        properties: true
      }],
      'import/no-anonymous-default-export': [
        'error',
        {
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowArray: false,
          allowArrowFunction: false,
          allowCallExpression: true,
          allowLiteral: false,
          allowNew: false,
          allowObject: true
        }
      ],
      indent: ['error', 2, { SwitchCase: 1 }],
      'key-spacing': 'error',
      'keyword-spacing': 'error',
      'linebreak-style': 'error',
      'lines-around-comment': 'off',
      'max-depth': ['error', 4],
      'max-nested-callbacks': ['error', 3],
      'max-params': ['error', 4],
      'new-cap': ['error', { capIsNew: true, newIsCap: true }],
      'new-parens': 'error',
      'new-with-error/new-with-error': 'error',
      'newline-before-return': 'error',
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-catch-shadow': 'off',
      'no-cond-assign': ['error', 'always'],
      'no-console': 'error',
      'no-constant-condition': 'error',
      'no-div-regex': 'error',
      'no-dupe-class-members': 'error',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false }],
      'no-floating-decimal': 'error',
      'no-implied-eval': 'error',
      'no-inline-comments': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-mixed-requires': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-native-reassign': 'error',
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-object': 'error',
      'no-new-require': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-path-concat': 'error',
      'no-process-exit': 'error',
      'no-proto': 'error',
      'no-prototype-builtins': 'error',
      'no-relative-import-paths/no-relative-import-paths': ['error', { 'allowSameFolder': true }],
      'no-restricted-imports': ['error', {
        message: 'Please import individual modules from \'lodash/*\' instead.',
        name: 'lodash'
      }],
      'no-return-assign': 'error',
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow': 'error',
      'no-shadow-restricted-names': 'error',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'error',
      'no-undef-init': 'error',
      'no-undefined': 'error',
      'no-underscore-dangle': 'error',
      'no-unexpected-multiline': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',
      'no-unused-vars': 'error',
      'no-use-before-define': 'error',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-var': 'error',
      'no-void': 'error',
      'no-warning-comments': 'off',
      'no-whitespace-before-property': 'error',
      'no-with': 'error',
      'object-curly-spacing': ['error', 'always'],
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'operator-assignment': ['error', 'always'],
      'operator-linebreak': 'error',
      'padded-blocks': ['error', { blocks: 'never', classes: 'always', switches: 'never' }],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'any', next: ['const', 'let', 'var'], prev: ['const', 'let', 'var'] },
        { blankLine: 'always', next: '*', prev: [
          'multiline-expression',
          'multiline-block-like',
          'multiline-const',
          'multiline-let'
        ] },
        { blankLine: 'always', next: [
          'block-like',
          'multiline-block-like'
        ], prev: '*' }
      ],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      radix: 'error',
      'require-await': 'error',
      'require-yield': 'error',
      'security/detect-bidi-characters': 'error',
      'security/detect-buffer-noassert': 'error',
      'security/detect-child-process': 'error',
      'security/detect-non-literal-fs-filename': 'error',
      'security/detect-non-literal-regexp': 'error',
      'security/detect-non-literal-require': 'error',
      'security/detect-unsafe-regex': 'error',
      semi: 'error',
      'semi-spacing': 'error',
      'sort-destructure-keys/sort-destructure-keys': 2,
      'sort-imports': 'off',
      'sort-imports/sort-imports-es6': 'error',
      'sort-keys': ['error', 'asc', { natural: true }],
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', { anonymous: 'never', named: 'never' }],
      'space-in-parens': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'spaced-comment': 'error',
      'sql-template/no-unsafe-query': 'error',
      strict: 'off',
      'switch-case/newline-between-switch-case': 'error',
      'switch-case/no-case-curly': 'error',
      'template-curly-spacing': 'error',
      'vars-on-top': 'error',
      'wrap-iife': ['error', 'inside'],
      'yield-star-spacing': 'error',
      yoda: 'error'
    }
  }
];
