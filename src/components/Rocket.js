import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import './styles/rocket.css';
import reserveRocket from './redux/rockets/actions/reserveRocket';
import cancelRocket from './redux/rockets/actions/cancelRocket';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const handleReserve = () => {
    dispatch(reserveRocket(rocket.id));
  };
  const handleCancel = () => {
    dispatch(cancelRocket(rocket.id));
  };

  return (
    <div className="rocket">
      <img src={rocket.image} alt="" className="rocket-image" />
      <div className="details">
        <h3 className="title">{rocket.name}</h3>

        <p className="description">
          {rocket.reserved && (
            <span className="reserved" name="reservedbadge">
              Reserved&nbsp;&nbsp;
            </span>
          )}
          <span>{rocket.description}</span>
        </p>

        {!rocket.reserved && (
          <button
            type="button"
            className="reserve-cancel"
            onClick={handleReserve}
            name="reservebtn"
          >
            RESERVE ROCKET
          </button>
        )}

        {rocket.reserved && (
          <button type="button" className="reserve-cancel" onClick={handleCancel}>
            CANCEL RESERVATION
          </button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  rocket: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Rocket;
