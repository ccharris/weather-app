import { combineReducers } from 'redux'
import currentWeather from './currentWeather'
import currentCity from './currentCity'
import weatherForecast from './weatherForecast'

const weatherApp = combineReducers({
  currentWeather, 
  currentCity,
  weatherForecast
})

export default weatherApp
