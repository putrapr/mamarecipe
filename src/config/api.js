import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})
 
api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers = {
      Authorization: `${token}`
    }
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default api