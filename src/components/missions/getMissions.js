import { createSelector } from 'reselect';

export const getMissions = (state) => state.missions.data;

export const getReservedMissions = createSelector(
  getMissions,
  (missions) => missions
    .filter((mission) => mission.reserved)
    .map((mission) => ({
      name: mission.mission_name,
      id: mission.mission_id,
    })),
);
