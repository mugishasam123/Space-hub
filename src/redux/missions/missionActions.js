const BASE_UR = 'https://api.spacexdata.com/v3/missions';

// Create mission actions
const SET_MISSIONS = 'spaceTravelers/missions/SET_ALL_BOOKS';
const JOIN_MISSION = 'spaceTravelers/missions/JOIN_MISSION';
const CANCEL_MISSION = 'spaceTravelers/missions/CANCEL_MISSION';

// Action Creators
export const setMissions = (missions) => ({
  type: SET_MISSIONS,
  payload: missions,
});
export const joinMission = () => ({ type: JOIN_MISSION });
export const cancelMission = () => ({ type: CANCEL_MISSION });

// Create set mission reducer
export const setMissionsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case SET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};
