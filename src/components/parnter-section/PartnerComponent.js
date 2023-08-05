import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { UsePartnerImages } from '../../shared/hooks/UseFetch';
import { UPLOAD_URI } from '../../domain/constant';

function PartnerComponent() {
  const { partnerImage, GetPartnerImage, partner_image_loading } =
    UsePartnerImages();
 useEffect(() => {
    GetPartnerImage();
  }, []); 
  console.log(partnerImage, 'partner Image');
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
              {partnerImage &&
                partnerImage.map((data) => {
                  return (
                    <div>
                      <div className="partners-img">
                        <img src={`${UPLOAD_URI}/${data.image}`} alt />
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PartnerComponent;
