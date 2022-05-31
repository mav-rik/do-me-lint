import fs from 'fs'
import { sync as glob } from 'glob'

import * as log from '../../util/log'

interface Parameters {
  projectDirectory: string
}

export const deleteConflictingConfigurations = ({ projectDirectory }: Parameters) => {
  const files: string[] = glob(projectDirectory + '/.eslintrc{,.js,.yml,.yaml,.json}', {
    ignore: '**/node_modules/**',
    nodir: true,
  })

  files
    .filter(file => file !== projectDirectory + '/.eslintrc.yml') // will be just overwritten, no need to report as conflict
    .forEach(file => {
      log.debug(`deleting ${file}`)
      fs.rmSync(file)
    })
}
