import React from 'react';
import Slider from 'react-slick/lib/slider';

function TestimonialSectionComponent() {
  var testimonials = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
            <div className="col-md-12">
              <Slider {...testimonials}>
                <div>
                  <div className="testimonial-card marg">
                    <div className="testimonial-content">
                      <div className="testimonial-para">
                        <p>
                          No 1 car washing franchise brand in Delhi maine apni
                          Honda civic wash krayi thi zixdo se and ye log awesome
                          service dete h
                        </p>
                      </div>
                      <div className="testimonial-title">
                        <h3>Ritika Arora</h3>
                      </div>
                      {/* <div className="testmonial-des">Website Developer</div> */}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="testimonial-card marg">
                    <div className="testimonial-content">
                      <div className="testimonial-para">
                        <p>
                          No 1 car washing franchise brand in Delhi maine apni
                          Honda civic wash krayi thi zixdo se and ye log awesome
                          service dete h
                        </p>
                      </div>
                      <div className="testimonial-title">
                        <h3>Ritika Arora</h3>
                      </div>
                      {/* <div className="testmonial-des">Website Developer</div> */}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="testimonial-card marg">
                    <div className="testimonial-content">
                      <div className="testimonial-para">
                        <p>
                          No 1 car washing franchise brand in Delhi maine apni
                          Honda civic wash krayi thi zixdo se and ye log awesome
                          service dete h
                        </p>
                      </div>
                      <div className="testimonial-title">
                        <h3>Ritika Arora</h3>
                      </div>
                      {/* <div className="testmonial-des">Website Developer</div> */}
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonialSectionComponent;
