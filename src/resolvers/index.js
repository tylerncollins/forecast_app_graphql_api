export default {
  Query: {
    forecast: async (_, { lat, lng }, { dataSources }) => await dataSources.forecastAPI.getForecast(lat, lng),
    resorts: async (_, { name }, { dataSources }) => await dataSources.resortsAPI.getResortsByNameMatch(name)
  }
}