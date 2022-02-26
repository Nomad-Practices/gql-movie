import axios, { AxiosRequestConfig } from 'axios'

const API_URL = 'https://yts.mx/api/v2/list_movies.json?'

const getRestMoives = async (limit: number, minimum_rating: number) => {
  let REQUEST_URL = API_URL

  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`
  }
  if (minimum_rating > 0) {
    REQUEST_URL += `&minimum_rating=${minimum_rating}`
  }
  try {
    // const response = await fetch(REQUEST_URL)
    // const json = await response.json()
    // return json.data.movies
    const reqConfig: AxiosRequestConfig = {
      method: 'get',
      url: REQUEST_URL,
    }
    const { data: response } = await axios(reqConfig)
    return response.data.movies
  } catch (e) {
    console.error(e)
  }
}

export { getRestMoives }
