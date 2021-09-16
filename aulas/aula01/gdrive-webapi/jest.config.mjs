/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
 
  clearMocks: true,
  restoreMocks: true,
  //collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["text", "lcov"],
  testEnvironment: "node",
  coverageThreshold:{
    global:{
      branch: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },

  watchPathIgnorePattern: [" node_modules"],
  transformIgnorePattern: [" node_modules"],
  collectCoverageFrom: [ "src/**/*.js", "!src/**/index.js" ],


};
