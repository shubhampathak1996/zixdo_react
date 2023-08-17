//useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../domain/api';

const useCategory = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);
  const getCategories = async () => {
    setLoading(true);
    const { data } = await api.get('https://zixdo.com/Api/luhaif/category.php');
    console.log('Category Data', data);
    setCategories(data);
    setLoading(false);
  };
  return {
    categories,
    getCategories,
    categories_loading: loading,
  };
};

const usePinCode = () => {
  const [centres, setCentres] = useState(null);
  const [loading, setLoading] = useState(false);
  const getCenterByPinCode = async (pin) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('zip', pin);
    const { data } = await api.post(
      'https://zixdo.com/Api/luhaif/pincodes.php',
      formData
    );
    setCentres(data);
    setLoading(false);
  };
  return {
    centres,
    center_loading: loading,
    getCenterByPinCode,
  };
};

const useServices = () => {
  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(false);
  const getServices = async ({ brand_id, phone_id, service_type }) => {
    setLoading(true);
    const { data } = await api.get(
      `https://zixdo.com/Api/luhaif/services.php?brand_id=${brand_id}&phone_id=${phone_id}&service_type=${service_type}`
    );
    setServices(data);
    setLoading(false);
  };
  return {
    services,
    services_loading: loading,
    getServices,
  };
};
// homepageServices

const useHomepageServices = () => {
  const [HomePageservices, setHomePageServices] = useState(null);
  const [loading, setLoading] = useState(false);
  const getHomePageServices = async () => {
    setLoading(true);
    const { data } = await api.get(
      `https://zixdo.com/Api/luhaif/services.php?brand_id=1&service_type=0&phone_id=2`
    );
    setHomePageServices(data);
    setLoading(false);
  };
  return {
    HomePageservices,
    Home_Page_services_loading: loading,
    getHomePageServices,
  };
};
// Add to Cart
// Add to Cart
const UseAddCart = () => {
  const { viewCart, cartItems } = UseViewCart();
  const [cartMessage, setCartMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const addToCart = async ({ session_id, service_id }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('session_id', session_id);
    formData.append('service_id', service_id);
    const { data } = await api.post(
      'https://zixdo.com/Api/add-cart.php',
      formData
    );
    setCartMessage(data);
    viewCart({});
    window.location.reload();
    setLoading(false);
  };

  return {
    addToCart,
    add_to_cart_loading: loading,
    cartMessage,
    newCartItems: cartItems,
  };
};
// View Cart
const UseViewCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const viewCart = async ({}) => {
    setLoading(true);
    const cart_token = localStorage.getItem('ZIXDO_CART');
    if (cart_token) {
      const formData = new FormData();
      formData.append('session_id', localStorage.getItem('ZIXDO_CART'));
      const { data } = await api.post(
        'https://zixdo.com/Api/view-cart.php',
        formData
      );
      console.log('Data', data);
      setCartItems(data);
      setLoading(false);
    } else {
      setCartItems([]);
      setLoading(false);
    }
  };
  useEffect(() => {
    viewCart({});
  }, []);

  const checkInCart = (service_id) => {
    if (cartItems) {
      const filterData = cartItems.filter(
        (item) => item.service_id === service_id
      );
      if (filterData && filterData.length > 0) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

  return {
    viewCart,
    view_cart_loading: loading,
    cartItems,
    checkInCart,
  };
};

// Remove Cart
const UseRemoveCart = () => {
  const [cartMessage, setCartMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const removeFromCart = async ({ service_id }) => {
    setLoading(true);
    const cart_token = localStorage.getItem('ZIXDO_CART');
    const formData = new FormData();
    formData.append('session_id', cart_token);
    formData.append('service_id', service_id);
    const { data } = await api.post(
      'https://zixdo.com/Api/remove-cart.php',
      formData
    );
    setCartMessage(data);

    setLoading(false);
  };

  return {
    removeFromCart,
    remove_from_cart_loading: loading,
    removeCartMessage: cartMessage,
  };
};
const UseLat = () => {
  const [centres, setCentres] = useState(null);
  const [loading, setLoading] = useState(false);
  const getCentres = async ({ zip }) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('zip', zip);
    const { data } = await api.post('https://zixdo.com/Api/lat.php', formData);
    setCentres(data);
    setLoading(false);
  };

  return {
    getCentres,
    centres_loading: loading,
    centres,
  };
};

// Checkout
const UseCheckout = () => {
  const [placeOrderMessage, setPlaceOrderMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const placeOrder = async ({
    session_id,
    company_type,
    contact_number,
    water,
    vehicle_type,
    store_id,
    full_name,
    email,
    complete_address,
    payment_options,
  }) => {
    setLoading(true);
    var formdata = new FormData();
    formdata.append('session_id', session_id);
    formdata.append('company_type', company_type);
    formdata.append('contact_number', contact_number);
    formdata.append('water', water);
    formdata.append('vehicle_type', vehicle_type);
    formdata.append('store_id', store_id);
    formdata.append('full_name', full_name);
    formdata.append('email', email);
    formdata.append('complete_address', complete_address);
    formdata.append('payment_options', '1');

    const { data } = await api.post(
      'https://zixdo.com/Api/checkout.php',
      formdata
    );
    setPlaceOrderMessage(data);
    setLoading(false);
  };

  return {
    placeOrder,
    place_order_loading: loading,
    placeOrderMessage,
  };
};
const UseOrderInfo = () => {
  const [orderInfo, setOrderInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const getOrderDetails = async (order_id) => {
    setLoading(true);
    const formData = new FormData();
    formData.append('order_id', order_id);
    const { data } = await api.post(
      'https://zixdo.com/Api/order-info.php',
      formData
    );
    setOrderInfo(data);
    setLoading(false);
  };
  return {
    orderInfo,
    order_loading: loading,
    getOrderDetails,
  };
};
export {
  useCategory,
  usePinCode,
  useServices,
  UseAddCart,
  UseViewCart,
  UseRemoveCart,
  useHomepageServices,
  UseLat,
  UseCheckout,
  UseOrderInfo,
};
