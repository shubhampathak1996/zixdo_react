import React, { useEffect } from 'react';
import { UseHomepageOfferImage } from '../../shared/hooks/UseFetch';
import { UPLOAD_URI } from '../../domain/constant';

function FeaturesComponent() {
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
            {offerImage &&
              offerImage.map((data) => {
                return (
                  <div className="col-md-3">
                    <div className="feartured-image">
                      <img src={`${UPLOAD_URI}${data.image}`} />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesComponent;
