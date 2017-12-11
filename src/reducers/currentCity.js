const currentCity = (state = 'Indianapolis', action) => {
    switch (action.type) {
      case 'SET_CITY':
        return action.city
      default:
        return state
    }
  }
  
  export default currentCity