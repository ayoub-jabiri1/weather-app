
# Weather App

Weather app is simple app that uses OpenWeather api. Its main functionality is providing current weather data of a specific given city.


## Demo

https://ayoub-jabiri1.github.io/weather-app/


## Tech Stack

**Client:** HTML, CSS, JavaScript

**Server:** OpenWeather API
## API Reference

#### Get Data

```https
  GET api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `city`      | `string` | **Required**. The desired city data |
| `api_key` | `string` | **Required**. Your API key |


