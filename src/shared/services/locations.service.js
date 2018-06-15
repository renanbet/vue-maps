import BaseService from './base.service'

export default class LocationsService extends BaseService {
  static instance = null;

  static getInstance () {
    if (LocationsService.instance == null) {
      LocationsService.instance = new LocationsService()
    }
    return LocationsService.instance
  }

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
