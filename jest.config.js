module.exports = {
    rootDir: "../phaser-genesis",
    roots: [`<rootDir>/../tests/tests`],
    transform: {
      '^.+\\.tsx?$': '../tests/node_modules/ts-jest/dist/index.js',
    },
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts)$",
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    // Coverage
    collectCoverage: true,
    coverageReporters: ['text', 'html'],
    collectCoverageFrom: [`<rootDir>/src/**/*.{ts,js}`],
    coveragePathIgnorePatterns: [
      "node_modules",
      "src/stats",
      "src/motion/tween/index.ts",
      "src/motion/tween/Tween.ts",
      "src/motion/tween/TweenPlugin.ts",
      "src/motion/tween/ITweenPlugin.ts"
    ]
  }
