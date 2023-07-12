import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import CartComponent from '../../components/cart/CartComponent';
import { UseViewCart, UseRemoveCart } from '../../shared/hooks/UseApi';

function Cart() {
  const { viewCart, view_cart_loading, cartItems } = UseViewCart();
  const { remove_from_cart_loading, removeCartMessage, removeFromCart } =
    UseRemoveCart();
  return (
    <div>
      <Header />
      <CartComponent
        cartItems={cartItems}
        view_cart_loading={view_cart_loading}
        viewCart={viewCart}
        remove_from_cart_loading={remove_from_cart_loading}
        removeCartMessage={removeCartMessage}
        removeFromCart={removeFromCart}
      />
      <Footer />
    </div>
  );
}

export default Cart;
