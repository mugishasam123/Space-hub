import { RESERVE_ROCKETS } from '../constants/constant';

const reserveRocket = (payload) => ({
  type: RESERVE_ROCKETS,
  payload,
});

export default reserveRocket;
