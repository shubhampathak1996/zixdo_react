import {
    GET_WEBPAGES_STATED,
    GET_WEBPAGES,
    GET_WEBPAGES_ENDED,
    ADD_WEBPAGE_STATED,
    ADD_WEBPAGE,
    ADD_WEBPAGE_ENDED,
    EDIT_WEBPAGE_STATED,
    EDIT_WEBPAGE,
    EDIT_WEBPAGE_ENDED,
    GET_WEBPAGE_STATED,
    GET_WEBPAGE,
    GET_WEBPAGE_ENDED,
    GET_ALL_WEBPAGES_STATED,
    GET_ALL_WEBPAGES,
    GET_ALL_WEBPAGES_ENDED
} from "../types/webpage_type";

const initialState = {
    webpages_loading: true,
    webpages: null,
    page: null,
    pages: null,
    total_webpages: 0,

    webpage: null,
    webpage_loading: null,

    loading: true,

    webpage_message: null,
    all_webpages: null,
    all_webpages_loading: null,
    add_webpage_loading: true,
    edit_webpage_loading: true
};

export const webpage_reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_WEBPAGES_STATED:
            return {
                ...state,
                webpages: null,
                pages: null,
                page: null,
                total_webpages: 0,
                webpages_loading: true
            };
        case GET_WEBPAGES:
            return {
                ...state,
                webpages: payload.webpages,
                pages: payload.pages,
                page: payload.page,
                total_webpages: payload.count
            };
        case GET_WEBPAGES_ENDED:
            return {
                ...state,
                webpages_loading: false
            };
        case GET_ALL_WEBPAGES_STATED:
            return {
                ...state,
                all_webpages_loading: true,
                all_webpages: null
            };
        case GET_ALL_WEBPAGES:
            return {
                ...state,
                all_webpages: payload
            };
        case GET_ALL_WEBPAGES_ENDED:
            return {
                ...state,
                all_webpages_loading: false
            };

        case ADD_WEBPAGE_STATED:
            return {
                ...state,
                webpage_message: null,
                add_webpage_loading: true
            };
        case ADD_WEBPAGE:
            return {
                ...state,
                webpage_message: payload
            };
        case ADD_WEBPAGE_ENDED:
            return {
                ...state,
                add_webpage_loading: false
            };
        case GET_WEBPAGE_STATED:
            return {
                ...state,
                webpage: null,
                webpage_loading: true
            };
        case GET_WEBPAGE:
            return {
                ...state,
                webpage: payload
            };
        case GET_WEBPAGE_ENDED:
            return {
                ...state,
                webpage_loading: false
            };
        case EDIT_WEBPAGE_STATED:
            return {
                ...state,
                webpage_message: null,
                edit_webpage_loading: true
            };
        case EDIT_WEBPAGE:
            return {
                ...state,
                webpage_message: payload
            };
        case EDIT_WEBPAGE_ENDED:
            return {
                ...state,
                edit_webpage_loading: false
            };

        default:
            return state;
    }
};
