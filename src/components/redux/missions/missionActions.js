const BASE_UR = 'https://api.spacexdata.com/v3/missions';

// Create mission actions
const SET_MISSIONS = 'spaceTravelers/missions/SET_ALL_BOOKS';
const JOIN_MISSION = 'spaceTravelers/missions/JOIN_MISSION';
const CANCEL_MISSION = 'spaceTravelers/missions/CANCEL_MISSION';

const setReserved = (state = {}, action) => {
  switch (action.type) {
    case JOIN_MISSION:
      if (state.mission_id === action.payload) {
        return { ...state, reserved: true };
      }
      return state;
    case CANCEL_MISSION:
      if (state.mission_id === action.payload) {
        return { ...state, reserved: false };
      }
      return state;
    default:
      return state;
  }
};

// Reducer for mission actions
export const missionReducer = (state = { loaded: false, data: [] }, action = {}) => {
  switch (action.type) {
    case SET_MISSIONS:
      return { loaded: true, data: action.payload };
    case JOIN_MISSION:
      return {
        ...state,
        data: state.data.map((mission) => setReserved(mission, action)),
      };
    case CANCEL_MISSION:
      return {
        ...state,
        data: state.data.map((mission) => setReserved(mission, action)),
      };
    default: return state;
  }
};

// Action Creators
export const setMissions = (missions) => ({
  type: SET_MISSIONS,
  payload: missions,
});
export const joinMission = (id) => ({ type: JOIN_MISSION, payload: id });
export const cancelMission = (id) => ({ type: CANCEL_MISSION, payload: id });

// Fetch data from the date
export const fetchMissions = () => async (dispatch) => {
  const response = await fetch(`${BASE_UR}`);
  let data = await response.json();
  data = data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  }));
  dispatch(setMissions(data));
  return data;
};
