import { CANCEL_ROCKETS } from "../constants/constant";

export const cancelRocket = (payload) => ({
    type: CANCEL_ROCKETS,
    payload,
});