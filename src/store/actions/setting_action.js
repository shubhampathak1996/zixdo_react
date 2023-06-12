import api from "../../domain/api";
import {
    GET_SETTINGS_STATED,
    GET_SETTINGS,
    GET_SETTINGS_ENDED,
} from "../types/setting_type";
import * as qs from "qs";
import { handleError } from "../../shared/handleError";
import { setAlert } from "./alert";

export const addSetting = (formData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_SETTINGS_STATED,
        });
        const { data } = await api.post(`/settings`, formData);
        dispatch({
            type: GET_SETTINGS,
            payload: data,
        });
        dispatch({
            type: GET_SETTINGS_ENDED,
        });
    } catch (error) {
        dispatch({
            type: GET_SETTINGS_ENDED,
        });
        dispatch(handleErrorLocal(error));
        dispatch(handleError(error));
    }
};
export const getSettings =
    () =>
        async (dispatch) => {
            try {
                dispatch({
                    type: GET_SETTINGS_STATED,
                });


                const { data } = await api.get(`/settings`);

                dispatch({
                    type: GET_SETTINGS,
                    payload: data,
                });
                dispatch({
                    type: GET_SETTINGS_ENDED,
                });
            } catch (error) {
                dispatch({
                    type: GET_SETTINGS_ENDED,
                });
                dispatch(handleErrorLocal(error));
                dispatch(handleError(error));
            }
        };

export const handleErrorLocal = () => async (dispatch) => { };
