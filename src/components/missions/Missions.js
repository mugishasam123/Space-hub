import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionActions';
import Mission from './Mission';
import styles from '../styles/Missions.module.scss';

const Missions = () => {
  const dispatch = useDispatch();
  const { data: missions, loaded } = useSelector((state) => state.missions);
  useEffect(() => {
    if (!loaded) {
      dispatch(fetchMissions());
    }
  }, [dispatch, loaded]);
  const loadingMessage = <div> Loading missions... </div>;

  const content = (missions) => (
    <div className={styles.missions}>
      <h2> Mission </h2>
      {' '}
      <h2> Description </h2>
      {' '}
      <h2> Status </h2>
      {' '}
      <div />
      {' '}
      {missions.map((mission) => (
        <Mission
          key={mission.mission_id}
          name={mission.mission_name}
          id={mission.mission_id}
          description={mission.description}
          reserved={mission.reserved}
        />
      ))}
      {' '}
    </div>
  );

  return loaded ? (
    <>
      {content(missions)}
      {' '}
    </>
  ) : loadingMessage;
};

export default Missions;
