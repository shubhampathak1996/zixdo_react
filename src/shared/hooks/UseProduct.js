import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    addProduct,
    getProducts,
    getProduct,
    editProduct,
    deleteProduct,
    getAllProducts,
    getProductBySlug,
} from "../../store/actions/product_action";
import _debounce from "lodash/debounce";
import api from "../../domain/api";
// import { useSelectAllIndustry } from "./UseIndustry";

// Get All Data
export const useAllProducts = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.product);
    const [pageNumber, setPageNumber] = useState(1);
    const [deleteEntry, setDeleteEntry] = useState(null);

    useEffect(() => {
        if (deleteEntry) {
            dispatch(deleteProduct(deleteEntry));
        }
        allQuery();
    }, [deleteEntry, pageNumber, window.location.search]);
    const allQuery = useCallback(
        _debounce(() => {
            dispatch(
                getProducts({
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
export const useSingleProduct = (id) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(getProduct(id));
    }, [id]);
    return [data];
};

// Collection Wise Products
export const useProductsByCollection = () => {
    const [productData, setProductData] = useState(null);
    const getProductData = async (slug) => {
        const { data } = await api.get(`/products/collection/${slug}`);
        setProductData(data);
    };

    return [productData, getProductData];
};

// Get Single Data
export const useSingleProductBySlug = (id) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(getProductBySlug(id));
    }, [id]);
    return [data];
};
// Add Data
export const useCreateProduct = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.product);
    const addData = async (data) => {
        await dispatch(addProduct(data));
    };
    return [data, addData];
};
export const useUpdateProduct = () => {
    const dispatch = useDispatch();
    // const data = useSelector((state) => state.product);
    const updateData = async (id, data) => {
        await dispatch(editProduct(id, data));
    };
    return [updateData];
};

export const useSelectAllProduct = () => {
    const dispatch = useDispatch();
    const [term, setTerm] = useState("");
    const [value, setValue] = useState("");
    const data = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(getAllProducts({ term, value }));
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
