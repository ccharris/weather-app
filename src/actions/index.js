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
// commented out open weather map
// const api_key = '1e9f4c35623f109d02df732f81fda04b';
const dark_sky_key = '9f8929cbf9a9be183a3d1775d308c679';
// export const grabWeather =  city  => {
//     return (dispatch) => fetch(`https://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}&units=imperial`)
//         .then(response => response.json())
//         .then(json => dispatch(weatherFetchDataSuccess(json)));
// }

// export const grabForecast =  city  => {
//     return (dispatch) => fetch(`https://api.openweathermap.org/data/2.5/forecast?APPID=${api_key}&q=${city}&units=imperial`)
//         .then(response => response.json())
//         .then( json => dispatch(forecastFetchDataSuccess(json)));
// }
export const grabWeather =  city  => {
    return (dispatch) => fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${dark_sky_key}/39.7684,86.1581`, {method: 'get'})
    .then(response => {
        if(response.ok){
            response.json().then(   
                data => console.log(data)
                // dispatch(weatherFetchDataSuccess(data))
            )
        } else {
            dispatch(weatherFetchDataFailure)
        }
    })
}

export const grabForecast =  city  => {
    return (dispatch) => fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${dark_sky_key}/39.7684,86.1581`)
        .then(response => {
            if(response.ok){
                response.json().then(
                    // data => dispatch(forecastFetchDataSuccess(data))
                )
            } else {
                dispatch(forecastFetchDataFailure)
            }
        })
}

export const forecastFetchDataSuccess = payload => {
    return {
        type: 'FETCH_FORECAST_SUCCESS',
        payload
    };
}

export const weatherFetchDataSuccess = payload => {
    return {
        type: 'FETCH_WEATHER_SUCCESS',
        payload
    };
}

export const forecastFetchDataFailure = () => {
    return {
        type: 'FETCH_FORECAST_FAILURE'
    };
}

export const weatherFetchDataFailure = () => {
    return {
        type: 'FETCH_WEATHER_FAILURE'
    };
}
