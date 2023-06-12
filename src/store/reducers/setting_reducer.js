import {
    GET_SETTINGS_STATED,
    GET_SETTINGS,
    GET_SETTINGS_ENDED,

} from "../types/setting_type";

const initialState = {
    settings: null,
    loading: true,


};

export const setting_reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_SETTINGS_STATED:
            return {
                ...state,

                loading: true
            };
        case GET_SETTINGS:
            return {
                ...state,
                settings: payload,

            };
        case GET_SETTINGS_ENDED:
            return {
                ...state,
                loading: false
            };


        default:
            return state;
    }
};
