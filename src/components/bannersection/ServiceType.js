import React from 'react';

export const ServiceType = ({ serviceTypeData, handleServiceTypeChange }) => {
  console.log('service types Data', serviceTypeData);
  return (
    <>
      <div className='hatch-flex'>
        {serviceTypeData &&
          serviceTypeData.map((item) => {
            return (
              <div
                className='car-box'
                onClick={() => {
                  handleServiceTypeChange(item);
                }}
              >
                <div className='hatchback'>
                  <img
                    src={
                      item.image ? item.image : 'assets/images/hatchback.png'
                    }
                  />
                  <h5>{item.brand_name}</h5>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
