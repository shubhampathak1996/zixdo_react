import React from 'react';

export const ModelComponent = ({ filteredBrandData }) => {
  return (
    <div className='hatch-flex'>
      {filteredBrandData &&
        filteredBrandData.map((item) => {
          return (
            <div className='car-box'>
              <div className='hatchback'>
                <img src='assets/images/hatchback.png' />
                <h5>{item.phone_name}</h5>
              </div>
            </div>
          );
        })}
    </div>
  );
};
