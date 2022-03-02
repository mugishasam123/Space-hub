import { CANCEL_ROCKETS } from '../constants/constant';

const cancelRocket = (payload) => ({
  type: CANCEL_ROCKETS,
  payload,
});

export default cancelRocket;
