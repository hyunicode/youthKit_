module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node', 'vue'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*.(vue)$': '@vue/vue3-jest',
  },
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
};
