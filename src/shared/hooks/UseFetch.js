//useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../domain/api';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading('loading...');
    setData(null);
    setError(null);
    const source = axios.CancelToken.source();
    axios
      .get(url, { cancelToken: source.token })
      .then((res) => {
        setLoading(false);
        //checking for multiple responses for more flexibility
        //with the url we send in.
        res.data && setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError('An error occurred. Awkward..');
      });
    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, loading, error };
}

function usePost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const postRequest = async (url, formData) => {
    setLoading('loading...');
    setData(null);
    setError(null);
    const source = axios.CancelToken.source();
    axios
      .post(url, formData, { cancelToken: source.token })
      .then((res) => {
        setLoading(false);
        //checking for multiple responses for more flexibility
        //with the url we send in.
        res.data.content && setData(res.data.content);
        res.content && setData(res.content);
      })
      .catch((err) => {
        setLoading(false);
        setError('An error occurred. Awkward..');
      });
    return () => {
      source.cancel();
    };
  };

  return { data, loading, error, postRequest };
}

// Register
const UseRegister = () => {
  const [registerData, setRegisterData] = useState(null);
  const [loading, setLoading] = useState(false);
  const registerUser = async (formData) => {
    setLoading(true);
    const { data } = await api.post('/register.php', formData);
    setRegisterData(data);
    setLoading(false);
  };
  return { registerUser, register_loading: loading, registerData };
};

// Login
const UseLogin = () => {
  const [loginData, setLoginData] = useState(null);
  const [loading, setLoading] = useState(false);
  const loginUser = async (formData) => {
    setLoading(true);
    const { data } = await api.post('/login.php', formData);
    setLoginData(data);
    setLoading(false);
  };
  return { loginUser, login_loading: loading, loginData };
};

// ServiceType
const UseServiceType = () => {
  const [serviceTypeData, setServiceTypeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const getServiceTypes = async () => {
    setLoading(true);
    const { data } = await api.get('/service-type.php');
    setServiceTypeData(data);
    setLoading(false);
  };
  return { getServiceTypes, service_type_loading: loading, serviceTypeData };
};

// Sub Cat
const UseSubCat = () => {
  const [subCatData, setSubCatData] = useState(null);
  const [loading, setLoading] = useState(false);
  const getSubCats = async (brand_id) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('brand_id', brand_id);
    const { data } = await api.post('/sub-cat.php', formData);
    setSubCatData(data);
    setLoading(false);
  };
  return { getSubCats, sub_cat_loading: loading, subCatData };
};
// GetServiceType
const UseGetBrandType = () => {
  const [brandTypeData, setBrandTypeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const getBrandTypes = async () => {
    setLoading(true);
    const { data } = await api.post('/get-service-type.php');
    setBrandTypeData(data);
    setLoading(false);
  };
  useEffect(() => {
    getBrandTypes();
  }, []);
  return { getBrandTypes, brand_types_loading: loading, brandTypeData };
};
// Services
const UseGetServices = () => {};

// Service Name
const UseServiceName = () => {};
// Service Content
const UseServiceContent = () => {};

// Add Cart
const UseAddCart = () => {};
// View Cart
const UseViewCart = () => {};
// Lat
const UseLat = () => {};

// Order Info
const UseOrderInfo = () => {};

export {
  useFetch,
  usePost,
  UseRegister,
  UseLogin,
  UseServiceType,
  UseSubCat,
  UseGetBrandType,
};
