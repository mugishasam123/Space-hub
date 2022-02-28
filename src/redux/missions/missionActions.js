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
