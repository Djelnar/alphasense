import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files'
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: '**/schema.graphql',
  generates: {
    './src': defineConfig({}),
  },
}

// eslint-disable-next-line import/no-default-export
export default config
