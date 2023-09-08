/**
 * The settings here will override their equvilent `.editorconfig` file option
 * (where applicable):
 * https://editorconfig.org/#file-format-details
 *
 * As of Sept 2023, this file has all config options available here:
 * https://prettier.io/docs/en/options
 *
 * All values are default, unless they conflict with the Airbnb js style guide:
 * https://github.com/airbnb/javascript
 *
 * Default values and `.editorconfig` equivilent setting names are commented on
 * each setting line in this format: // [default value], [.editorconfig setting]
 */

const prettierConfig = {
  plugins: ['prettier-plugin-tailwindcss'],
  // all config/formatting options
  printWidth: 80, // 80, max_line_length
  tabWidth: 2, // 2, indent_size | tab_width
  useTabs: false, // false, indent_style
  semi: true, // true
  singleQuote: true, // false
  quoteProps: 'as-needed', // 'as-needed'
  jsxSingleQuote: false, // false
  trailingComma: 'all', // 'all'
  bracketSpacing: true, // true
  bracketSameLine: false, // false
  arrowParens: 'always', // 'always'
  rangeStart: 0, // 0
  rangeEnd: Infinity, // Infinity
  requirePragma: false, // false
  insertPragma: false, // false
  proseWrap: 'preserve', // 'preserve'
  htmlWhitespaceSensitivity: 'css', // 'css'
  vueIndentScriptAndStyle: false, // false
  endOfLine: 'lf', // 'lf', end_of_line
  embeddedLanguageFormatting: 'auto', // 'auto'
  singleAttributePerLine: false, // false
};

export default prettierConfig;
