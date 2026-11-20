import { defineConfig } from 'oxfmt'

export default defineConfig({
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: false,
  semi: false,
  quoteProps: 'consistent',
  trailingComma: 'all',
  sortPackageJson: true,
  sortImports: {
    partitionByComment: true,
  },
  sortTailwindcss: {
    functions: ['cn', 'cva', 'clsx'],
    stylesheet: './styles/tailwind.css',
  },
  ignorePatterns: [
    'dist/',
    'node_modules/',
    '.next/',
    '.turbo/',
    'coverage/',
    'pnpm-lock.yaml',
    '.pnpm-store/',
  ],
})
