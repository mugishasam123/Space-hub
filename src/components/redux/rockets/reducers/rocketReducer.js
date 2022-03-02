import { ADD_ROCKETS, RESERVE_ROCKETS, CANCEL_ROCKETS } from "../constants/constant";

const initialState = [];

export const rocketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ROCKETS:
            return [...state, action.payload];
        case RESERVE_ROCKETS:
            const newState = state.map(rocket => {
                console.log(action.payload, "reserved")
                if (rocket.id !== action.payload)
                    return rocket;
                return {...rocket, reserved: true };
            });
            return [...newState]
        case CANCEL_ROCKETS:
            return state.map(rocket => {
                console.log(action.payload, "canceled")
                if (rocket.id !== action.payload)
                    return rocket;
                return {...rocket, reserved: false };
            });

        default:
            return state;
    }
};