import React from 'react';

function FeaturesComponent() {
  return (
    <div>
      <section className="featured-section ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="feartured-image">
                <img src="assets/images/car_wash_new.png" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="feartured-image">
                <img src="assets/images/car_wash_new.png" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="feartured-image">
                <img src="assets/images/car_wash_new.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesComponent;
