import BaseService from './base.service'

export default class LocationsService extends BaseService {
  constructor () {
    super('http://localhost:3000')
  }

  get () {
    return this.client.get('/location')
  }

  post (data) {
    return this.client.post('/location', data)
  }

  put (data) {
    return this.client.put('/location', data)
  }
}
