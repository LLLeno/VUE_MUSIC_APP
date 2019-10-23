module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript'],
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    // 在这里自定义修改
    'linebreak-style': 0,
    semi: [2, 'never'], // 不加分号
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ], // 允许三元
    'no-plusplus': 0, // 开启i++
    'comma-dangle': [2, 'never'], // 结尾不使用逗号
    'import/extensions': 0,
    'arrow-parens': [2, 'as-needed'], // 箭头函数参数只有一个时无需加括号
    'no-param-reassign': [
      2,
      {
        props: false
      }
    ],
    'no-mixed-operators': 0,
    // 'max-len': [2, {"code": 120} ],
    'vue/no-parsing-error': [
      2,
      {
        'x-invalid-end-tag': false
      }
    ],
    'space-before-function-paren': ['error', 'always'] // 函数名与左括号必留空格
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    }
  ]
}
