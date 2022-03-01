import { ADD_ROCKETS } from "../constants/constant";



const baseUrl = "https://api.spacexdata.com/v3/rockets";



export const fetchRockets = () => (dispatch) => fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
        (data).forEach((rocket) => {
            dispatch({
                type: ADD_ROCKETS,
                payload: {
                    id: rocket.rocket_id,
                    name: rocket.rocket_name,
                    type: rocket.rocket_type,
                    image: rocket.flickr_images[0],
                    description: rocket.description,
                },
            });
        });
    });