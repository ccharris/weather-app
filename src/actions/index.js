export const setCity = city => {
  return {
    type: 'SET_CITY',
    city: city
  }
}
export const updateCurrentWeather = (temp, description, humidity, pressure) => {
    return {
      type: 'UPDATE_CURRENT_WEATHER',
      temp,
      description,
      humidity,
      pressure
    }
}

const api_key = '1e9f4c35623f109d02df732f81fda04b';
export const grabWeather =  city  => {
    return (dispatch) => fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}&units=imperial`)
        .then(response => response.json())
        .then(json => dispatch(weatherFetchDataSuccess(json)));
}

export const weatherFetchDataSuccess = payload => {
    return {
        type: 'FETCH_WEATHER_SUCCESS',
        payload
    };
}