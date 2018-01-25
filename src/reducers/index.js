import { combineReducers } from 'redux'
import currentWeather from './currentWeather'
import currentCity from './currentCity'
import error from './error'

const weatherApp = combineReducers({
  currentWeather, 
  currentCity,
  error
})

export default weatherApp
