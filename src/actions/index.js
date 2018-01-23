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

const dark_sky_key = '9f8929cbf9a9be183a3d1775d308c679';

export const grabWeather =  (lat, long) => {
    return (dispatch) => fetch(`https://cors-escape.herokuapp.com/https://api.darksky.net/forecast/${dark_sky_key}/${lat},${long}`, {method: 'get'})
    .then(response => {
        if(response.ok){
            response.json().then(   
                data => dispatch(weatherFetchDataSuccess(data))
            )
        } else {
            dispatch(weatherFetchDataFailure)
        }
    })
}

const google_key = 'AIzaSyAVkvqpQhyeClSqP_sFbZtp_SYW8uT3__A';

export const grabCoords = city => {
    return (dispatch) => fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${google_key}`)
    .then(response => {
        if(response.ok){
            response.json().then(   
                data => {
                dispatch(setCity(data.results[0].address_components[0].long_name))
                dispatch(grabWeather(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng))
                })
        } else {
            dispatch(weatherFetchDataFailure)
        }
    })
    
}

export const weatherFetchDataSuccess = payload => {
    return {
        type: 'FETCH_WEATHER_SUCCESS',
        payload
    };
}
export const weatherFetchDataFailure = () => {
    return {
        type: 'FETCH_WEATHER_FAILURE'
    };
}
