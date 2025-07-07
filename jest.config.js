// jest.config.js - Root Jest configuration file

module.exports = {
  projects: [
    {
      displayName: 'client',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/client/src/**/*.test.{js,jsx}'],
      moduleFileExtensions: ['js', 'jsx', 'json'],
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/client/src/tests/__mocks__/fileMock.js',
      },
      setupFilesAfterEnv: ['<rootDir>/client/src/tests/setupTests.js'],
      transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
      },
      coverageDirectory: '<rootDir>/coverage/client',
      collectCoverageFrom: [
        'client/src/**/*.{js,jsx}',
        '!client/src/index.js',
        '!**/node_modules/**',
      ],
    },
    {
      displayName: 'server',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/server/tests/**/*.test.js'],
      moduleFileExtensions: ['js', 'json', 'node'],
      setupFilesAfterEnv: ['<rootDir>/server/tests/setupTests.js'],
      coverageDirectory: '<rootDir>/coverage/server',
      collectCoverageFrom: [
        'server/**/*.js',
        '!server/config/**',
        '!**/node_modules/**',
      ],
    },
  ],
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 60,
      functions: 70,
      lines: 70,
    },
  },
  testTimeout: 10000,
}; 