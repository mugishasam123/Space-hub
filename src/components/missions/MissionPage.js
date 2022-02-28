import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missionActions';

let API_LOADED = false;

const MissionPage = () => {

  const styleContainer = { color: '#000' };
  return (
    <div style={styleContainer}>
      <p>Missions to be display here</p>
    </div>
  );
};

export default MissionPage;
