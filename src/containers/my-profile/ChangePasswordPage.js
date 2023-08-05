import React from 'react';
import Header from '../../components/common/Header';
import { Link } from 'react-router-dom';
import Footer from '../../components/common/Footer';
import PersonalInfo from '../../components/profile/PersonalInfo';
import ChangePassword from '../../components/profile/ChangePassword';
import OrderHistory from '../../components/profile/OrderHistory';
import ProfileSidebar from '../../components/myprfile/ProfileSidebar';
import { UseResetUserPassword } from '../../shared/hooks/UseFetch';
import { UseGetCurrentUserInformation } from '../../shared/hooks/UseFetch';
import { getInitialName } from '../../domain/getIntials';
const ChangePasswordPage = () => {
  const { userData } = UseGetCurrentUserInformation();
  const { userDataMessage, user_loading, resetUserPassword } =
    UseResetUserPassword();
  return (
    <>
      <Header />
      <section className="profile-section">
        <div className="container my-profile">
          <div className="row">
            <div className="col-md-12">
              <div className="profile  ">
                <h4> {userData && getInitialName(userData.name)} </h4>
                <div className="profile-wallet">
                  {/* <i class="fa-solid fa-wallet"></i> */}
                  <h5>Change Password</h5>
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
                    <ChangePassword
                      userData={userDataMessage}
                      user_loading={user_loading}
                      resetUserPassword={resetUserPassword}
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

export default ChangePasswordPage;
