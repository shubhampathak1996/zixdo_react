import React from 'react';

function ServiceSectionComponent() {
  return (
    <div>
      <section className="service-section ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="service-image">
                <img src="assets/images/about-2 1 (3).png" alt />
                <img
                  src="assets/images/about-us_sec.png"
                  className="ab-ab"
                  alt
                />
              </div>
            </div>
            <div className="col-md-7">
              <div className="service-content-section">
                <h3>Start your own business with us</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Morbi netus lorem ac
                  suspendisse. Aenean sit eu vitae nunc id eget cursus.
                  Suspendisse mauris enim cum a quam nulla. Lectus nisl sed at
                  egestas scelerisque gravida dui. Vivamus euismod non est diam
                  auctor dolor tortor. Venenatis felis turpis velit curabitur
                  egestas tincidunt. Sodales montes semper est tortor at id
                  varius. A semper viverra eget malesuada.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="service-pointers">
                      <div className="service-bullet-points">
                        <ul>
                          <li>
                            <i className="fa fa-check" /> Easy service booking
                          </li>
                          <li>
                            <i className="fa fa-check" /> Easy service booking
                          </li>
                          <li>
                            <i className="fa fa-check" /> Easy service booking
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-pointers">
                      <div className="service-bullet-points">
                        <ul>
                          <li>
                            <i className="fa fa-check" /> Easy service booking
                          </li>
                          <li>
                            <i className="fa fa-check" /> Easy service booking
                          </li>
                          <li>
                            <i className="fa fa-check" /> Easy service booking
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-4">
                    <div className="stat-card">
                      <div className="start-value">2000+</div>
                      <div className="stat-label">Car Wash</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="stat-card">
                      <div className="start-value">2000+</div>
                      <div className="stat-label">Service Outlets</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="stat-card">
                      <div className="start-value">2000+</div>
                      <div className="stat-label">Happy Client</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceSectionComponent;
