import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProfileSidebar() {

  return (
    <>
        <div className="profile-links">
             <Link to="/my-profile/personal-information">Personal Information</Link>
             <Link to="/my-profile/change-password">Change Password</Link>
             <Link to="/my-profile/order-history">Order History</Link>
              </div>
    </>
  );
}

export default ProfileSidebar;
