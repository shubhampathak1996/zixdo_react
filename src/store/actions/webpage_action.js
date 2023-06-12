import api from "../../domain/api";
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
    GET_ALL_WEBPAGES_ENDED,
} from "../types/webpage_type";
import * as qs from "qs";
import { handleError } from "../../shared/handleError";
import { setAlert } from "./alert";

export const addWebpage = (formData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ADD_WEBPAGE_STATED,
        });
        const { data } = await api.post(`/webpages`, formData);
        dispatch({
            type: ADD_WEBPAGE,
            payload: data,
        });
        dispatch({
            type: ADD_WEBPAGE_ENDED,
        });
    } catch (error) {
        dispatch({
            type: ADD_WEBPAGE_ENDED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const getWebpages =
    ({ pageNumber = "" }) =>
        async (dispatch) => {
            try {
                dispatch({
                    type: GET_WEBPAGES_STATED,
                });
                const queryParams = qs.parse(window.location.search.replace("?", ""));
                const query = qs.stringify(queryParams, {
                    encodeValuesOnly: true, // prettify url
                });

                const { data } = await api.get(
                    `/webpages?&${query}`
                );

                dispatch({
                    type: GET_WEBPAGES,
                    payload: data,
                });
                dispatch({
                    type: GET_WEBPAGES_ENDED,
                });
            } catch (error) {
                dispatch({
                    type: GET_WEBPAGES_ENDED,
                });
                dispatch(handleErrorLocal(error));
                dispatch(handleError(error));
            }
        };
export const getWebpage = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_WEBPAGE_STATED,
        });
        const { data } = await api.get(`/webpages/${id}`);

        dispatch({
            type: GET_WEBPAGE,
            payload: data,
        });
        dispatch({
            type: GET_WEBPAGE_ENDED,
        });
    } catch (error) {
        dispatch({
            type: GET_WEBPAGE_STATED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const getWebpageBySlug = (slug) => async (dispatch) => {
    try {
        dispatch({
            type: GET_WEBPAGE_STATED,
        });
        const { data } = await api.get(`/webpages/slug/${slug}`);

        dispatch({
            type: GET_WEBPAGE,
            payload: data,
        });
        dispatch({
            type: GET_WEBPAGE_ENDED,
        });
    } catch (error) {
        dispatch({
            type: GET_WEBPAGE_STATED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const editWebpage = (id, formData) => async (dispatch) => {
    try {
        dispatch({
            type: EDIT_WEBPAGE_STATED,
        });
        const { data } = await api.put(`/webpages/${id}`, formData);
        dispatch({
            type: EDIT_WEBPAGE,
            payload: data,
        });
        dispatch({
            type: EDIT_WEBPAGE_ENDED,
        });
    } catch (error) {
        dispatch({
            type: EDIT_WEBPAGE_ENDED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const deleteWebpage = (id) => async (dispatch) => {
    try {
        const { data } = await api.delete(`/webpages/${id}`);
        dispatch(setAlert("Webpage Deleted Successfully", "success"));
    } catch (error) {
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const getAllWebpages =
    ({ term, value }) =>
        async (dispatch) => {
            try {
                dispatch({
                    type: GET_ALL_WEBPAGES_STATED,
                });
                const { data } = await api.get(
                    `/webpages/all?term=${term}&value=${value}`
                );

                dispatch({
                    type: GET_ALL_WEBPAGES,
                    payload: data,
                });
                dispatch({
                    type: GET_ALL_WEBPAGES_ENDED,
                });
            } catch (error) {
                dispatch({
                    type: GET_ALL_WEBPAGES_ENDED,
                });
                dispatch(handleErrorLocal(error));
                dispatch(handleError(error));
            }
        };

export const handleErrorLocal = () => async (dispatch) => { };
