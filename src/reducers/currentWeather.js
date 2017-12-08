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
          description: action.payload.weather[0].description, 
          temp: action.payload.main.temp, 
          humidity: action.payload.main.humidity, 
          pressure: action.payload.main.pressure
        }
      ]
      default:
        return state
    }
  }
  
  export default currentWeather
  