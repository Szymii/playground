module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:testing-library/react",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "testing-library", "@typescript-eslint"],
  ignorePatterns: ["dist/**"],
  rules: {
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debugging-utils": "warn",
    "testing-library/no-dom-import": "off",
    "no-restricted-imports": [
      "warn",
      {
        patterns: ["helpers/*", "*/**/helpers/*"],
      },
    ],
  },
};
