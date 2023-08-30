import React, { useEffect } from 'react';
import Slider from 'react-slick/lib/slider';
import { UseTestimonial } from '../../shared/hooks/UseFetch';

function TestimonialSectionComponent() {
  const { testimonial, GetTestimonial, testimonial_loading } = UseTestimonial();
  console.log(testimonial, 'testimonial');
  useEffect(() => {
    GetTestimonial(testimonial);
  }, []);
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
                {testimonial &&
                  testimonial.map((item) => {
                    return (
                      <div>
                        <div className="testimonial-card marg">
                          <div className="testimonial-content">
                            <div className="testimonial-para">
                              <p>{item.feedback}</p>
                            </div>
                            <div className="testimonial-title">
                              <h3>{item.client_name}</h3>
                            </div>
                            {/* <div className="testmonial-des">Website Developer</div> */}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonialSectionComponent;
