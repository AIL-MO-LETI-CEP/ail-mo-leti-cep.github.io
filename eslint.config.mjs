import { defineConfig } from 'eslint/config';
import _import from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: [
      '**/package-lock.json',
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      '*.log',
      '.idea/**',
      '.vscode/**',
    ]
  },
  {
  files: ['**/*.ts', '**/*.tsx', '**/*.mjs'],
  
  languageOptions: {
    parser: tseslint.parser,
    globals: {
      ...globals.browser,
      ...globals.node
    },
  },
  plugins: {
    'react': react,
    'import': _import,
    'unused-imports': unusedImports,
  },
  rules: {
    ...tseslint.configs.strictTypeChecked.rules,
    ...tseslint.configs.stylisticTypeChecked.rules,
    ..._import.configs.rules,
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'pathGroups': [
          {
            'pattern': '{react,react-dom/**,react-router-dom}',
            'group': 'builtin',
            'position': 'before',
          },
          {
            'pattern': '@src/**',
            'group': 'parent',
            'position': 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': [
          'builtin',
        ],
        'alphabetize': {
          'order': 'asc',
        },
        'newlines-between': 'never',
      },
    ],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        'vars': 'all',
        'varsIgnorePattern': '^_',
        'args': 'after-used',
        'argsIgnorePattern': '^_',
      },
    ],
  },
});
