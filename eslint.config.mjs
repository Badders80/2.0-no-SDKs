// eslint.config.mjs (minimal, no preset arrays)
import js from '@eslint/js';
import ts from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import reactPlugin from 'eslint-plugin-react';
import tailwindPlugin from 'eslint-plugin-tailwindcss';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    plugins: {
      import: importPlugin,
      react: reactPlugin,
      tailwindcss: tailwindPlugin,
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      },
      react: { version: 'detect' },
    },
    rules: {
      // import/order
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        },
      ],
      // TS/React
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'react/no-unescaped-entities': 'off',
      // Tailwind (helpful)
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  {
    files: ['**/*.example.*', 'src/pages/MyStableDemo.*'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'import/order': 'off',
    },
  },
];
