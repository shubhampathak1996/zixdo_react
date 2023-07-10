import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import CheckoutComponent from '../../components/checkout/CheckoutComponent';

function Checkout() {
  return (
    <div>
      <Header />
      <CheckoutComponent />
      <Footer />
    </div>
  );
}

export default Checkout;
