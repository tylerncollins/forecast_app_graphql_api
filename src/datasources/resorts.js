import { RESTDataSource } from 'apollo-datasource-rest'
import Jsona from 'jsona'

const dataFormatter = new Jsona()

class ResortsAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = `${process.env.RESORTS_API}`
  }

  async getResortsByNameMatch(name) {
    const response = await this.get('/api/v1/resorts', {
      "filter[name][match]": `${name}`,
      "page[number]": 1,
      "page[size]": 7,
      "fields[resorts]": "name,latitude,longitude"
    })
    return dataFormatter.deserialize(response).map(resort => ({
      name: resort.name,
      lat: resort.latitude,
      lng: resort.longitude
    }))
  }
}

export default ResortsAPI
