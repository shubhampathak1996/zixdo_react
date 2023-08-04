import React from 'react';

function ServiceSectionComponent() {
  return (
    <>
      <section className="service-section ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="service-image">
               <img src='assets/images/about_us.png'/>
              </div>
            </div>
            <div className="col-md-7">
              <div className="service-content-section">
                <h3>WELCOME TO ZIXDO.COM</h3>
                <p>
                  Zixdo is leveraging growing car wash and cleaning service
                  segment and offers huge opportunities to join its promising
                  journey as business associates on franchise model. We arrange
                  360-degree car washing service with highly qualified cleaning
                  staffs, tools, and technology. Service providers, associated
                  with the company, offer a comprehensive package which includes
                  car washing, vacuum cleaning, machine rubbing, polishing,
                  interior & exterior shampooing, AC maintenance service, and
                  detailing among others. We bring all stakeholders on one
                  platform- zixdo.com. Our centres are conveniently located in
                  all major cities across India. Services are available for all
                  models of Small cars, Hatchbacks, Sedans, MUVs, 5- Seater
                  SUVs, 7-Seater SUVs.
                </p>
                <div className="row">
                  <div className="col-md-12">
                    <div className="service-pointers">
                      <div className="service-bullet-points">
                        <ul>
                          <li>
                            <i className="fa fa-check" /> Positive Approach &
                            Optimism
                          </li>
                          <li>
                            <i className="fa fa-check" /> Quality &
                            Professionalism
                          </li>
                          <li>
                            <i className="fa fa-check" /> Customer Care
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <div className="stat-card">
                      <div className="start-value">200+</div>
                      <div className="stat-label">Trained Professionals</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="stat-card">
                      <div className="start-value">50k+</div>
                      <div className="stat-label">Happy Customers</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="stat-card">
                      <div className="start-value">35</div>
                      <div className="stat-label">Cities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceSectionComponent;
