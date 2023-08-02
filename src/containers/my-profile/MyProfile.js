import React from "react";
import Header from "../../components/common/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/common/Footer";
import PersonalInfo from "../../components/profile/PersonalInfo";
import ChangePassword from "../../components/profile/ChangePassword";
import OrderHistory from "../../components/profile/OrderHistory";
const MyProfile = () => {
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
                <h5>Your Wallet Balance :<span>0.00</span></h5>
                </div>
              </div>
              <div className="profile-content">
                <div className="col-md-2">
              <div className="profile-links">
             <Link to="/">Personal Information</Link>
             <Link to="/">Change Password</Link>
             <Link to="/">Order History</Link>
              </div>
              </div>
              <div className="col-md-10">
                <div className="profile-data">
                {/* <PersonalInfo/> */}
                {/* <ChangePassword/> */}
                <OrderHistory/>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default MyProfile;
