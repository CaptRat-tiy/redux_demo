module.exports = function reducer(state, action) {
  return [
    ...state,
    {
    // id: state.length + 1,
    id: state[state.length -1] ?
      state[state.length - 1].id + 1 : 1,
    color: action.color,
    size:  action.size,
    motto: action.motto,
  }]
}
