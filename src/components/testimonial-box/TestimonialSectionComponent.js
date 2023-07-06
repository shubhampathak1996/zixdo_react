import React from 'react';

function TestimonialSectionComponent() {
  return (
    <div>
      <section className="testimonial-section ptb-60 bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-section-heading">
                <h3>What Client Say</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Non nulla ultrices
                  rhoncus morbi elementum nisi sed.
                </p>
              </div>
            </div>
          </div>
          <div className="row ptb-30">
            <div className="col-md-6">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-para">
                    <p>
                      Best car wash services provider vo bhi ghr baithe budget
                      friendly service
                    </p>
                  </div>
                  <div className="testimonial-title">
                    <h3>Tanuj Dagar</h3>
                  </div>
                  {/* <div className="testmonial-des">Website Developer</div> */}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-para">
                    <p>
                      Got an incredible offer of just Rs. 300 for a doorstep car
                      wash for my Hatch Back. Good Service. Great team of
                      people. Try and ask for their employee, cleaning buddy
                      Rohit Kumar.
                    </p>
                  </div>
                  <div className="testimonial-title">
                    <h3>Sannidhya Awasthi</h3>
                  </div>
                  {/* <div className="testmonial-des">Website Developer</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonialSectionComponent;
