module.exports = {
  testEnvironment: "jest-environment-jsdom",  // use the installed package
  transform: {
    "^.+\\.jsx?$": "babel-jest"               // JSX/JS transformation
  },
  moduleFileExtensions: ["js", "jsx"],
  testPathIgnorePatterns: ["/node_modules/"],
};
