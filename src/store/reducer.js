const initState = {
  videos: [],
  loading: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "VIDEO_INIT": {
      state = { ...state };
      state["loading"] = true;
      return state;
    }
    case "VIDEOS": {
      state = { ...state };
      state["videos"] = action.payload;
      state["loading"] = false;
      return state;
    }
    case "VIDEO_FAIL": {
      state = { ...state };
      state["loading"] = false;
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
