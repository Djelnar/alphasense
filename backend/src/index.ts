import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { resolvers } from './resolvers.generated'
import { typeDefs } from './typeDefs.generated'
import { WeatherDataSource } from './weather/data-source'

export interface ContextValue {
  dataSources: {
    weatherDataSource: WeatherDataSource
  }
}

async function main() {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await startStandaloneServer(server, {
    context: async () => ({
      dataSources: {
        weatherDataSource: new WeatherDataSource(),
      },
    }),
    listen: {
      host: '0.0.0.0',
      port: 4000,
    },
  })
  console.log(`🚀 Server ready at ${url}`)
}
main()
