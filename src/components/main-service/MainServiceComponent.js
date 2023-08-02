import React from 'react';
import { useHomepageServices } from '../../shared/hooks/UseApi';
import { useEffect } from 'react';

function MainServiceComponent() {
  const { HomePageservices, getHomePageServices, Home_Page_services_loading } =useHomepageServices()
 
  useEffect(() => {
    getHomePageServices();
  }, []);
  console.log(HomePageservices,'homepageSservice')
  return (
    <>
      <section className="service-section ptb-60 bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="service-section-heading">
                <h3>Our Services</h3>
                <p>
                  Opportunity to own & run car cleaning business in your city
                </p>
              </div>
            </div>
          </div>
          <div className="row ptb-20">
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-image">
                  <img src="assets/images/service1 1.png" alt />
                </div>
                <div className="service-content">
                  <div className="service-heading">Car Exterior Service</div>
                  <p>
                  At Zixdo, we are experts in delivering top-tier car exterior services, utilizing state-of-the-art
tools and advanced techniques. Our highly skilled technicians work diligently to restore your
car&#39;s paintwork, bodywork, and detailing to perfection, elevating its visual allure and leaving
it with a stunning, showroom-worthy appearance. Trust us to provide your vehicle with a
head-turning, brand-new look that will impress all who lay eyes on it.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-image">
                  <img src="assets/images/service1 1.png" alt />
                </div>
                <div className="service-content">
                  <div className="service-heading">Car Interior Service</div>
                  <p>
                  At Zixdo Technologies Pvt, we are masters in the art of car interior services, elevating both
comfort and aesthetics to new heights. Our expert team specializes in crafting luxurious
transformations, employing only the finest materials and delivering impeccable craftsmanship.
                  </p>
                  {/* <a href className="read-mroe">
                    READ MORE
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-image">
                  <img src="assets/images/service1 1.png" alt />
                </div>
                <div className="service-content">
                  <div className="service-heading">Home/AC service</div>
                  <p>
                  At Zixdo, our unwavering dedication is to provide exceptional home/AC services through a
team of highly skilled technicians. We specialize in efficient installation, maintenance, and
repair, guaranteeing utmost comfort and complete satisfaction for our valued customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-image">
                  <img src="assets/images/service1 1.png" alt />
                </div>
                <div className="service-content">
                  <div className="service-heading">2 Wheelers</div>
                  <p>
                  Experience the pinnacle of two-wheeler services, where we ensure your motorcycle or
scooter stays in prime condition for a smooth and delightful ride.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-image">
                  <img src="assets/images/service1 1.png" alt />
                </div>
                <div className="service-content">
                  <div className="service-heading">Commercial Vehicle</div>
                  <p>
                  We provide a wide range of all-inclusive services specifically designed for commercial vehicles,
guaranteeing optimal performance and prolonged lifespan.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-card">
                <div className="service-image">
                  <img src="assets/images/service1 1.png" alt />
                </div>
                <div className="service-content">
                  <div className="service-heading">
                  Service for all types of vehicles
                  </div>
                  <p>
                  &quot;We take immense pride in offering a comprehensive range of services for all your vehicles,
including ACs, right at your doorstep!&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainServiceComponent;
