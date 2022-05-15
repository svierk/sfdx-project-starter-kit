const { jestConfig } = require('@salesforce/sfdx-lwc-jest/config');

module.exports = {
  ...jestConfig,
  coverageReporters: ['clover', 'json', 'text', 'lcov', 'cobertura'],
  modulePathIgnorePatterns: ['/.localdevserver'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'tests',
        outputName: 'test-results-lwc.xml'
      }
    ]
  ]
};
