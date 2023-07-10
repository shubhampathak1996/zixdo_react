import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import CartComponent from '../../components/cart/CartComponent';

function Cart() {
  return (
    <div>
      <Header />
      <CartComponent />
      <Footer />
    </div>
  );
}

export default Cart;
