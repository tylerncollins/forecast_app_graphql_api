export default {
  Query: {
    forecast: async (_, { lat, lng }, { dataSources }) => await dataSources.forecastAPI.getForecast(lat, lng),
    resorts: async (_, { name }, { dataSources }) => await dataSources.resortsAPI.getResortsByNameMatch(name)
  },
  Resort: {
    forecast: async (resort, _, { dataSources }) => {
      const { lat, lng } = resort
      return await dataSources.forecastAPI.getForecast(lat, lng)
    }
  }
}
