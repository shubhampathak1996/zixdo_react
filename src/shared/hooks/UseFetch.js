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

const UseGetCurrentUserInformation = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getUserInforation();
  }, []);
  const getUserInforation = async () => {
    const email = localStorage.getItem('ZIXDO_EMAIL');

    setLoading(true);
    const formData = new FormData();
    formData.append('email', email);
    const { data } = await api.post('/user-profile.php', formData);
    console.log('Data', data);

    setUserData(data);
    setLoading(false);
  };

  return {
    userData,
    user_loading: loading,
  };
};

const UseResetUserPassword = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const resetUserPassword = async (password) => {
    const email = localStorage.getItem('ZIXDO_EMAIL');

    setLoading(true);
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    const { data } = await api.post('/reset-password.php', formData);
    console.log('Data', data);
    setUserData(data);
    setLoading(false);
  };

  return {
    userData,
    userDataMessage: userData,
    user_loading: loading,
    resetUserPassword,
  };
};

// Order Information
const UseUserOrders = () => {
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState(null);
  useEffect(() => {
    getUserOrderData();
  }, []);

  const getUserOrderData = async () => {
    setLoading(true);
    const email = localStorage.getItem('ZIXDO_EMAIL');
    const formData = new FormData();
    formData.append('email', email);
    const { data } = await api.post('/luhaif/my-orders.php', formData);
    setOrderData(data);
    setLoading(false);
  };
  return {
    order_loading: loading,
    orderData,
  };
};

// forget password
const UseForgetPassword = () => {
  const [forgetPassword, setforgetPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const GetforgetPassword = async (formData, email) => {
    setLoading(true);
    const { data } = await api.post('/forgot-password.php', formData);
    console.log(data, 'data');

    setforgetPassword(data);
    setLoading(false);
  };
  return { forgetPassword, forget_loading: loading, GetforgetPassword };
};

// all center
const UseAllCenters = () => {
  const [allCenter, setallCenter] = useState(null);
  const [loading, setLoading] = useState(false);
  const GetAllCenter = async () => {
    setLoading(true);
    const { data } = await api.post('/all-center.php');
    console.log(data);
    setLoading(false);
    setallCenter(data);
  };
  return { allCenter, GetAllCenter, Get_AllCenter_Loading: loading };
};
// Login
const UseLogin = () => {
  const [loginData, setLoginData] = useState(null);
  const [loading, setLoading] = useState(false);
  const loginUser = async (formData, email) => {
    setLoading(true);
    const { data } = await api.post('/login.php', formData);
    console.log('Login Data', data);
    if (data && data.seesion_key) {
      window.localStorage.setItem('ZIXDO_TOKEN', data.seesion_key);
      window.localStorage.setItem('ZIXDO_EMAIL', email);
      window.location.reload();
    }

    setLoginData(data);
    setLoading(false);
  };
  return { loginUser, login_loading: loading, loginData };
};
// getServiceTypeByZipCode
const UseGetServiceTypeByZipCode = () => {
  const [ZipServiceType, setZipServiceType] = useState(null);
  const [loading, setLoading] = useState(false);
  const SearchByZipCode = async (zip_code) => {
    setLoading(true);
    const { data } = await api.get(`/zip-services.php?zip=${zip_code}`);
    setZipServiceType(data);
    setLoading(false);
  };
  return { ZipServiceType, zipservice_type_loading: loading, SearchByZipCode };
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
// homeapge images api
const UseHomepageOfferImage = () => {
  const [offerImage, setofferImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const getOfferImage = async () => {
    setLoading(true);
    const { data } = await api.post('https://www.zixdo.com/Api/home-image.php');
    setofferImage(data);
    setLoading(false);
  };
  return {
    offerImage,
    getOfferImage,
    offer_image_loading: loading,
  };
};
// preffered partner
const usePrferredPartner = () => {
  const [preferredParnterMessage, setpreferredParnterMessage] = useState(null);
  const [loading, setloading] = useState(false);
  const AddPrefferedPartner = async ({
    name,
    email,
    mobile_number,
    city,
    invest_type,
  }) => {
    setloading(true);
    const formData = new FormData();
    formData.append('full_name', name);
    formData.append('email_address', email);
    formData.append('contact_number', mobile_number);
    formData.append('invest_type', invest_type);

    formData.append('city', city);

    const { data } = await api.post(
      'https://www.zixdo.com/Api/franchise.php',
      formData
    );
    setpreferredParnterMessage(data);
    setloading(false);
  };
  return {
    preferredParnterMessage,
    AddPrefferedPartner,
    preferred_partner_loading: loading,
  };
};
// gallary
const UseGalleryImages = () => {
  const [galleryImage, setgalleryImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const GetGalleryImages = async () => {
    setLoading(true);
    const { data } = await api.post('https://www.zixdo.com/Api/gallery.php');
    setgalleryImage(data);
    setLoading(false);
  };

  return {
    galleryImage,
    GetGalleryImages,
    galley_images_loading: loading,
  };
};
// subscription plan
const UseSubscriptionPlan = () => {
  const [subscription, setsubscription] = useState(null);
  const [loading, setLoading] = useState(false);
  const GetSubscriptionPlan = async () => {
    setLoading(true);
    const { data } = await api.post(
      'https://zixdo.com/Api/subscription-plan.php'
    );
    setsubscription(data);
    setLoading(false);
  };
  return {
    subscription,
    GetSubscriptionPlan,
    subscription_plan_loading: loading,
  };
};
// user-subscription
const UseSubscriptionRegistration = () => {
  const [subscriptionRegistration, setsubscriptionRegistration] =
    useState(null);
  const [loading, setLoading] = useState(false);
  const AddSubcriptionRegistration = async ({
    full_name,
    plan_id,
    email,
    phone,
    nearest_store,
    zip,
    vehicle_type,
    address,
    payment_option,
  }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('full_name', full_name);
    formData.append('paln_id', plan_id);
    formData.append('email', email);
    formData.append('contact_number', phone);
    formData.append('store_id', nearest_store);
    formData.append('zip', zip);
    formData.append('vehicle_type', vehicle_type);
    formData.append('complete_address', address);
    formData.append('payment_options', payment_option);
    const { data } = await api.post(
      'https://www.zixdo.com/Api/subscription-place-order.php',
      formData
    );
    setsubscriptionRegistration(data);
    setLoading(false);
  };

  return {
    subscriptionRegistration,
    AddSubcriptionRegistration,
    subscription_registration_loading: loading,
  };
};
// coupon code
const UseCouponCode = () => {
  const [CouponCode, setCouponCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const GetCouponCode = async ({ coupon_code }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('coupon_code', coupon_code);
    console.log(coupon_code, 'coupon-code');
    const { data } = await api.post(
      'https://zixdo.com/Api/coupon-code.php',
      formData
    );
    setCouponCode(data);
    setLoading(false);
  };
  return {
    CouponCode,
    GetCouponCode,
    coupon_code_loading: loading,
  };
};
// partners
const UsePartnerImages = () => {
  const [partnerImage, setpartnerImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const GetPartnerImage = async () => {
    setLoading(true);
    const { data } = await api.get('https://www.zixdo.com/Api/partners.php');
    setpartnerImage(data);
    setLoading(false);
  };
  return {
    partnerImage,
    GetPartnerImage,
    partner_image_loading: loading,
  };
};
// single_partner
const UseSingleLocation = () => {
  const [SingleLocation, setSingleLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const GetSingleFranchise = async (custom_url) => {
    setLoading(true);
    const { data } = await api.get(
      `https://zixdo.com/Api/franchise-details.php?custom_url=${custom_url}`
    );
    setSingleLocation(data);
    setLoading(false);
  };
  return {
    SingleLocation,
    GetSingleFranchise,
    Single_location_loading: loading,
  };
};
// testimonial
const UseTestimonial = () => {
  const [testimonial, setTestimonial] = useState(null);
  const [loading, setLoading] = useState(false);
  const GetTestimonial = async () => {
    setLoading(true);
    const { data } = await api.get(
      'https://www.zixdo.com/Api/client-feedback.php'
    );
    // console.log(data, 'datasssss');
    setTestimonial(data);
    setLoading(false);
  };
  return {
    testimonial,
    GetTestimonial,
    testimonial_loading: loading,
  };
};

export {
  useFetch,
  usePost,
  UseRegister,
  UseLogin,
  UseServiceType,
  usePrferredPartner,
  UseSubscriptionPlan,
  UseGalleryImages,
  UseGetServiceTypeByZipCode,
  UseSubCat,
  UseGetBrandType,
  UseSubscriptionRegistration,
  UseGetServices,
  UseForgetPassword,
  UseCenterFilter,
  UseHomepageOfferImage,
  UsePartnerImages,
  UseServiceName,
  UseAuthenticated,
  UseSingleLocation,
  UseGetCurrentUserInformation,
  UseResetUserPassword,
  UseUserOrders,
  UseCouponCode,
  UseTestimonial,
  UseAllCenters,
};
