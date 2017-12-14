const weatherForecast = (state = [{}], action) => {
    console.log(action);
      switch (action.type) {
        case 'FETCH_FORECAST_SUCCESS':
        console.log('payload is:', action.payload)
        return [
          {
            todayDescription: action.payload.list[0].weather[0].description, 
            todayTemp: action.payload.list[0].main.temp, 
            todayHumidity: action.payload.list[0].main.humidity, 
            todayPressure: action.payload.list[0].main.pressure,
            tomorrowDescription: action.payload.list[7].weather[0].description, 
            tomorrowTemp: action.payload.list[7].main.temp, 
            tomorrowHumidity: action.payload.list[7].main.humidity, 
            tomorrowPressure: action.payload.list[7].main.pressure,
            twoDaysDescription: action.payload.list[13].weather[0].description, 
            twoDaysTemp: action.payload.list[13].main.temp, 
            twoDaysHumidity: action.payload.list[13].main.humidity, 
            twoDaysPressure: action.payload.list[13].main.pressure,
            threeDaysDescription: action.payload.list[21].weather[0].description, 
            threeDaysTemp: action.payload.list[21].main.temp, 
            threeDaysHumidity: action.payload.list[21].main.humidity, 
            threeDaysPressure: action.payload.list[21].main.pressure,
            fourDaysDescription: action.payload.list[29].weather[0].description, 
            fourDaysTemp: action.payload.list[29].main.temp, 
            fourDaysHumidity: action.payload.list[29].main.humidity, 
            fourDaysPressure: action.payload.list[29].main.pressure,
            fiveDaysDescription: action.payload.list[37].weather[0].description, 
            fiveDaysTemp: action.payload.list[37].main.temp, 
            fiveDaysHumidity: action.payload.list[37].main.humidity, 
            fiveDaysPressure: action.payload.list[37].main.pressure,
          }
        ]
        default:
          return state
      }
    }
    
    export default weatherForecast;