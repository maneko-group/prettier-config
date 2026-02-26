import type { Config } from 'prettier'

export type Prettier = (inputOptions?: Config) => Config

export const prettier: Prettier = (inputOptions = {}) => {
  return {
    printWidth: 100,
    tabWidth: 2,
    useTabs: false,
    semi: false,
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    endOfLine: 'lf',
    quoteProps: 'consistent',
    ...inputOptions,
  }
}
