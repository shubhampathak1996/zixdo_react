import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import AddServicesComponent from '../../components/add-to-card-services/AddServicesComponent';
import * as qs from 'qs';
import { useServices } from './../../shared/hooks/UseApi';
import { useHistory } from 'react-router-dom';
function OurServices() {
  const queryParams = qs.parse(window.location.search.replace('?', ''));
  console.log('Query Params', queryParams);
  const { services, services_loading, getServices } = useServices();
  const [filteredServices, setFilteredServices] = useState(null);
  const history = useHistory();
  useEffect(() => {
    if (!queryParams.vehicle_type) {
      history.push('/');
    } else {
      getServices({
        brand_id: queryParams.vehicle_type,
        phone_id: queryParams.model_type,
        service_type: queryParams.wash_type,
      });
    }
  }, []);
  console.log('Services', services);
  useEffect(() => {
    // if(){
    // }
  }, [services]);

  return (
    <>
      <Header />
      <section class='ptb-60 all-services'>
        <div class='container'>
          <div class='row'>
            {services &&
              services.map((service) => {
                return (
                  <div className='col-md-3'>
                    <AddServicesComponent service={service} />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default OurServices;
