import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { UseOrderInfo } from '../../shared/hooks/UseApi';
import { useParams } from 'react-router-dom';
import moment from 'moment';
function ThankYou() {
  const params = useParams();
  const { orderInfo, getOrderDetails, order_loading } = UseOrderInfo();
  useEffect(() => {
    if (params.order_id) {
      console.log('params.order_id', params.order_id);

      getOrderDetails(params.order_id);
      localStorage.removeItem('ZIXDO_CART');
    }
  }, [params.order_id]);
  return (
    <div>
      <Header />
      {/* <Breadcrum title={"Thank You"} /> */}
      <section className="ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="thankyou-content">
                <h3>Thank you!</h3>
                <p>
                  Congratulations your order has been placed successfully. Here
                  are your order Details.
                </p>
                <div>
                  {orderInfo &&
                    orderInfo.order_info &&
                    orderInfo.order_info[0] && (
                      <div className="col-md-12">
                        <div className="order-history ">
                          <div className="row">
                            <div className="col-md-5">
                              <div className="order-details">
                                <h6>
                                  Order Id:{' '}
                                  <span>
                                    {orderInfo.order_info[0].order_id}
                                  </span>
                                </h6>
                                <h6>
                                  Order Date:{' '}
                                  <span>
                                    {' '}
                                    {orderInfo.order_info[0].order_date_2 &&
                                      moment(
                                        orderInfo.order_info[0].order_date_2
                                      ).format('DD-MMM-YYYY')}{' '}
                                  </span>
                                </h6>
                                <h5>User Information</h5>
                                <h6>
                                  Name:{' '}
                                  <span>
                                    {orderInfo.order_info[0].user_name}
                                  </span>
                                </h6>
                                <h6>
                                  Contact Number:{' '}
                                  <span>
                                    {orderInfo.order_info[0].user_mail}
                                  </span>
                                </h6>
                                <h6>
                                  Address:{' '}
                                  <span>
                                    {orderInfo.order_info[0].user_address}
                                  </span>
                                </h6>
                              </div>
                            </div>
                            <div className="col-md-7">
                              <div className="order-total ">
                                Total Amount:
                                <strong>
                                  {' '}
                                  {orderInfo.order_info[0].cart_total}{' '}
                                </strong>
                                <br />
                              </div>
                              {/* <div className='order-status'>
                                <h6>
                                  Order :
                                  <strong style={{ color: '#0a9f0b' }}>
                                    Completed{' '}
                                  </strong>
                                </h6>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ThankYou;
