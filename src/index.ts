import { createServer } from '@graphql-yoga/node'
import { people, getPersonById } from './db/people'
import { addMovie, deleteMovie } from './db/movies'
import { getMovies, getMovieDetail, getMovieSuggestions } from './db/rest'

const typeDefs = `
  type Person {
    id: Int!
    name: String!
    age: Int!
    gender: String!
  }

  type Movie {
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
    movies(limit: Int, rating: Float): [Movie]
    movie_detail(id: Int!): Movie
    movie_suggestions(id: Int!): [Movie]
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
    movie_detail: (_: any, { id }: any) => getMovieDetail(id),
    movie_suggestions: (_: any, { id }: any) => getMovieSuggestions(id),
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
