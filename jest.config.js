module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.js"
      ],
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    transformIgnorePatterns: [
      "/node_modules/(?!@babel).+\\.js$"
    ],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "jest-css-modules"
      }
  };