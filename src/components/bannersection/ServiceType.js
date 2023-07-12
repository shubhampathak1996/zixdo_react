import React from 'react';
import { UPLOAD_URI } from '../../domain/constant';

export const ServiceType = ({
  serviceTypeData,
  handleServiceTypeChange,
  vehicleType,
}) => {
  console.log('service types Data', serviceTypeData);
  return (
    <>
      <div className='hatch-flex'>
        {serviceTypeData &&
          serviceTypeData.map((item) => {
            return (
              <div
                className='car-box '
                onClick={() => {
                  handleServiceTypeChange(item);
                }}
              >
                <div
                  className={
                    vehicleType && item.brand_id === vehicleType
                      ? 'hatchback active'
                      : 'hatchback'
                  }
                >
                  <img
                    src={
                      item.image
                        ? `${UPLOAD_URI}services/${item.image}`
                        : 'assets/images/hatchback.png'
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
