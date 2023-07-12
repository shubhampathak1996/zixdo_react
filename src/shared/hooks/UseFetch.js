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
    console.log('Data', data);
    setRegisterData(data);
    setLoading(false);
  };
  return { registerUser, register_loading: loading, registerData };
};
// Check Authenticated User
const UseAuthenticated = () => {
  const token = localStorage.getItem('ZIXDO_TOKEN');
  const [userData, setUserData] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(token ? true : false);
  const [loadingAuthenticated, setLoadingAuthenticated] = useState(false);

  return {
    user: userData,
    isAuthenticated,
    auth_loading: loadingAuthenticated,
  };
};

// Login
const UseLogin = () => {
  const [loginData, setLoginData] = useState(null);
  const [loading, setLoading] = useState(false);
  const loginUser = async (formData) => {
    setLoading(true);
    const { data } = await api.post('/login.php', formData);
    console.log('Login Data', data);
    if (data && data.seesion_key) {
      window.localStorage.setItem('ZIXDO_TOKEN', data.seesion_key);
    }
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
const UseGetServices = () => {
  const [Services, setServices] = useState(null);
  const [loading, setLoading] = useState(false);
  const getServices = async ({ brand, sub_cate, Service_name }) => {
    setLoading(true);
    const { data } = await api.post('https://zixdo.com/Api/services.php');
    setServices(data);
    setLoading(false);
  };
  useEffect(() => {
    getServices();
  }, []);
  return {
    getServices,
    services_loading: loading,
    Services,
  };
};

// Service Name
const UseServiceName = () => {
  const [ServicesName, setServicesName] = useState(null);
  const [loading, setLoading] = useState(false);
  const getServiceName = async ({ service_id }) => {
    setLoading(true);
    const { data } = await api.post('https://zixdo.com/Api/service-name.php', {
      service_id,
    });
    setServicesName(data);
    setLoading(false);
  };
  useEffect(() => {
    getServiceName();
  }, []);
  return {
    getServiceName,
    services_name_loading: loading,
    ServicesName,
  };
};

// Service Content
const UseServiceContent = () => {
  const [ServicesContent, setServicesContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const getServiceContent = async ({ service_id }) => {
    setLoading(true);
    const { data } = await api.post(
      'https://zixdo.com/Api/services-content.php',
      {
        service_id,
      }
    );
    setServicesContent(data);
    setLoading(false);
  };
  useEffect(() => {
    getServiceContent();
  }, []);
  return {
    getServiceContent,
    services_content_loading: loading,
    ServicesContent,
  };
};

// Add Cart
const UseAddCart = () => {
  const [cartMessage, setCartMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const addtoCart = async ({ session_id, service_id }) => {
    setLoading(true);
    const { data } = await api.post('https://zixdo.com/Api/add-cart.php', {
      session_id,
      service_id,
    });
    setCartMessage(data);
    setLoading(false);
  };
  useEffect(() => {
    addtoCart();
  }, []);
  return {
    addtoCart,
    add_to_cart_loading: loading,
    cartMessage,
  };
};
// View Cart
const UseViewCart = () => {
  const [cartMessage, setCartMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const addtoCart = async ({ session_id, service_id }) => {
    setLoading(true);
    const { data } = await api.post('https://zixdo.com/Api/view-cart.php', {
      session_id,
    });
    setCartMessage(data);
    setLoading(false);
  };
  useEffect(() => {
    addtoCart();
  }, []);
  return {
    addtoCart,
    view_cart_loading: loading,
    cartMessage,
  };
};
// Remove Cart
const UseRemoveCart = () => {
  const [cartMessage, setCartMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const addtoCart = async ({ session_id, service_id }) => {
    setLoading(true);
    const { data } = await api.post('https://zixdo.com/Api/remove-cart.php', {
      session_id,
      service_id,
    });
    setCartMessage(data);
    setLoading(false);
  };
  useEffect(() => {
    addtoCart();
  }, []);
  return {
    addtoCart,
    view_cart_loading: loading,
    cartMessage,
  };
};
// Checkout
const UseCheckout = () => {
  const [cartMessage, setCartMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const addtoCart = async ({ session_id, service_id }) => {
    setLoading(true);
    const { data } = await api.post('https://zixdo.com/Api/checkout.php', {
      session_id,
      service_id,
    });
    setCartMessage(data);
    setLoading(false);
  };
  useEffect(() => {
    addtoCart();
  }, []);
  return {
    addtoCart,
    view_cart_loading: loading,
    cartMessage,
  };
};
// Lat
const UseLat = () => {
  const [cartMessage, setCartMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const addtoCart = async ({ zip, type }) => {
    setLoading(true);
    const { data } = await api.post('https://zixdo.com/Api/lat.php', {
      zip,
      type,
    });
    setCartMessage(data);
    setLoading(false);
  };
  useEffect(() => {
    addtoCart();
  }, []);
  return {
    addtoCart,
    view_cart_loading: loading,
    cartMessage,
  };
};

// Order Info
const UseOrderInfo = () => {
  const [centers, setCenters] = useState(null);
  const [loading, setLoading] = useState(false);
  const getCenters = async ({ text }) => {
    setLoading(true);
    const { data } = await api.post('https://zixdo.com/Api/center-filter.php', {
      textkey: text,
    });
    setCenters(data);
    setLoading(false);
  };
  return {
    centers,
    getCenters,
    centers_loading: loading,
  };
};

// Center Filter
const UseCenterFilter = () => {
  const [centers, setCenters] = useState(null);
  const [loading, setLoading] = useState(false);
  const getCenters = async ({ text }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('textkey', text);
    const { data } = await api.post(
      'https://zixdo.com/Api/center-filter.php',
      formData
    );
    setCenters(data);
    setLoading(false);
  };
  return {
    centers,
    getCenters,
    centers_loading: loading,
  };
};

export {
  useFetch,
  usePost,
  UseRegister,
  UseLogin,
  UseServiceType,
  UseSubCat,
  UseGetBrandType,
  UseGetServices,
  UseCenterFilter,
  UseServiceName,
  UseAuthenticated,
};
