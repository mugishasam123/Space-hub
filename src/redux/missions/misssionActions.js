// Create mission actions
const SET_MISSIONS = 'spaceTravelers/missions/SET_ALL_BOOKS';
const JOIN_MISSION = 'spaceTravelers/missions/JOIN_MISSION';
const CANCEL_MISSION = 'spaceTravelers/missions/CANCEL_MISSION';

// Action Creators
export const setMissions = () => ({ type: SET_MISSIONS });
export const joinMission = () => ({ type: JOIN_MISSION });
export const cancelMission = () => ({ type: CANCEL_MISSION });
