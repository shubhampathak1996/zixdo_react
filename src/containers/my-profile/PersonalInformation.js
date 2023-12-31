import React from 'react';
import Header from '../../components/common/Header';
import { Link } from 'react-router-dom';
import Footer from '../../components/common/Footer';
import PersonalInfo from '../../components/profile/PersonalInfo';
import ChangePassword from '../../components/profile/ChangePassword';
import OrderHistory from '../../components/profile/OrderHistory';
import ProfileSidebar from '../../components/myprfile/ProfileSidebar';
import { UseGetCurrentUserInformation } from '../../shared/hooks/UseFetch';
import { getInitialName } from '../../domain/getIntials';
const PersonalInformation = () => {
  const { userData, user_loading } = UseGetCurrentUserInformation();
  return (
    <>
      <Header />
      <section className="profile-section">
        <div className="container my-profile">
          <div className="row">
            <div className="col-md-12">
              <div className="profile  ">
                <h4>{userData && getInitialName(userData.name)}</h4>
                <div className="profile-wallet">
                  {/* <i class="fa-solid fa-wallet"></i> */}
                  <h5>Personal Information</h5>
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
                    <PersonalInfo
                      user_loading={user_loading}
                      userData={userData}
                    />
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

export default PersonalInformation;
