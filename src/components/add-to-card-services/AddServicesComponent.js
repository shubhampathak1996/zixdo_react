import React from 'react';
import { useEffect, useState } from 'react';
import { UseAddCart, UseViewCart } from '../../shared/hooks/UseApi';
function AddServicesComponent({ service }) {
  const { viewCart, view_cart_loading, cartItems, checkInCart } = UseViewCart();
  const { addToCart, cartMessage, newCartItems } = UseAddCart();
  const [inCart, setInCart] = useState(false);
  const addToCartHandler = () => {
    const session_id = localStorage.getItem('ZIXDO_CART');
    if (session_id) {
      addToCart({ session_id, service_id: service.service_id });
    } else {
      const session_id = localStorage.setItem(
        'ZIXDO_CART',
        Math.random() * 100000
      );
      addToCart({
        session_id: session_id,
        service_id: service.service_id,
      });
    }
  };
  return (
    <>
      <div className="service-card">
        <div className="service-image">
          <img
            src={
              service.image
                ? `https://www.zixdo.com/images/${service.image}`
                : '/assets/images/service1 1.png'
            }
            alt
          />
        </div>
        <div className="service-content">
          <div className="service-heading">{service.service_name}</div>
          <ul>
            {service.contents &&
              service.contents.map((item) => {
                return (
                  <li>
                    <i className="fa fa-check"></i> {item.content}
                  </li>
                );
              })}
          </ul>
          <hr></hr>

          <div className="booking-amount-flex">
            <div className="booking-content">
              <h2>₹{service.price}</h2>
            </div>
            <div className="add-button">
              {checkInCart(service.service_id) ? (
                <button
                  onClick={() => addToCartHandler()}
                  className="btn btn-primary"
                >
                  Added To Cart
                </button>
              ) : (
                <button
                  onClick={() => addToCartHandler()}
                  className="btn btn-primary"
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddServicesComponent;
