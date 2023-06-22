import React, { useEffect, useState } from 'react';
import {
  UseServiceType,
  UseSubCat,
  UseGetBrandType,
} from '../../shared/hooks/UseFetch';
import Skeleton from 'react-loading-skeleton';
import { ServiceType } from './ServiceType';
import { SubMenuComponent } from './SubMenuComponent';
function BannerComponent() {
  const { getServiceTypes, service_type_loading, serviceTypeData } =
    UseServiceType();
  const { getSubCats, sub_cat_loading, subCatData } = UseSubCat();
  const { getBrandTypes, brand_types_loading, brandTypeData } =
    UseGetBrandType();
  const [SERVICES, setSERVICES] = useState(false);
  const [selectServiceType, setSelectServiceType] = useState(null);
  const [selectBrandType, setSelectBrandType] = useState(null);
  const [filteredBrandData, setFilteredBrandData] = useState(null);
  useEffect(() => {
    getServiceTypes();
  }, []);
  useEffect(() => {
    if (selectServiceType) {
      getSubCats(selectServiceType);
    }
  }, [selectServiceType]);
  useEffect(() => {
    if (selectBrandType && selectServiceType && brandTypeData) {
      console.log(
        'brandTypeData',
        brandTypeData,
        selectBrandType.toString(),
        selectServiceType.toString()
      );
      const filterData = brandTypeData.filter((item) => {
        console.log('ITEM', item);
        if (Number(item.service_type) == selectServiceType) {
          console.log('ITEM INSIDE', item);
          return item;
        }
      });
      setFilteredBrandData(filterData);
    }
  }, [selectBrandType, selectServiceType, brandTypeData]);

  const handleServiceTypeChange = (item) => {
    // console.log('ITEM', item);
    setSelectServiceType(item.brand_id);
  };
  return (
    <div>
      <section className='hero-wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='hero-section-content'>
                <div className='main-heading-section'>
                  <h1>We Are Car Wash Service Provider</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Odio in lorem ut
                    cras tristique non. Arcu ac nunc tincidunt eget viverra eget
                    quam sit
                  </p>
                  <div className='search-bar-section'>
                    <form>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Search Pincode'
                      />
                      <div
                        className='search-btn'
                        onClick={() => {
                          setSERVICES(!SERVICES);
                        }}
                      >
                        <a href className='btn btn-primary'>
                          Search
                        </a>
                      </div>
                    </form>

                    <div
                      className='searc-box-container'
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
                            serviceTypeData={serviceTypeData}
                            handleServiceTypeChange={handleServiceTypeChange}
                          />
                        </>
                      )}

                      {selectServiceType && (
                        <SubMenuComponent
                          sub_cat_loading={sub_cat_loading}
                          subCatData={subCatData}
                          setSelectBrandType={setSelectBrandType}
                        />
                      )}
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

                      <div className='go-gor-it text-center'>
                        <a href='#' className='btn btn-primary w25'>
                          Go For it
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='hero-image'>
                <img src='/assets/images/Wavy_Bus-38_Single-05 1.png' alt />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BannerComponent;
