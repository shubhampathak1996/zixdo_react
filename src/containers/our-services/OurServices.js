import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import AddServicesComponent from '../../components/add-to-card-services/AddServicesComponent';

function OurServices() {
  return (
    <>
      <Header />
      <section class="ptb-60 all-services">
        <div class="container">
          <div class="row">
            <div className="col-md-3">
              <AddServicesComponent />
            </div>
            <div className="col-md-3">
              <AddServicesComponent />
            </div>
            <div className="col-md-3">
              <AddServicesComponent />
            </div>
            <div className="col-md-3">
              <AddServicesComponent />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default OurServices;
