import { combineReducers } from 'redux'
import currentWeather from './currentWeather'
import currentCity from './currentCity'

const weatherApp = combineReducers({
  currentWeather, 
  currentCity
})

export default weatherApp
