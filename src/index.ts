import { createServer } from '@graphql-yoga/node'
import resolvers from '../graphql/resolver'

// Create your server
const server = createServer({
  schema: {
    typeDefs: `type Query {
  name: String!
}
`,
    resolvers,
  },
})
server.start()
