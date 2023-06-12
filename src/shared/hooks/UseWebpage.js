import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addWebpage,
    getWebpages,
    getWebpage,
    editWebpage,
    deleteWebpage,
    getAllWebpages,
    getWebpageBySlug,
} from "../../store/actions/webpage_action";
import _debounce from "lodash/debounce";
import api from "../../domain/api";
// import { useSelectAllIndustry } from "./UseIndustry";

// Get All Data
export const useAllWebpages = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.webpage);
    const [pageNumber, setPageNumber] = useState(1);
    const [deleteEntry, setDeleteEntry] = useState(null);

    useEffect(() => {
        if (deleteEntry) {
            dispatch(deleteWebpage(deleteEntry));
        }
        allQuery();
    }, [deleteEntry, pageNumber, window.location.search]);
    const allQuery = useCallback(
        _debounce(() => {
            dispatch(
                getWebpages({
                    pageNumber,
                })
            );
        }, 1000),
        []
    );

    useEffect(() => {
        setPageNumber(1);
    }, [window.location.search]);

    const deleteBtnClicked = async (id) => {
        setDeleteEntry(id);
    };

    return [data, setPageNumber, deleteBtnClicked];
};

// Get Single Data
export const useSingleWebpage = (id) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.webpage);
    useEffect(() => {
        dispatch(getWebpage(id));
    }, [id]);
    return [data];
};

// Collection Wise Products
export const useWebpagesByCollection = () => {
    const [webpageData, setWebpageData] = useState(null);
    const getWebpageData = async (slug) => {
        const { data } = await api.get(`/webpages/collection/${slug}`);
        setWebpageData(data);
    };

    return [webpageData, getWebpageData];
};

// Get Single Data
export const useSingleWebpageBySlug = (id) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.webpage);
    useEffect(() => {
        dispatch(getWebpageBySlug(id));
    }, [id]);
    return [data];
};
// Add Data
export const useCreateWebpage = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.webpage);
    const addData = async (data) => {
        await dispatch(addWebpage(data));
    };
    return [data, addData];
};
export const useUpdateWebpage = () => {
    const dispatch = useDispatch();
    // const data = useSelector((state) => state.product);
    const updateData = async (id, data) => {
        await dispatch(editWebpage(id, data));
    };
    return [updateData];
};

export const useSelectAllWebpage = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = useState("");
    const [value, setValue] = useState("");
    const data = useSelector((state) => state.webpage);
    useEffect(() => {
        dispatch(getAllWebpages({ term, value }));
    }, [term, value]);
    return [data, setTerm, setValue];
};

export const useGetDropdownOptions = () => {
    //  const [client, setClientSearchField, setClientSearchValue] =
    // useSelectAllClient();

    const [dropdownOptions, setDropdownOptions] = useState({});
    // useEffect(() => {
    //   if (industry && industry.all_industrys) {
    //     const newData = industry.all_industrys.map((item) => {
    //       return { label: item.name, value: item.name };
    //     });
    //     setDropdownOptions({ ...dropdownOptions, industry: newData });
    //   }
    // }, [industry]);
    const loadOptions = async (inputValue, callback, field) => {
        // if (field == "parent_category") {
        //   await setCategorySearchField("name");
        //   await setCategorySearchValue(inputValue);
        //   callback(dropdownOptions.parent_category);
        // }
    };

    return [dropdownOptions, loadOptions];
};
