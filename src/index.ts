import { createServer } from '@graphql-yoga/node'
import { people, getPersonById } from './db/people'
import { addMovie, deleteMovie } from './db/movies'
import { getMovies, getMovieDetail, getMovieSuggestions } from './db/rest'

// typeDefs에서 정의하는 것
// 클라이언트에서 전송할 query, mutation의 이름 + 구조 + required 여부
// 서버에서 전송할 query의 응답 data type
// query는 db로부터 data를 get할 때 사용하고...
// mutation은 db에 data를 추가/수정/삭제할 때 사용한다
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
// resolver
// 서버 입장에서 클라이언트 query 또는 mutation이 들어왔을 때 처리로직 및 응답으로 전달할 데이터를 정의한다.
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
// schema에서는 graphql client, server에서 사용할 query, mutation, resolvers들을 정의한다.
const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
})
server.start()
