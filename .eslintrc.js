module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
    // 'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    // 'prettier',
  ],
  // add your custom rules here
  rules: {
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: false,
    }],
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 0,
      maxBOF: 0,
    }],
    'indent': 'off',
    '@typescript-eslint/indent': ['error', 2, {
      'CallExpression': {
        arguments: 1,
      },
      'MemberExpression': 1,
      'SwitchCase': 1,
    }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': ['error', {
      allowAsParameter: true,
    }],
    '@typescript-eslint/no-unused-vars': ['warn', {
      argsIgnorePattern: '^_',
    }],
    '@typescript-eslint/explicit-function-return-type': ['warn', {
      allowExpressions: true,
    }],
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['*.ts'],
      rules: {
        // allow TypeScript method signature overloading, see https://github.com/typescript-eslint/typescript-eslint/issues/291
        'no-dupe-class-members': 'off',
      },
    },
  ],
};
