import { RESERVE_ROCKETS } from "../constants/constant";

export const reserveRocket = (payload) => ({
    type: RESERVE_ROCKETS,
    payload,
});