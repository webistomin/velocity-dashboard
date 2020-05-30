module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '\\.(css|less|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/test/__mocks__/fileMock.js',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/components/**/*.tsx', '<rootDir>/pages/**/*.tsx'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
