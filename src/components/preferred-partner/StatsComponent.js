import React from 'react';

function StatsComponent() {
  return (
    <>
      <section className="stats ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="icon-box center">
                <div className="main-icon">
                  <img src="assets/images/pages_banner/map-location.png" />
                  <h4>12+</h4>
                  <h6>State</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon-box center">
                <div className="main-icon">
                  <img src="assets/images/pages_banner/place.png" />
                  <h4>30+</h4>
                  <h6>Locations</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon-box center">
                <div className="main-icon">
                  <img src="assets/images/pages_banner/satisfaction.png" />
                  <h4>50k+</h4>
                  <h6>Customer served</h6>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="icon-box center">
                <div className="main-icon">
                  <img src="assets/images/pages_banner/subscription.png" />
                  <h4>5k+</h4>
                  <h6>Subscription Order</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StatsComponent;
