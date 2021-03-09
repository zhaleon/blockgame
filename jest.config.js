module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv:["./server/tests/customMatcher.js"]
};
