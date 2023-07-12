import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { TextInput, SelectBox, CheckBox } from '../../components/Form/Form';
import * as Yup from 'yup';
function CartComponent() {
  return (
    <div>
      <section className="cart ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="shoping-cart-table table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="cart-product-remove">x</td>
                      <td className="cart-product-image">
                        <a href="product-details.html">
                          <img src="/assets/images/service1 1.png" alt />
                        </a>
                      </td>
                      <td className="cart-product-info">
                        <h4>
                          <a href="product-details.html">
                            Brake Conversion Kit
                          </a>
                        </h4>
                      </td>
                      <td className="cart-product-price">₹149.00</td>
                      <td className="cart-product-quantity">
                        <div className="cart-plus-minus">
                          <div className="dec qtybutton">-</div>
                          <input
                            type="text"
                            name="qtybutton"
                            className="cart-plus-minus-box"
                          />
                          <div className="inc qtybutton">+</div>
                        </div>
                      </td>
                      <td className="cart-product-subtotal">₹298.00</td>
                    </tr>
                    <tr className="cart-coupon-row appply">
                      <td colSpan={6}>
                        <Formik
                          initialValues={{
                            coupan_code: '',
                          }}
                          validationSchema={Yup.object({
                            coupan_code: Yup.string().required('Required'),
                          })}
                          onSubmit={async (
                            values,
                            { setSubmitting, resetForm }
                          ) => {
                            setSubmitting(true);

                            resetForm();
                            setSubmitting(false);
                          }}
                        >
                          {(formik) => {
                            console.log(formik);
                            return (
                              <Form>
                                <div className="form-group">
                                  <TextInput
                                    name="coupan_code"
                                    type="text"
                                    placeholder="Enter your Coupon Code"
                                    className="form-control"
                                  />
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-primary mt-4"
                                >
                                  Apply Coupon
                                </button>
                              </Form>
                            );
                          }}
                        </Formik>
                      </td>
                      <td>
                        <button type="submit" className="btn btn-primary end ">
                          Update Cart
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-12">
              <div className="shoping-cart-total car-total mt-50">
                <h4>Cart Totals</h4>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td>₹618.00</td>
                    </tr>
                    <tr>
                      <td>Shipping and Handing</td>
                      <td>₹15.00</td>
                    </tr>
                    <tr>
                      <td>Vat</td>
                      <td>₹00.00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Order Total</strong>
                      </td>
                      <td>
                        <strong>₹633.00</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="cart-button text-right">
                  <Link to="/checkout" className="btn btn-primary">
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CartComponent;
