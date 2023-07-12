import React from "react";

const OrderHistory = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="order-history ">
              <div className="row">
                <div className="col-md-5">
                  <div className="order-details">
                    <h6>
                      Order Id: <span>1234567</span>
                    </h6>
                    <h6>
                      Order Date: <span>1234567</span>
                    </h6>
                    <h5>Store Information</h5>
                    <h6>
                      Store Name: <span>test</span>
                    </h6>
                    <h6>
                      Store Contact Number: <span>test</span>
                    </h6>
                    <h6>
                      Store Address: <span>test</span>
                    </h6>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="order-content">
                    <h6>Order Information</h6>
                    <table className="table border">
                      <thead>
                        <tr>
                          <th>S.No.</th>
                          <th>Wehicle Type</th>
                          <th>Service</th>
                          <th>Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>1</td>
                          <td>1</td>
                          <td>1</td>
                        </tr>
                      </tbody>
                    </table>
                    
                  </div>
                 <div className="order-total ">
                    Total Amount:<strong>$ 25438</strong><br/>
                 </div>
                <div className="order-status">
                    <h6>Order :<strong style={{color:"#0a9f0b"}} >Completed </strong></h6>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
