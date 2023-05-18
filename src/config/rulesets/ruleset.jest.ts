import type { Rule } from '../../lib/eslint/rulesConfig'
import { projectHas } from '../../lib/eslint/rulesConfig'

export const ruleset: Record<string, Rule> = {
  'jest/consistent-test-it': {
    enabled: projectHas('jest'),
    scope: 'testJest',
    fixable: true,
  },
  'jest/expect-expect': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/max-expects': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/max-nested-describe': {
    enabled: projectHas('jest'),
    options: { max: 4 },
    scope: 'testJest',
  },
  'jest/no-alias-methods': {
    enabled: projectHas('jest'),
    scope: 'testJest',
    fixable: true,
  },
  'jest/no-commented-out-tests': {
    enabled: false, // to me, commented out text means 'no analysis' // projectHas('jest')
    scope: 'testJest',
  },
  'jest/no-conditional-expect': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },

  'jest/no-conditional-in-test': {
    enabled: projectHas('jest'), // let's see. It deprecated jest/no-if
    scope: 'testJest',
  },

  'jest/no-deprecated-functions': {
    enabled: projectHas('jest'),
    scope: 'testJest',
    fixable: true,
  },
  'jest/no-disabled-tests': {
    enabled: projectHas('jest'), // need to revisit process if it becomes a problem
    scope: 'testJest',
  },
  'jest/no-done-callback': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/no-duplicate-hooks': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/no-export': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/no-focused-tests': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/no-hooks': {
    enabled: false, // hooks are useful // projectHas('jest')
    scope: 'testJest',
  },
  'jest/no-identical-title': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/no-if': {
    enabled: false, // deprecated
    scope: 'testJest',
  },
  'jest/no-interpolation-in-snapshots': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/no-jasmine-globals': {
    enabled: projectHas('jest'),
    scope: 'testJest',
    fixable: true,
  },
  'jest/no-large-snapshots': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/no-mocks-import': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/no-restricted-jest-methods': {
    enabled: false, // no use case yet // projectHas('jest'),
    scope: 'testJest',
  },
  'jest/no-restricted-matchers': {
    enabled: false, // the denylist is empty by default // projectHas('jest')
    scope: 'testJest',
  },
  'jest/no-standalone-expect': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/no-test-prefixes': {
    enabled: projectHas('jest'),
    scope: 'testJest',
    fixable: true,
  },
  'jest/no-test-return-statement': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/no-untyped-mock-factory': {
    enabled: false, // needs a custom override, which is too much hassle // projectHas('jest'),
    fixable: true,
    scope: 'testJest',
  },
  'jest/prefer-called-with': {
    enabled: false, // it's fine to use toHaveBeenCalled() // projectHas('jest')
    scope: 'testJest',
  },
  'jest/prefer-comparison-matcher': {
    enabled: projectHas('jest'),
    fixable: true,
    scope: 'testJest',
  },
  'jest/prefer-each': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/prefer-equality-matcher': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/prefer-expect-assertions': {
    enabled: false, // leads to a bloated boilerplate // projectHas('jest')
    scope: 'testJest',
  },
  'jest/prefer-expect-resolves': {
    enabled: projectHas('jest'),
    scope: 'testJest',
    fixable: true,
  },
  'jest/prefer-hooks-in-order': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/prefer-hooks-on-top': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/prefer-mock-promise-shorthand': {
    enabled: projectHas('jest'),
    fixable: true,
    scope: 'testJest',
  },
  'jest/prefer-lowercase-title': {
    enabled: projectHas('jest'),
    options: { ignore: ['describe'] },
    scope: 'testJest',
    fixable: true,
  },
  'jest/prefer-snapshot-hint': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/prefer-spy-on': {
    enabled: projectHas('jest'),
    scope: 'testJest',
    fixable: true,
  },
  'jest/prefer-strict-equal': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/prefer-to-be': {
    enabled: projectHas('jest'),
    scope: 'testJest',
    fixable: true,
  },
  'jest/prefer-to-contain': {
    enabled: projectHas('jest'),
    scope: 'testJest',
    fixable: true,
  },
  'jest/prefer-to-have-length': {
    enabled: projectHas('jest'),
    scope: 'testJest',
    fixable: true,
  },
  'jest/prefer-todo': {
    enabled: projectHas('jest'),
    scope: 'testJest',
    fixable: true,
  },
  'jest/require-hook': {
    enabled: projectHas('jest'), // not sure, need to test
    scope: 'testJest',
  },
  'jest/require-to-throw-message': {
    enabled: false, // leads to a bloated boilerplate // projectHas('jest')
    scope: 'testJest',
  },
  'jest/require-top-level-describe': {
    enabled: false, // not sure if it should be a requirement, especially for small codebases // projectHas('jest')
    scope: 'testJest',
  },
  'jest/unbound-method': {
    enabled: false, // see @typescript-eslint/unbound-method // projectHas('jest'),
    scope: 'testJest',
  },
  'jest/valid-describe-callback': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/valid-expect': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/valid-expect-in-promise': {
    enabled: projectHas('jest'),
    scope: 'testJest',
  },
  'jest/valid-title': {
    enabled: false, // sometimes I'd like to use calaculated titles, e.g. in loops // projectHas('jest')
    scope: 'testJest',
    fixable: true,
  },
}
