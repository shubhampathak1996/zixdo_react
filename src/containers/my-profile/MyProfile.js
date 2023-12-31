import React from 'react';
import Header from '../../components/common/Header';
import { Link } from 'react-router-dom';
import Footer from '../../components/common/Footer';

import OrderHistory from '../../components/profile/OrderHistory';
import ProfileSidebar from '../../components/myprfile/ProfileSidebar';
import { UseUserOrders } from '../../shared/hooks/UseFetch';
const MyProfile = () => {
  const { order_loading, orderData } = UseUserOrders();
  console.log(orderData, 'order Data');
  return (
    <>
      <Header />
      <section className="profile-section">
        <div className="container my-profile">
          <div className="row">
            <div className="col-md-12">
              <div className="profile  ">
                <h4>AS</h4>
                <div className="profile-wallet">
                  {/* <i class="fa-solid fa-wallet"></i> */}
                  <h5>My Profile</h5>
                </div>
              </div>
              <div className="profile-content">
                <div className="col-md-3">
                  <ProfileSidebar />
                </div>
                <div className="col-md-9">
                  <div className="profile-data">
                    {/* <PersonalInfo/> */}
                    {/* <ChangePassword/> */}
                    <OrderHistory />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MyProfile;
