const { configure, presets } = require('eslint-kit')

module.exports = configure({
  root: __dirname,
  allowDebug: process.env.NODE_ENV !== 'production',
  presets: [
    presets.imports(),
    presets.node(),
    presets.react(),
    presets.prettier(),
    presets.typescript(),
  ],
  extend: {
    overrides: [
      {
        files: ['*.test.ts'],
        env: {
          jest: true,
        },
      },
    ],
    ignorePatterns: [
      '!**/*',
      'node_modules',
      'dist',
      '*.generated.ts',
      'jest.config.js',
    ],
    rules: {
      'import/no-default-export': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
    },
  },
})
