import React from 'react';
import { Link } from 'react-router-dom';
import { URI } from '../../domain/constant';

function FooterOfferBanner({ item }) {
  // console.log("ITEM", item);
  return (
    <div>
      <div className='banner-section '>
        {/* Start Banner Wrapper */}
        <div className='banner-wrapper'>
          {/* Start Banner Single */}
          <div className='banner-single'>
            {item.image_component && (
              <Link
                to={`${item.image_component.link}`}
                className='banner-img-link'
              >
                <img
                  className
                  src={`${URI}${item.image_component.image}`}
                  alt
                />
              </Link>
            )}
          </div>
          {/* End Banner Single */}
        </div>
        {/* End Banner Wrapper */}
      </div>
    </div>
  );
}

export default FooterOfferBanner;
