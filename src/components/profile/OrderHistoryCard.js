import React from "react";

const OrderHistoryCard = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card  order-card">
            <div className="row ">
              <div className="col-md-6">
                <img
                  src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
                  className="img-fluid rounded-start"
                  alt=".."
                />
              </div>
              <div className="col-md-6">
                <div className="card-details">
                  <h5 className="card-title">Deliverd June 5</h5>
                  <h6>Order Name</h6>
                  <p className="card-text">Order Details</p>
                  <p className="card-text">
                    <small className="text-body-secondary">Order Status</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistoryCard;
