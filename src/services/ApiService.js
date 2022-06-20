import axios from 'axios'

const ApiService = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  params: {
    api_key: `${import.meta.env.VITE_API_KEY}`
  }
});

export default ApiService
