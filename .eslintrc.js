module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: '@antfu/eslint-config',
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
  },
}
