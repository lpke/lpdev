module.exports = {
  // best practise: indicates that this is the top-most config file
  root: true,
  extends: [
    // From OOTB 'eslint-config-next' ('strict' selected)
    // includes: eslint-plugin-[react, react-hooks]
    'next/core-web-vitals',
    // Airbnb styleguide rules for ESLint
    'airbnb',
    // Extended for Typescript
    // requires: @typescript-eslint/[eslint-plugin,parser]
    'airbnb-typescript',
    // From 'eslint-config-prettier'
    // disables all ESLint rules that relate to formatting covered by prettier
    // disadvantage: won't show formatting errors in this crossover
    'prettier',
  ],
  // prettier plugin from 'eslint-plugin-prettier'
  // advantage: detects prettier settings and integrates them with eslint
  // disadvantage: shows squiggly lines for any formatting errors
  plugins: ['prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  // global eslint rules
  rules: {
    'prettier/prettier': 'off', // turn on if you want formatting warnings
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
    'spaced-comment': 'warn',
    'no-multi-spaces': 'warn',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
  },
  // filetype-specific overrides
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        // allow omitting "import React from 'react'"
        'react/react-in-jsx-scope': 'off',
        // allow flexible function component definitions
        'react/function-component-definition': 'off',
        // allow use of <></> without restriction
        'react/jsx-no-useless-fragment': 'off',
        // allow use of index in list keys
        'react/no-array-index-key': 'off',
        // allow prop spreading ({...props})
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    // if using storybook, uncomment below to prevent issues
    // {
    //   files: ["*.stories.tsx"],
    //   rules: {
    //     "import/no-extraneous-dependencies": "off",
    //   },
    // },
  ],
};
