module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: ["prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ["import", "jest", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "import/no-dynamic-require": "off",
    "no-param-reassign": "off",
    "no-unused-expressions": "off",
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }]
  }
};
