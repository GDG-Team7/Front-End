module.exports =  {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends:  [
    // 'airbnb-typescript',
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // uses typescript-specific linting rules
    "plugin:react/recommended", // uses react-specific linting rules
    "prettier", // disables react-specific linting rules that conflict with prettier
    "plugin:prettier/recommended", // uses react-specific linting rules
  ],
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "import",
  ],
  parserOptions:  {
    ecmaVersion:  2020,  // Allows for the parsing of modern ECMAScript features
    sourceType:  "module",  // Allows for the use of imports
    ecmaFeatures:  {
      jsx:  true,  // Allows for the parsing of JSX
    },
    project: "./tsconfig.json",
    tsconfigRootDir: "./",
  },
  rules:  {
    "prettier/prettier": 
    [
      "error", 
      { 
        "endOfLine": "auto" 
      }
    ],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      // Always require blank lines after directive (like 'use-strict'), except between directives
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      // Always require blank lines after import, except between imports
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      // Always require blank lines before and after every sequence of variable declarations and export
      {
        blankLine: 'always',
        prev: '*',
        next: ['const', 'let', 'var', 'export'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var', 'export'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var', 'export'],
        next: ['const', 'let', 'var', 'export'],
      },
      {
        blankLine: 'always',
        prev: ['multiline-const', 'multiline-expression', 'multiline-let'],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['multiline-const', 'multiline-expression', 'multiline-let'],
      },
      // Always require blank lines before and after class declaration, if, do/while, switch, try
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
      },
      {
        blankLine: 'always',
        prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
        next: '*',
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/interface-name-prefix": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/ban-ts-comment": "off",  
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "parameter",
        "format": ["camelCase"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": false
        }
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': "off",
    "react/prop-types": "off",
    // Inline function
    'react/jsx-no-bind': 'off',
    // Inefficient component
    'react/require-optimization': 2,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect 
    // "@typescript-eslint/member-delimiter-style": {
    //     delimiter: "none",
    //     requireLast: true,
    // },
    "no-useless-catch": "off",
    // import plugins
    "import/no-unresolved": "error",
    // "import/named": "error",
    "import/namespace": "error",
    // "import/default": "error",
    "import/export": "error",
    'import/order': [
      'error',
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
  settings: {
    react: {
        version: "detect",
    },
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    },
  }
};