const initialState = [];

export const allLaunchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_LAUNCH":
      return {
        ...state,
        launches: action.payload,
      };
    default:
      return state;
  }
};

export const launchData = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LAUNCH_DATA":
      return {
        ...state,
        launch: action.payload,
      };
    default:
      return state;
  }
};
