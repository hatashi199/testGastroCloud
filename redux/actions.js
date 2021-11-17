import axios from "axios";

// GET_ALL_LAUNCHES

export const GET_ALL_LAUNCH = "GET_ALL_LAUNCH";

export const getAllLaunches = () => {
  return (dispatch) => {
    axios.get("https://api.spacexdata.com/v3/launches").then((res) => {
      dispatch({ type: GET_ALL_LAUNCH, payload: res.data });
    });
  };
};

// GET_LAUNCH_DATA

export const GET_LAUNCH_DATA = "GET_LAUNCH_DATA";

export const getLaunchData = (launchId) => {
  return (dispatch) => {
    axios
      .get(`https://api.spacexdata.com/v3/launches/${launchId}`)
      .then((res) => {
        dispatch({ type: GET_LAUNCH_DATA, payload: res.data });
      });
  };
};
