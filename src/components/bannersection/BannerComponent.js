import React, { useEffect, useState } from 'react';
import {
  UseServiceType,
  UseSubCat,
  UseGetBrandType,
} from '../../shared/hooks/UseFetch';
import Skeleton from 'react-loading-skeleton';
import { ServiceType } from './ServiceType';
import { SubMenuComponent } from './SubMenuComponent';
import { ModelComponent } from './ModelComponent';
function BannerComponent() {
  const { getServiceTypes, service_type_loading, serviceTypeData } =
    UseServiceType();
  const { getSubCats, sub_cat_loading, subCatData } = UseSubCat();
  const { getBrandTypes, brand_types_loading, brandTypeData } =
    UseGetBrandType();
  const [SERVICES, setSERVICES] = useState(false);
  const [vehicleType, setVehicleType] = useState(null);
  const [washType, setWashType] = useState(null);
  const [modelType, setModelType] = useState(null);

  const [filteredBrandData, setFilteredBrandData] = useState(null);
  useEffect(() => {
    getServiceTypes();
  }, []);
  useEffect(() => {
    if (vehicleType) {
      getSubCats(vehicleType);
    }
  }, [vehicleType]);
  useEffect(() => {
    if (vehicleType && brandTypeData) {
      console.log('selectServiceType', vehicleType, washType);
      let filterData = [];
      if (washType === null) {
      } else {
        if (washType) {
          filterData = brandTypeData.filter((item) => {
            return item.brand_id === vehicleType && item.service_type === '1';
          });
        }
        if (!washType) {
          filterData = brandTypeData.filter((item) => {
            return item.brand_id === vehicleType && item.service_type === '0';
          });
        }
      }

      setFilteredBrandData(filterData);
    }
  }, [vehicleType, washType, brandTypeData]);

  const handleServiceTypeChange = (item) => {
    // console.log('ITEM', item);
    setVehicleType(item.brand_id);
    setWashType(null);
  };
  return (
    <>
      <section className="hero-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hero-section-content">
                <div className="main-heading-section">
                  <h1>FAST. CLEAN. SHINE!</h1>
                  <p>
                    Choose your Service Type - We provide car washing and other
                    cleaning services.
                  </p>
                  <div className="search-bar-section">
                    <form>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Pincode"
                      />
                      <div
                        className="search-btn"
                        onClick={() => {
                          setSERVICES(!SERVICES);
                        }}
                      >
                        <a href className="btn btn-primary">
                          Search
                        </a>
                      </div>
                    </form>

                    <div
                      className="searc-box-container"
                      style={{ display: SERVICES ? 'block' : 'none' }}
                    >
                      {service_type_loading ? (
                        <>
                          {/* <div className='hatch-flex'>
                            <div className='car-box'>
                              <Skeleton height={100} />
                            </div>
                            <div className='car-box'>
                              <Skeleton height={100} />
                            </div>
                            <div className='car-box'>
                              <Skeleton height={100} />
                            </div>
                            <div className='car-box'>
                              <Skeleton height={100} />
                            </div>
                          </div> */}
                        </>
                      ) : (
                        <>
                          <ServiceType
                            vehicleType={vehicleType}
                            serviceTypeData={serviceTypeData}
                            handleServiceTypeChange={handleServiceTypeChange}
                          />
                        </>
                      )}

                      {vehicleType && (
                        <SubMenuComponent
                          washType={washType}
                          vehicleType={vehicleType}
                          sub_cat_loading={sub_cat_loading}
                          subCatData={subCatData}
                          setWashType={setWashType}
                        />
                      )}
                      <ModelComponent filteredBrandData={filteredBrandData} />

                      <div className="go-gor-it text-center">
                        <a href="#" className="btn btn-primary w25">
                          Go For it
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-image">
                <img src="/assets/images/Wavy_Bus-38_Single-05 1.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerComponent;
