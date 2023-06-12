import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addSetting,
    getSettings,

} from "../../store/actions/setting_action";
import _debounce from "lodash/debounce";


// Add Data
export const useCreateSetting = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.setting);
    const addData = async (data) => {
        await dispatch(addSetting(data));
    };
    return [data, addData];
};

export const useGetSetting = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.setting);

    useEffect(() => {
        if (!data.settings) {
            dispatch(getSettings());
        }

    }, [])
    return [data];
};


