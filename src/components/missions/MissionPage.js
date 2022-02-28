import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missionActions';

// const API_LOADED = false;

const MissionPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
    // if (!API_LOADED) {
    // API_LOADED = true;
  }, [dispatch]);
  const styleContainer = { color: '#000' };
  return (
    <div style={styleContainer}>
      <p>Missions to be display here</p>
    </div>
  );
};

export default MissionPage;
