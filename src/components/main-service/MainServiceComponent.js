import React from 'react';

function MainServiceComponent() {
  return (
    <>
      <section className="service-section ptb-60 bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-section-heading">
                <h3>Our Services</h3>
                <p>
                  Opportunity to own & run car cleaning business in your city
                </p>
              </div>
            </div>
          </div>
          <div className="row ptb-20">
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-image">
                  <img src="assets/images/service1 1.png" alt />
                </div>
                <div className="service-content">
                  <div className="service-heading">Car Exterior Service</div>
                  <p>
                    We, at Zixdo specialize in premium car exterior services,
                    using cutting-edge tools and techniques. Our skilled
                    technicians flawlessly restore your car's paintwork,
                    bodywork, and detailing, enhancing its aesthetic appeal and
                    ensuring a head-turning, brand-new look.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-image">
                  <img src="assets/images/service1 1.png" alt />
                </div>
                <div className="service-content">
                  <div className="service-heading">Car Interior Service</div>
                  <p>
                    We excel in car interior services, enhancing comfort and
                    aesthetics through luxurious transformations using
                    high-quality materials and precise craftsmanship.
                  </p>
                  {/* <a href className="read-mroe">
                    READ MORE
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-image">
                  <img src="assets/images/service1 1.png" alt />
                </div>
                <div className="service-content">
                  <div className="service-heading">Home/AC service</div>
                  <p>
                    Zixdo is committed to delivering outstanding home/AC
                    services with skilled technicians for efficient
                    installation, maintenance, and repair, ensuring comfort and
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-image">
                  <img src="assets/images/service1 1.png" alt />
                </div>
                <div className="service-content">
                  <div className="service-heading">2 Wheelers</div>
                  <p>
                    We deliver exceptional two-wheeler services, ensuring your
                    motorcycle or scooter remains in optimal condition for a
                    seamless and enjoyable ride.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-image">
                  <img src="assets/images/service1 1.png" alt />
                </div>
                <div className="service-content">
                  <div className="service-heading">Commercial Vehicle</div>
                  <p>
                    We offer comprehensive services for commercial vehicles,
                    ensuring performance and longevity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-image">
                  <img src="assets/images/service1 1.png" alt />
                </div>
                <div className="service-content">
                  <div className="service-heading">
                    Service for all types of vehicles
                  </div>
                  <p>
                    We take pride to provide services for all types of your
                    vehicles-including ACs that too at your place!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainServiceComponent;
