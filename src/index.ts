import { createServer } from '@graphql-yoga/node'
import { nicolas, people, getPersonById } from './db/people'
import { getMovies, getMovieById, deleteMovie, addMovie } from './db/movies'
const typeDefs = `
  type Person {
    id: Int!
    name: String!
    age: Int!
    gender: String!
  }

  type Movie {
    id: Int!
    name: String!
    score: Int!
  }

  type Query {
    person(id: Int!): Person
    people: [Person]!
    movies: [Movie]
    movie(id: Int!): Movie
  }

  type Mutation {
    addMovie(name: String!, score: Int!): Movie
  }
`
const resolvers = {
  Query: {
    person: (_: any, { id }: any) => getPersonById(id),
    people: () => people,
    movies: () => getMovies(),
    movie: (_: any, { id }: any) => getMovieById(id),
  },
  Mutation: {
    addMovie: (_: any, { name, score }: any) => addMovie(name, score),
  },
}

// Create your server
const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
})
server.start()
