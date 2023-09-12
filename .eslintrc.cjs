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
    // disable rules (auto fixed on format)
    'prettier/prettier': 'off',
    'arrow-body-style': 'off',
    // disabled rules (general)
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/no-unescaped-entities': 'off',
    'react/self-closing-comp': 'off',
    'jsx-a11y/anchor-ambiguous-text': 'off',
    // downgrades from error to warn
    'no-unused-vars': 'warn',
    'prefer-const': 'warn',
    'no-console': 'warn',
    'spaced-comment': 'warn',
    'no-multi-spaces': 'warn',
    'import/newline-after-import': 'warn',
    'react/button-has-type': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    // remaining jsx-a11y rules are downgraded to warn
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/autocomplete-valid': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/control-has-associated-label': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/html-has-lang': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/interactive-supports-focus': 'warn',
    'jsx-a11y/label-has-associated-control': 'warn',
    'jsx-a11y/label-has-for': 'warn',
    'jsx-a11y/lang': 'warn',
    'jsx-a11y/media-has-caption': 'warn',
    'jsx-a11y/mouse-events-have-key-events': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-aria-hidden-on-focusable': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
    'jsx-a11y/no-noninteractive-tabindex': 'warn',
    'jsx-a11y/no-onchange': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/prefer-tag-over-role': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/scope': 'warn',
    'jsx-a11y/tabindex-no-positive': 'warn',
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
