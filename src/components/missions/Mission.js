import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { joinMission, cancelMission } from '../redux/missions/missionActions';
import styles from '../styles/Mission.module.scss';

const Mission = ({
  name,
  id,
  reserved,
  description,
}) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    if (reserved) {
      dispatch(cancelMission(id));
    } else {
      dispatch(joinMission(id));
    }
  };

  const reservedClass = reserved ? styles.reserved : '';
  return (
    <>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className={styles.status}>
        <span className={reservedClass}>{reserved ? 'Active Member' : 'NOT MEMBER'}</span>
      </div>
      <div className={styles.status}>
        <button onClick={clickHandler} type="button" className={reservedClass}>{reserved ? 'Leave Mission' : 'Join Mission'}</button>
      </div>
    </>
  );
};

Mission.defaultProps = {
  reserved: false,
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

export default Mission;
