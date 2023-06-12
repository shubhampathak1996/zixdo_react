import React from 'react';
import { Link } from 'react-router-dom';
import { URI } from '../../domain/constant';

function OfferBanner({ item }) {
  console.log('item -', item);
  return (
    <div className='bg-off-white'>
      <div className='banner-section section-top-gap-100'>
        {/* Start Banner Wrapper */}
        <div className='banner-wrapper'>
          <div className='container'>
            <div className='row'>
              {item.gallery_component &&
                item.gallery_component.map((gallery) => {
                  return (
                    <div className='col-lg-4 col-md-6 col-12'>
                      {/* Start Banner Single */}
                      <div className='banner-single'>
                        <Link to={gallery.link} className='banner-img-link'>
                          <img
                            className='banner-img'
                            src={`${URI}${gallery.image}`}
                            alt
                          />
                        </Link>
                      </div>
                      {/* End Banner Single */}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* End Banner Wrapper */}
      </div>
    </div>
  );
}

export default OfferBanner;
