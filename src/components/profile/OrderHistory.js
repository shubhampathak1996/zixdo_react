import React from 'react';
import { UseUserOrders } from '../../shared/hooks/UseFetch';

const OrderHistory = () => {
  const { orderData, order_loading } = UseUserOrders();

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            {!order_loading &&
              orderData &&
              orderData.map((item, index) => {
                return (
                  <div className='order-history'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='order-content'>
                          <h6>
                            Order Information :<span>#{item.order_id}</span>
                          </h6>
                          <table className='table border'>
                            <thead>
                              <tr>
                                <th>S.No.</th>
                                <th>Wehicle Type</th>
                                <th>Date</th>
                                <th>Cost</th>
                              </tr>
                            </thead>
                            <tbody>
                              {item.orders &&
                                item.orders.map((data, i) => {
                                  return (
                                    <tr>
                                      <td>{i + 1}</td>
                                      <td>{item.vehicle_type}</td>
                                      <td>{item.order_date_2}</td>
                                      <td>{data.price}</td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className='col-md-4'>
                        <div className='store-details mt-3'>
                          <div className='order-content'>
                            <h6>Store Information</h6>
                          </div>
                          <div className='card order-card'>
                            <div className='order-card-details'>
                              <h6>
                                Store Id: <span>test</span>
                              </h6>
                              <h6>
                                Store Name: <span>test</span>
                              </h6>
                              <h6>
                                Store Address: <span>test</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='user-details mt-3'>
                          <div className='order-content'>
                            <h6>Customer Information</h6>
                          </div>
                          <div className='card order-card'>
                            <div className='order-card-details'>
                              <h6>
                                Name: <span>{item.user_name}</span>
                              </h6>
                              <h6>
                                Email: <span>{item.user_mail}</span>
                              </h6>
                              <h6>
                                Address: <span>{item.user_address}</span>
                              </h6>
                              <h6>
                                Contact No: <span>{item.user_contact_no}</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-4'>
                        <div className='-detacostils mt-3'>
                          <div className='order-content'>
                            <h6>Cost Information</h6>
                          </div>
                          <div className='card order-card'>
                            <div className='order-card-details'>
                              <h6>
                                Invoice Id: <span>{item.invoice_id}</span>
                              </h6>
                              <h6>
                                Cart Total: <span>{item.cart_total}</span>
                              </h6>
                              <h6>
                                Amount Paid: <span>{item.amount_paid}</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='order-status'>
                        <h6>
                          Order :
                          <strong style={{ color: '#0a9f0b' }}>
                            Completed{' '}
                          </strong>
                        </h6>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
