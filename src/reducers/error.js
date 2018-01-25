const error = (state = '', action) => {
  console.log(action)
  switch (action.type) {
    case 'SET_ERROR':
      return action.error
    default:
      return state
  }
}   
export default error;