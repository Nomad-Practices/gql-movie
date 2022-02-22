import { createServer } from '@graphql-yoga/node'
import resolvers from '../graphql/resolver'

const typeDefs = `
  type Nicolas {
    name: String!
    age: Int!
    gender: String!
  }

  type Query {
    person: Nicolas!
  }
`

// Create your server
const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
})
server.start()
