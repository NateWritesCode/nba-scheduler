/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
  maxWorkers: "100%",
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.+(ts|js)?(x)"],
  testPathIgnorePatterns: ["helpers"],
};
