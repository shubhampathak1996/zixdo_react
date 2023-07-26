import React from 'react';
import Slider from 'react-slick';

function PartnerComponent() {
  var partners = {
    dots: true,
    autoplay: true,
    speed: 700,
    prevArrow: false,
    nextArrow: false,
    autoplaySpeed: 3000,
    slidesToShow: 4,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div>
      <section className="partner-section ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="partner-section-heading">
                <h3>Our Partners</h3>
                <p>
                  Opportunity to own & run car cleaning business in your city
                </p>
              </div>
            </div>
          </div>

          <div className="row ptb-20">
            <Slider {...partners}>
              <div>
                <div className="partners-img">
                  <img src="assets/images/america_car.png" alt />
                </div>
              </div>

              <div>
                <div className="partners-img">
                  <img src="assets/images/megu.png" alt />
                </div>
              </div>

              <div>
                <div className="partners-img">
                  <img src="assets/images/car_mate.png" alt />
                </div>
              </div>

              <div>
                <div className="partners-img">
                  <img src="assets/images/snap.png" alt />
                </div>
              </div>

              <id>
                <div className="partners-img">
                  <img src="assets/images/zz.png" alt />
                </div>
              </id>

              <div>
                <div className="partners-img">
                  <img src="assets/images/america_car.png" alt />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PartnerComponent;
