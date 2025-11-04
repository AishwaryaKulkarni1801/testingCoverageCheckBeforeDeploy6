module.exports = {
  // Use jest-preset-angular for Angular-specific configurations
  preset: 'jest-preset-angular',
  
  // Set up the test environment
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  
  // Module file extensions
  moduleFileExtensions: [
    'ts',
    'html',
    'js',
    'json'
  ],
  
  // Module name mapping for Angular paths
  moduleNameMapper: {
    // Handle CSS imports
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  
  // Transform files
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: 'tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$'
      }
    ]
  },
  
  // Files to ignore during transformation
  transformIgnorePatterns: [
    'node_modules/(?!.*\\.mjs$)'
  ],
  
  // Coverage configuration
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!src/**/*.d.ts',
    '!src/main.ts',
    '!src/**/*.module.ts',
    '!src/**/*.spec.ts'
  ],
  
  // Coverage reporters
  coverageReporters: [
    'text',
    'html',
    'lcov'
  ],
  
  // Coverage directory
  coverageDirectory: 'coverage',
  
  // Coverage thresholds (less than 80%)
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  
  // Test environment
  testEnvironment: 'jsdom',
  
  // Clear mocks between tests
  clearMocks: true,
  
  // Test timeout
  testTimeout: 30000,
  
  // Verbose output
  verbose: true
};