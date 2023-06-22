import React, { useState } from 'react';
import { useFetch } from '../../shared/hooks/UseFetch';
function BannerComponent() {
  const { data, loading, error } = useFetch(
    'https://zixdo.com/Api/service-type.php'
  );
  const [SERVICES, setSERVICES] = useState(false);
  console.log('data', data);
  return (
    <div>
      <section className="hero-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hero-section-content">
                <div className="main-heading-section">
                  <h1>We Are Car Wash Service Provider</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Odio in lorem ut
                    cras tristique non. Arcu ac nunc tincidunt eget viverra eget
                    quam sit
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
                      <div className="hatch-flex">
                        <div className="car-box">
                          <div className="hatchback">
                            <img src="assets/images/hatchback.png" />
                            <h5>HATCHBACK</h5>
                          </div>
                        </div>
                        <div className="car-box">
                          <div className="hatchback">
                            <img src="assets/images/suv.png" />
                            <h5>SUV</h5>
                          </div>
                        </div>
                        <div className="car-box">
                          <div className="hatchback">
                            <img src="assets/images/sedan.png" />
                            <h5>SEDAN</h5>
                          </div>
                        </div>
                        <div className="car-box">
                          <div className="hatchback">
                            <img src="assets/images/service.png" />
                            <h5>AC SERVICES</h5>
                          </div>
                        </div>
                      </div>
                      <div className="hatch-flex">
                        <div className="car-box">
                          <div className="hatchback">
                            <img src="assets/images/hatchback.png" />
                            <h5>HATCHBACK</h5>
                          </div>
                        </div>
                        <div className="car-box">
                          <div className="hatchback">
                            <img src="assets/images/suv.png" />
                            <h5>SUV</h5>
                          </div>
                        </div>
                        <div className="car-box">
                          <div className="hatchback">
                            <img src="assets/images/sedan.png" />
                            <h5>SEDAN</h5>
                          </div>
                        </div>
                        <div className="car-box">
                          <div className="hatchback">
                            <img src="assets/images/service.png" />
                            <h5>AC SERVICES</h5>
                          </div>
                        </div>
                      </div>
                      <div className="car-option car-option-flex">
                        <div className="options-car">
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
                        <div className="options-car clo">
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
                      </div>
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
    </div>
  );
}

export default BannerComponent;
