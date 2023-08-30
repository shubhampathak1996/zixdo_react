import React from 'react';

export const SubMenuComponent = ({
  ZipServiceType,
  sub_cat_loading,
  subCatData,
  setWashType,
  washType,
  vehicleType,
}) => {
  console.log('ZipServiceType', ZipServiceType);
  return (
    <div className="car-option car-option-flex">
      {sub_cat_loading ? (
        <>
          <div className="hatch-flex">
            <div className="car-box">
              <div className="hatchback">
                <div className="skelton-class"></div>{' '}
              </div>
            </div>
            <div className="car-box">
              <div className="skelton-class">
                <div className="hatchback">
                  <div className="skelton-class"></div>{' '}
                </div>
              </div>{' '}
            </div>
          </div>
        </>
      ) : (
        <>
          {subCatData &&
            subCatData.map((item) => {
              if (
                item.service_type === 'Wet Wash' &&
                ZipServiceType &&
                ZipServiceType.type &&
                ZipServiceType.type.includes('Pressure Wash')
              ) {
                return (
                  <div
                    className={
                      washType === '0' ? 'options-car active2' : 'options-car'
                    }
                    onClick={() => setWashType('0')}
                  >
                    <img src="assets/images/pressure-washer.png" />
                    <h5>Pressure Wash</h5>
                    <ul>
                      <li>
                        <i className="fa-solid fa-square-check" />
                        2-4 Buckets of water
                      </li>
                      <li>
                        <i className="fa-solid fa-square-check" />
                        Electricity Supply
                      </li>
                    </ul>
                  </div>
                );
              }
              if (
                item.service_type === 'Dry Wash' &&
                ZipServiceType &&
                ZipServiceType.type &&
                ZipServiceType.type.includes('Eco Wash')
              ) {
                return (
                  <div
                    className={
                      washType === '1'
                        ? 'options-car clo active2'
                        : 'options-car clo'
                    }
                    onClick={() => setWashType('1')}
                  >
                    <img src="assets/images/washing-machine.png" />
                    <h5>Eco Wash</h5>
                    <ul>
                      <li>
                        <i className="fa-solid fa-square-xmark" />
                        No Water Needed
                      </li>
                      <li>
                        <i className="fa-solid fa-square-xmark" />
                        No Electricity Supply
                      </li>
                    </ul>
                  </div>
                );
              }
              if (item.service_type === '0') {
                return (
                  <div className="car-box">
                    <div className="hatchback">
                      <img
                        src={
                          item.icon ? item.icon : 'assets/images/service.png'
                        }
                      />
                      <h5> {item.phone_name} </h5>
                    </div>
                  </div>
                );
              }
            })}
        </>
      )}
    </div>
  );
};
