const initState = {
  videos: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "VIDEOS": {
      state = { ...state };
      state["videos"] = action.payload;
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
