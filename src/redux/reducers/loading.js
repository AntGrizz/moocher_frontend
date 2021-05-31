const loading = (state = false, action) => {
  switch (action.type) {
    case "LOADING_USER":
      return true
    case "SET_USER":
      return false
    default:
      return state
  }
}

export default loading 