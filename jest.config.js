module.exports = {
    roots: [`<rootDir>/tests`],
    transform: {
      '^.+\\.tsx?$': `ts-jest`,
    },
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts)$",
    moduleFileExtensions: ['ts', 'js', 'json', 'node']
  }
