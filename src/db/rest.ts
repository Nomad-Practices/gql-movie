import axios, { AxiosRequestConfig } from 'axios'

enum MOVIE_URL {
  LIST = 'https://yts.mx/api/v2/list_movies.json?',
  DETAIL = 'https://yts.mx/api/v2/movie_details.json?',
  SUGGESTIONS = 'https://yts.mx/api/v2/movie_suggestions.json?',
}

const getMovies = async (limit?: number, minimum_rating?: number) => {
  const url = MOVIE_URL.LIST + `limit=${limit}&minimum_rating=${minimum_rating}`

  try {
    const reqConfig: AxiosRequestConfig = {
      method: 'get',
      url,
    }
    const { data: response } = await axios(reqConfig)
    return response.data.movies
  } catch (e) {
    Promise.reject(e)
  }
}

const getMovieDetail = async (id: number) => {
  const url = MOVIE_URL.DETAIL + `movie_id=${id}`

  try {
    const reqConfig: AxiosRequestConfig = {
      method: 'get',
      url,
    }
    const { data: response } = await axios(reqConfig)
    return response.data.movie
  } catch (e) {
    Promise.reject(e)
  }
}

const getMovieSuggestions = async (id: number) => {
  const url = MOVIE_URL.SUGGESTIONS + `movie_id=${id}`

  try {
    const reqConfig: AxiosRequestConfig = {
      method: 'get',
      url,
    }
    const { data: response } = await axios(reqConfig)
    return response.data.movies
  } catch (e) {
    Promise.reject(e)
  }
}

export { getMovies, getMovieDetail, getMovieSuggestions }
