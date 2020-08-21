# Forecast App GraphQL API

GraphQL API for querying snow forecasts and weather reports for ski resorts around the world. Users can search for ski resorts by name (exact or partial), and query various weather forecast data points (powered by DarkSky) for each resort, including a breif summary, daily high and low temperatures, and daily precipitation type and probability.

Access the GraphQL playground [here](https://resort-forecast-service.herokuapp.com/graphql)

The following will query a [Resort Service REST API](https://github.com/tylerncollins/forecast_app_resort_service) for a matching resort or list of resorts by name, and query the DarkSky API for the requested weather information

```
{
  resorts(name: "Bear Mountain Ski Resort") {
    name
    lat
    lng
    forecast {
      currently {
        time
        summary
        temp
        tempLow
        tempHigh
        precipPrblty
        precipType
      }
      daily {
        summary
        icon
        tempLow
        tempHigh
        precipPrblty
        precipType
      }
    }
  }
}
```
