import axios from 'axios'

const requests = axios.create({
  baseURL: '/mock',
  timeout: 500
})

requests.interceptors.request.use((config) => {
  return config
})

requests.interceptors.response.use((res) => {
  return res
})

export default requests
