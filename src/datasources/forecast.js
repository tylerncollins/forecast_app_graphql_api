import { RESTDataSource } from 'apollo-datasource-rest'

class ForecastAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/`
  }

  convertDateTime(timestamp, timezone) {
    return new Date(timestamp * 1000).toLocaleString("en-US", {timeZone: timezone})
  }

  forecastReducer(forecast) {
    const dateTime = this.convertDateTime(forecast.currently.time, forecast.timezone)
    const date = dateTime.slice(0, 9)
    const time =dateTime.slice(-11)
    const daily = forecast.daily.data.map(data => {
      return {
        summary: data.summary,
        icon: data.icon,
        tempLow: data.temperatureLow,
        tempHigh: data.temperatureHigh,
        precipPrblty: forecast.currently.precipProbability,
        precipType: forecast.currently.precipType
      }
    })

    return {
      timezone: forecast.timezone,
      currently: {
        date: date,
        time: time,
        summary: forecast.currently.summary,
        icon: forecast.currently.icon,
        temp: forecast.currently.temperature,
        precipPrblty: forecast.currently.precipProbability,
        precipType: forecast.currently.precipType
      },
      daily: daily
    }
  }

  async getForecast(lat, lng) {
    const response = await this.get(`${lat},${lng}`, {
      exclude: "minutely,hourly,alerts,flags"
    })
    return this.forecastReducer(response)
  }
}

export default ForecastAPI
