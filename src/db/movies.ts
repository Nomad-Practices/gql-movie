const movies = [
  {
    id: 0,
    name: 'Star Wars - The new one',
    score: 1,
  },
  {
    id: 1,
    name: 'Avengers - The new one',
    score: 8,
  },
  {
    id: 2,
    name: 'The Godfather I',
    score: 99,
  },
  {
    id: 3,
    name: 'Logan',
    score: 2,
  },
]

export const getMovies = () => movies
export const getMovieById = (id: number) => movies.filter((m) => m.id === id)
export const deleteMovie = (id: number) => {
  const targetIdx = movies.findIndex((m) => m.id === id)
  movies.splice(targetIdx, 1)
  return movies
}
export const addMovie = (name: string, score: number) => {
  const newMovie = {
    id: movies.length,
    name,
    score,
  }
  movies.push(newMovie)
  return newMovie
}
