import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { UseSingleLocation } from '../../shared/hooks/UseFetch';

import {
  UseServiceType,
  UseSubCat,
  UseGetBrandType,
} from '../../shared/hooks/UseFetch';
import Skeleton from 'react-loading-skeleton';
import { ServiceType } from '../../components/bannersection/ServiceType';
import { SubMenuComponent } from '../../components/bannersection/SubMenuComponent';

import { useHistory } from 'react-router-dom';
import { useCategory, usePinCode } from '../../shared/hooks/UseApi';
import { UseGetServiceTypeByZipCode } from '../../shared/hooks/UseFetch';
import TestimonialSectionComponent from '../../components/testimonial-box/TestimonialSectionComponent';
import { ModelComponent } from '../../components/bannersection/ModelComponent';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { UPLOAD_URI } from '../../domain/constant';
import { SingleStoreNearby } from '../../components/centres/SingleStoreNearby';
import LocationMap from '../../components/centres/LocationMap';

function SingleStore() {
  const params = useParams();
  const { SingleLocation, GetSingleFranchise, Single_location_loading } =
    UseSingleLocation();

  const { ZipServiceType, SearchByZipCode, zipservice_type_loading } =
    UseGetServiceTypeByZipCode();
  const { categories, getCategories, categories_loading } = useCategory();
  const { centres, center_loading, getCenterByPinCode } = usePinCode();
  const [pinCode, setPincode] = useState('');
  const [pinCodeChanged, setPinCodeChanged] = useState(false);
  const [pinCodeError, setPinCodeError] = useState(false);

  const { getServiceTypes, service_type_loading, serviceTypeData } =
    UseServiceType();
  const { getSubCats, sub_cat_loading, subCatData } = UseSubCat();
  const history = useHistory();
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
    setModelType(null);
  };

  const searchBtnHandler = () => {
    history.push(
      `/our-services?vehicle_type=${vehicleType}&wash_type=${washType}&model_type=${modelType}`
    );
  };

  const pinCodeSearchHandler = async () => {
    if (pinCode && pinCode.length === 6) {
      setPinCodeChanged(true);
      setPinCodeError(false);
      await SearchByZipCode(pinCode);
    } else {
      setPinCodeError(true);
    }
  };
  // console.log('Category', categories, centres, pinCode);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    GetSingleFranchise(params.store_id);
  }, [params.store_id]);
  console.log(SingleLocation, 'singlelocation');

  return (
    <>
      <Header />
      <div>
        {SingleLocation && (
          <section className='single-location sec-50'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='single-location-content'>
                    <h3>{SingleLocation.store_name}</h3>
                    <p>{SingleLocation.store_complete_address}</p>
                    <a href={`tel:${SingleLocation.store_contact_number}`}>
                      <div className='icon-with-button'>
                        <div>
                          <span>
                            <i className='fa fa-phone' />
                          </span>
                        </div>
                        <div>Call Now Button</div>
                      </div>
                    </a>

                    {/* <div className="review-system">
                      <h3>4.6</h3>
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </div> */}
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='location-again-select ptb-50 p-3'>
                    <h4 className='mb-2'>Search By Pincode</h4>
                    <div className='search-bar-section'>
                      <input
                        type='number'
                        className='form-control'
                        placeholder='Search Pincode'
                        onChange={(e) => setPincode(e.target.value)}
                        value={pinCode}
                        style={{ background: '#fff' }}
                      />
                      <div
                        className='search-btn'
                        onClick={() => {
                          // setSERVICES(!SERVICES);
                          pinCodeSearchHandler();
                        }}
                      >
                        <a href className='btn btn-primary'>
                          Search
                        </a>
                      </div>
                      {pinCodeChanged && (
                        <div>
                          {categories_loading || !ZipServiceType ? (
                            <div>
                              <>
                                <div className='hatch-flex'>
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
                                </div>
                              </>
                            </div>
                          ) : (
                            <div>
                              <div
                                className='searc-box-container'
                                style={{ display: 'block' }}
                              >
                                {categories_loading ? (
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
                                      serviceTypeData={
                                        categories && categories.vehicleType
                                      }
                                      handleServiceTypeChange={
                                        handleServiceTypeChange
                                      }
                                    />
                                  </>
                                )}

                                {vehicleType && (
                                  <SubMenuComponent
                                    ZipServiceType={ZipServiceType}
                                    washType={washType}
                                    vehicleType={vehicleType}
                                    sub_cat_loading={categories_loading}
                                    subCatData={subCatData}
                                    setWashType={setWashType}
                                  />
                                )}
                                <ModelComponent
                                  setModelType={setModelType}
                                  modelType={modelType}
                                  filteredBrandData={filteredBrandData}
                                />

                                <div className='go-gor-it text-center'>
                                  <a
                                    onClick={() => searchBtnHandler()}
                                    className='btn btn-primary w25'
                                  >
                                    Go For it
                                  </a>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col-md-6'>
                  <h5 className='mb-2'>Store Information</h5>
                  <div class='card order-card'>
                    <div class='order-card-details single-sto-flex'>
                      <div>
                        <h6>Store GST Number</h6>
                        <span>{SingleLocation.gst_number}</span>
                      </div>
                      <div>
                        <h6>Store Owner Name</h6>
                        <span>{SingleLocation.name}</span>
                      </div>
                      <div>
                        <h6>Store Email Id</h6>
                        <span>{SingleLocation.email_id}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='store-image'>
                    <img src={`${UPLOAD_URI}${SingleLocation.store_image}`} />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <LocationMap
                    latitude={Number(SingleLocation.latitude)}
                    longitude={Number(SingleLocation.longitude)}
                  />
                  {/* <div className='map mt-5'>
                    <iframe
                      src={
                        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.422611694297!2d77.2229761747413!3d28.617093475673165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2ce08640973%3A0x5b85ddaba64ca75c!2sAndhra%20Pradesh%20Bhavan!5e0!3m2!1sen!2sin!4v1686225700041!5m2!1sen!2sin'
                      }
                      width='100%'
                      height={350}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading='lazy'
                      referrerPolicy='no-referrer-when-downgrade'
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* <section className="review-system sec-50">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div className="sec-heading center">
                  <h3>What Our Customer Says</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="main-review-system">
              <div className="row">
                <div className="col-md-10 mx-auto">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="ratintg-box">
                        <p>OUT OF 118 REVIEWS</p>
                        <h3>4.5</h3>
                        <p>STAR RATING</p>
                        <div className="rating-start">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-half-star-o" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="side">
                          <div>
                            5 <i className="fa fa-star" />
                          </div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div className="bar-5" />
                          </div>
                        </div>
                        <div className="side right">
                          <div>150</div>
                        </div>
                        <div className="side">
                          <div>
                            4 <i className="fa fa-star" />
                          </div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div className="bar-4" />
                          </div>
                        </div>
                        <div className="side right">
                          <div>63</div>
                        </div>
                        <div className="side">
                          <div>
                            3 <i className="fa fa-star" />
                          </div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div className="bar-3" />
                          </div>
                        </div>
                        <div className="side right">
                          <div>15</div>
                        </div>
                        <div className="side">
                          <div>
                            2 <i className="fa fa-star" />
                          </div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div className="bar-2" />
                          </div>
                        </div>
                        <div className="side right">
                          <div>6</div>
                        </div>
                        <div className="side">
                          <div>
                            1 <i className="fa fa-star" />
                          </div>
                        </div>
                        <div className="middle">
                          <div className="bar-container">
                            <div className="bar-1" />
                          </div>
                        </div>
                        <div className="side right">
                          <div>20</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 mx-auto">
                  <div className="write-review center mt-5">
                    <p>
                      Whether you had a stellar experience or you think there’s
                      room for improvement, please let us know. We value your
                      experience at uBreakiFix above anything else. We want to
                      hear from you!
                    </p>
                    <a href="#" className="btn btn-primary w25">
                      Write A Review
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <TestimonialSectionComponent />
        <section className='review-system sec-50'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 mx-auto'>
                <div className='sec-heading center'>
                  <h3>Others Location Near You</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className='row'>
              {/* <SingleStoreNearby pincode={SingleLocation.} /> */}

              <div className='col-md-6'>
                <div className='single-location-slide'>
                  <div className='open-accordian'>
                    <h4>
                      Andhra Pradesh - Jangareddigudem - Near Triveni College
                    </h4>
                    <p>
                      Zixdo.Com, Near Triveni College, Jangareddigudem, Andhra
                      Pradesh - 534447
                    </p>
                    <div className='call-now-button'>
                      <div className='icon-with-button'>
                        <div>
                          <span>
                            <i className='fa fa-phone' />
                          </span>
                        </div>
                        <div>Call Now Button</div>
                      </div>
                      <div className='icon-with-button'>
                        <div>
                          <span>
                            <i className='fa fa-whatsapp' />
                          </span>
                        </div>
                        <div>Whatsapp US</div>
                      </div>
                    </div>
                    <a href='#' className='partner'>
                      Partner Details
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='single-location-slide'>
                  <div className='open-accordian'>
                    <h4>
                      Andhra Pradesh - Jangareddigudem - Near Triveni College
                    </h4>
                    <p>
                      Zixdo.Com, Near Triveni College, Jangareddigudem, Andhra
                      Pradesh - 534447
                    </p>
                    <div className='call-now-button'>
                      <div className='icon-with-button'>
                        <div>
                          <span>
                            <i className='fa fa-phone' />
                          </span>
                        </div>
                        <div>Call Now Button</div>
                      </div>
                      <div className='icon-with-button'>
                        <div>
                          <span>
                            <i className='fa fa-whatsapp' />
                          </span>
                        </div>
                        <div>Whatsapp US</div>
                      </div>
                    </div>
                    <a href='#' className='partner'>
                      Partner Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default SingleStore;
