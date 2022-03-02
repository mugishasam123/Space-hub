import PropTypes from 'prop-types';
import styles from '../styles/displayMission.module.css';

const DisplayContainer = ({ title, data }) => (
  <div className={styles.mainContainer}>
    <h2 className={styles.title}>
      {' '}
      {title}
      {' '}
    </h2>
    {' '}
    <div className={styles.container}>
      {' '}
      {data.map(({ name, id }) => (
        <span className={styles.list} key={id}>
          {' '}
          {name}
          {' '}
        </span>
      ))}
      {' '}
    </div>
    {' '}
  </div>
);

DisplayContainer.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DisplayContainer;
