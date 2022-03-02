import React from 'react';
import { useSelector } from 'react-redux';
import DisplayContainer from './missions/DisplayMission';
import { getReservedMissions } from './missions/getMissions';
import './styles/profile.css';

const Profile = () => {
  const ProfileContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 2rem',
    gap: '2rem',
    flexGrow: 1,
  };

  const reservedMission = useSelector(getReservedMissions);
  const data = useSelector((state) => state.rockets);
  const newData = data.filter((rocket) => rocket.reserved === true);
  return (
    <div style={ProfileContainer}>
      <DisplayContainer
        title="My Missions"
        data={reservedMission}
      />
      <div className="reserved-section">
        <h3 className="reserved-title">My Rockets</h3>
        {newData ? (
          <div className="reserved-rockets">
            {newData.map((rocket) => (
              <span key={rocket.id} className="reserved-rocket">
                {rocket.name}
              </span>
            ))}
          </div>

        ) : (
          <li>No Reserved Rockets to display</li>
        )}
      </div>
    </div>
  );
};

export default Profile;
