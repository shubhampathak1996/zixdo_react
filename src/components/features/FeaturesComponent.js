import React, { useEffect } from 'react';
import { UseHomepageOfferImage } from '../../shared/hooks/UseFetch';
import { UPLOAD_URI } from '../../domain/constant';
import Slider from 'react-slick/lib/slider';

function FeaturesComponent() {
  var testimonials = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
  const { offerImage, getOfferImage, offer_image_loading } =
    UseHomepageOfferImage();
  useEffect(() => {
    getOfferImage();
  }, []);
  // console.log(offerImage, 'offer');

  return (
    <div>
      <section className="featured-section ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Slider {...testimonials}>
                {offerImage &&
                  offerImage.map((data) => {
                    return (
                      <div className="feartured-image">
                        <img src={`${UPLOAD_URI}${data.image}`} />
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

export default FeaturesComponent;
