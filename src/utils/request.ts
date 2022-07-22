import axios from 'axios'
import { API_URL } from 'keys'

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getCancelSource = () => {
  const cancelToken = axios.CancelToken
  const source = cancelToken.source()

  return source
}
