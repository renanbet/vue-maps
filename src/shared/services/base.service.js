import axios from 'axios'

export default class BaseService {
  constructor (url) {
    this.url = url
    this.client = this.getClient()
  }

  getClient () {
    const client = axios.create({
      baseURL: this.url,
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return client
  }

  get (route) {
    return this.client.get(route)
  }

  post (route, data) {
    return this.client.post(route, data)
  }

  put (route, data) {
    return this.client.put(route, data)
  }
}
