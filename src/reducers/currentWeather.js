const currentWeather = (state = [{}], action) => {
  console.log(action);
    switch (action.type) {
      case 'UPDATE_CURRENT_WEATHER':
        return [
            ...state,
            {
                temp: action.temp,
                description: action.description,
                humidity: action.humidity,
                pressure: action.pressure
            }
        ]
      case 'FETCH_WEATHER_SUCCESS':
      return [
        {
          description: action.payload.currently.summary, 
          temp: action.payload.currently.temperature, 
          humidity: action.payload.currently.humidity * 100, 
          pressure: action.payload.currently.pressure,
          icon: action.payload.currently.icon.toUpperCase().replace(/-/gi, '_'),
          feelsLike: action.payload.currently.apparentTemperature,
          tomorrowTempHigh: action.payload.daily.data[1].temperatureHigh,
          tomorrowTempLow: action.payload.daily.data[1].temperatureLow,
          tomorrowIcon: action.payload.daily.data[1].icon.toUpperCase().replace(/-/gi, '_'),
          tomorrowDescription: action.payload.daily.data[1].summary,
          twoDaysTempHigh: action.payload.daily.data[2].temperatureHigh,
          twoDaysTempLow: action.payload.daily.data[2].temperatureLow,
          twoDaysIcon: action.payload.daily.data[2].icon.toUpperCase().replace(/-/gi, '_'),
          twoDaysDescription: action.payload.daily.data[2].summary,
          threeDaysTempHigh: action.payload.daily.data[3].temperatureHigh,
          threeDaysTempLow: action.payload.daily.data[3].temperatureLow,
          threeDaysIcon: action.payload.daily.data[3].icon.toUpperCase().replace(/-/gi, '_'),
          threeDaysDescription: action.payload.daily.data[3].summary,
          fourDaysTempHigh: action.payload.daily.data[4].temperatureHigh,
          fourDaysTempLow: action.payload.daily.data[4].temperatureLow,
          fourDaysIcon: action.payload.daily.data[4].icon.toUpperCase().replace(/-/gi, '_'),
          fourDaysDescription: action.payload.daily.data[4].summary,
          fiveDaysTempHigh: action.payload.daily.data[5].temperatureHigh,
          fiveDaysTempLow: action.payload.daily.data[5].temperatureLow,
          fiveDaysIcon: action.payload.daily.data[5].icon.toUpperCase().replace(/-/gi, '_'),
          fiveDaysDescription: action.payload.daily.data[5].summary,
        }
      ]
      default:
        return state
    }
  }
  
  export default currentWeather
  