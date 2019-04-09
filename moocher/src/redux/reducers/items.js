const items = (oldState=[], action) => {
  switch(action.type){
    case "GET_ITEMS":
      return [...oldState, action.payload]
    default:
    return oldState
    }
}

export default items