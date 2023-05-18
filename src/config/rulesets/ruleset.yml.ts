import type { Rule } from '../../lib/eslint/rulesConfig'

export const ruleset: Record<string, Rule> = {
  // YAML Rules
  'yml/block-mapping-question-indicator-newline': {
    enabled: false, // covered by Prettier
    scope: 'yaml',
    fixable: true,
  },
  'yml/block-mapping': {
    enabled: true,
    scope: 'yaml',
    fixable: true,
  },
  'yml/block-mapping-colon-indicator-newline': {
    enabled: false, // seems too opinionated, can reconsider in the future
    scope: 'yaml',
    fixable: true,
  },
  'yml/block-sequence-hyphen-indicator-newline': {
    enabled: false, // covered by Prettier
    scope: 'yaml',
    fixable: true,
  },
  'yml/block-sequence': {
    enabled: true,
    scope: 'yaml',
    fixable: true,
  },
  'yml/indent': {
    enabled: false, // covered by Prettier
    scope: 'yaml',
    fixable: true,
  },
  'yml/file-extension': {
    enabled: false, // will likely be noisy and potentially conflicting with standard libs
    scope: 'yaml',
  },
  'yml/key-name-casing': {
    enabled: true, // need to see it in action; incompatible with eslintrc.yml
    scope: 'yaml',
  },
  'yml/no-empty-document': {
    enabled: true,
    scope: 'yaml',
  },
  'yml/no-empty-key': {
    enabled: true,
    scope: 'yaml',
  },
  'yml/no-empty-mapping-value': {
    enabled: true,
    scope: 'yaml',
  },
  'yml/no-empty-sequence-entry': {
    enabled: true,
    scope: 'yaml',
  },
  'yml/no-tab-indent': {
    enabled: true,
    scope: 'yaml',
  },
  'yml/no-trailing-zeros': {
    enabled: true,
    scope: 'yaml',
  },
  'yml/plain-scalar': {
    enabled: true,
    scope: 'yaml',
    fixable: true,
  },
  'yml/quotes': {
    enabled: false, // covered by Prettier
    scope: 'yaml',
    fixable: true,
  },
  'yml/require-string-key': {
    enabled: true,
    scope: 'yaml',
  },
  'yml/vue-custom-block/no-parsing-error': {
    enabled: true, // I dont't do Vue, but will keep it just in case
    scope: 'yaml',
  },
  // Extension Rules
  'yml/flow-mapping-curly-newline': {
    enabled: false, // covered by Prettier
    scope: 'yaml',
    fixable: true,
  },
  'yml/flow-mapping-curly-spacing': {
    enabled: false, // covered by Prettier
    scope: 'yaml',
    fixable: true,
  },
  'yml/flow-sequence-bracket-newline': {
    enabled: true,
    scope: 'yaml',
    fixable: true,
  },
  'yml/flow-sequence-bracket-spacing': {
    enabled: true,
    scope: 'yaml',
    fixable: true,
  },
  'yml/key-spacing': {
    enabled: false, // covered by Prettier
    scope: 'yaml',
    fixable: true,
  },
  'yml/no-irregular-whitespace': {
    enabled: true,
    scope: 'yaml',
  },
  'yml/no-multiple-empty-lines': {
    enabled: true,
    scope: 'yaml',
  },
  'yml/sort-sequence-values': {
    enabled: false, // I may want to group them by some logc
    scope: 'yaml',
    fixable: true,
  },
  'yml/sort-keys': {
    enabled: false, // I may want to group them by some logc
    scope: 'yaml',
    fixable: true,
  },
  'yml/spaced-comment': {
    enabled: true,
    scope: 'yaml',
    fixable: true,
  },
}
