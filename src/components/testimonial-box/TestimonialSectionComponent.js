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
              </div>
            </div>
          </div>
          <div className="row ptb-30">
            <div className="col-md-6">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-para">
                    <p>
                      No 1 car washing franchise brand in Delhi maine apni Honda
                      civic wash krayi thi zixdo se and ye log awesome service
                      dete h
                    </p>
                  </div>
                  <div className="testimonial-title">
                    <h3>Ritika Arora</h3>
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
                      Best car wash brand in Delhi i recommend to everyone use
                      zixdo
                    </p>
                  </div>
                  <div className="testimonial-title">
                    <h3>Sonu Nigam</h3>
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
