import { createServer } from '@graphql-yoga/node'
import { people, getPersonById } from './db/people'
import { getMovies, getMovieById, deleteMovie, addMovie } from './db/movies'
import { getRestMoives } from './db/rest'

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

  type RestMovie {
    id: Int!
    title: String!
    rating: Float!
    summary: String!
    language: String!
    medium_cover_image: String!
  }

  type Query {
    person(id: Int!): Person
    people: [Person]!
    movies: [Movie]
    movie(id: Int!): Movie
    restmovies(limit: Int, rating: Float): [RestMovie]
  }

  type Mutation {
    addMovie(name: String!, score: Int!): Movie
    deleteMovie(id: Int!): [Movie]
  }
`
const resolvers = {
  Query: {
    person: (_: any, { id }: any) => getPersonById(id),
    people: () => people,
    movies: () => getMovies(),
    movie: (_: any, { id }: any) => getMovieById(id),
    restmovies: (_: any, { limit, rating }: any) =>
      getRestMoives(limit, rating),
  },
  Mutation: {
    addMovie: (_: any, { name, score }: any) => addMovie(name, score),
    deleteMovie: (_: any, { id }: any) => deleteMovie(id),
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
