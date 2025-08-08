import axios, { AxiosRequestConfig } from 'axios'

export class ApiController {
  static async call<T>(url: string, config: AxiosRequestConfig): Promise<T> {
    axios.interceptors.request.use(
      (config) => {
        console.log('Request:', config)
        return config
      },
      (error) => {
        console.error('Request error:', error)
        return Promise.reject(error)
      },
    )

    axios.interceptors.response.use(
      (response) => {
        console.log('Response:', response)
        return response
      },
      (error) => {
        console.error('Response error:', error)
        return Promise.reject(error)
      },
    )

    const baseUrl =
      typeof window !== 'undefined' ? '/api' : process.env.NEXT_PUBLIC_API_URL

    const response = await axios.request<T>({
      url: `${baseUrl}/${url}`,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers,
      },
      ...config,
    })

    if (!response.status) throw new Error('Failed to fetch data')

    return response.data
  }
}
