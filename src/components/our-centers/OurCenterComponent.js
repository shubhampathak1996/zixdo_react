import React from 'react';
import AlphabeticalSearch from './AlphabeticalSearch';
import OurCenterTopPage from './OurCenterTopPage';
import TestimonialSectionComponent from '../testimonial-box/TestimonialSectionComponent';
import Skeleton from 'react-loading-skeleton';
import PinCodeCenters from './PinCodeCenters';

function OurCenterComponent({
  setText,
  text,
  centers,
  centers_loading,
  pincode,
  setPincode,
  pin_code_centres,
  pin_code_centre_loading,
}) {
  return (
    <>
      <OurCenterTopPage pincode={pincode} setPincode={setPincode} />

      {pincode && pincode.length === 6 ? (
        <>
          {pin_code_centre_loading ? (
            <div className='row'>
              <div className='col-md-6'>
                <Skeleton height={250} />
              </div>
              <div className='col-md-6'>
                <Skeleton height={250} />
              </div>
              <div className='col-md-6'>
                <Skeleton height={250} />
              </div>
              <div className='col-md-6'>
                <Skeleton height={250} />
              </div>
            </div>
          ) : (
            <PinCodeCenters centers={pin_code_centres} />
          )}
        </>
      ) : (
        <>
          {centers_loading ? (
            <div className='row'>
              <div className='col-md-6'>
                <Skeleton height={250} />
              </div>
              <div className='col-md-6'>
                <Skeleton height={250} />
              </div>
              <div className='col-md-6'>
                <Skeleton height={250} />
              </div>
              <div className='col-md-6'>
                <Skeleton height={250} />
              </div>
            </div>
          ) : (
            <AlphabeticalSearch
              setText={setText}
              text={text}
              centers={centers}
            />
          )}
        </>
      )}

      <TestimonialSectionComponent />
    </>
  );
}

export default OurCenterComponent;
