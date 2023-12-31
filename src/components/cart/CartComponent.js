import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { TextInput, SelectBox, CheckBox } from '../../components/Form/Form';
import { UseCouponCode } from '../../shared/hooks/UseFetch';
import * as Yup from 'yup';
function CartComponent({
  cartItems,
  view_cart_loading,
  viewCart,
  remove_from_cart_loading,
  removeCartMessage,
  removeFromCart,
}) {
  const { CouponCode, GetCouponCode, coupon_code_loading } = UseCouponCode();
  const [discount, setDiscount] = useState(null);

  console.log(CouponCode, 'coupon_code');
  console.log('Cart Items', cartItems);
  const [totalCartAmount, setTotalCartAmount] = useState(0);
  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      let totalAmount = 0;
      cartItems.map((item) => {
        const price = parseFloat(Number(item.price)).toFixed(2);
        // console.log('PRICE', price);
        totalAmount = Number(totalAmount) + Number(price);
        // console.log('totalAmount', totalAmount);
      });
      setTotalCartAmount(totalAmount);
    }
  }, [cartItems]);

  useEffect(() => {
    if (CouponCode && CouponCode.discount_percent) {
      setDiscount(
        parseFloat(
          (Number(totalCartAmount) * Number(CouponCode.discount_percent)) / 100
        ).toFixed(2)
      );
    } else {
      setDiscount(0);
    }
  }, [CouponCode]);
  const proceedCheckout = () => {};

  return (
    <div>
      <section className="cart ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {coupon_code_loading && (
                <div className="loader-loading">
                  <img src="/loading.gif" alt="" />
                </div>
              )}
            </div>
            <div className="col-md-12">
              <h3> Your Cart ({cartItems.length}) </h3>
              <div className="shoping-cart-table table-responsive">
                <table className="table">
                  {/* <thead>
                      <th class="cart-product-remove">Remove</th>
                      <th class="cart-product-image">Image</th>
                      <th class="cart-product-info">Product</th>
                      <th class="cart-product-price">Price</th>
                      <th class="cart-product-quantity">Quantity</th>
                      <th class="cart-product-subtotal">Subtotal</th>
                  </thead> */}
                  <tbody>
                    {!view_cart_loading ? (
                      <>
                        {cartItems && cartItems.length > 0 ? (
                          <>
                            {cartItems.map((item) => {
                              return (
                                <tr>
                                  <td
                                    className="cart-product-remove"
                                    onClick={() =>
                                      removeFromCart({
                                        service_id: item.service_id,
                                      })
                                    }
                                  >
                                    {' '}
                                    x
                                  </td>
                                  <td className="cart-product-image">
                                    <img
                                      src={
                                        item.image
                                          ? `https://www.zixdo.com/images/${item.image}`
                                          : '/assets/images/service1 1.png'
                                      }
                                      alt
                                    />
                                  </td>
                                  <td className="cart-product-info">
                                    <h4>{item.service_name}</h4>
                                  </td>
                                  <td className="cart-product-price">
                                    ₹{item.price}
                                  </td>
                                </tr>
                              );
                            })}
                          </>
                        ) : (
                          <div>Your cart is empty</div>
                        )}
                      </>
                    ) : (
                      <div> Loading .... </div>
                    )}

                    <tr className="cart-coupon-row appply">
                      <td colSpan={6}>
                        <Formik
                          initialValues={{
                            coupon_code: '',
                          }}
                          validationSchema={Yup.object({
                            // coupon_code: Yup.string().required('Required'),
                          })}
                          onSubmit={async (
                            values,
                            { setSubmitting, resetForm }
                          ) => {
                            setSubmitting(true);
                            GetCouponCode({ coupon_code: values.coupon_code });
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
                                    name="coupon_code"
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
                      <td>₹{totalCartAmount}</td>
                    </tr>
                    {CouponCode && CouponCode.discount_percent && (
                      <tr>
                        <td>Discount</td>
                        <td>₹{discount}</td>
                      </tr>
                    )}

                    {/* <tr>
                      <td>Shipping and Handing</td>
                      <td>₹15.00</td>
                    </tr> */}
                    {/* <tr>
                      <td>Vat</td>
                      <td>₹00.00</td>
                    </tr> */}
                    <tr>
                      <td>
                        <strong>Order Total</strong>
                      </td>
                      <td>
                        <strong>₹{totalCartAmount - discount}</strong>
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
