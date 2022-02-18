module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/prop-types': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'no-unused-expressions': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-console': 0,
    'react/no-unescaped-entities': 0,
  },
};
