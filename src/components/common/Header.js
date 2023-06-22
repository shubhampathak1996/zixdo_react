import React, { useState } from 'react';
import Topbar from './Topbar';
import { Link } from 'react-router-dom';

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div>
      <Topbar />
      <header>
        <div className='container'>
          <div className='main-header'>
            <div className='logo-wrapper'>
              <div className='logo'>
                <Link to='/'>
                  <img src='/assets/images/logo.png' alt />
                </Link>
              </div>
            </div>
            <div className='navbar'>
              <div className='head-mobile-bu'>
                <div className='text-center shopping  only-mobile'>
                  <i className='fa fa-shopping-cart'></i>
                </div>
                <div
                  className='text-center mobile only-mobile'
                  onClick={() => {
                    setMobileMenu(!mobileMenu);
                  }}
                >
                  <i className={mobileMenu ? 'fa fa-close' : 'fa fa-bars'}></i>
                </div>
              </div>

              <div className='nav-wrapper only-desktop'>
                <ul>
                  <li>
                    <Link to='/'>HOME</Link>
                  </li>
                  <li>
                    <Link to='/our-centers'>Our Centers</Link>
                  </li>
                  <li>
                    <Link to='/brand-collabs'>Brand Collabs</Link>
                  </li>
                  <li>
                    <Link to='/subscription-plan'>SUBSCRIPTION PLAN</Link>
                  </li>
                  <li>
                    <Link to='/preferred-partner'> Preferred PARTNER</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className='only-mobile mobile-dropdown'
        style={{ display: mobileMenu ? 'block' : 'none' }}
      >
        <div className='mobile-navbar'>
          <ul>
            <li>
              <Link to='/'>
                <i className='fa fa-arrow-right'></i> Home
              </Link>
            </li>
            <li>
              <Link to='/our-centers'>
                <i className='fa fa-arrow-right'></i> OUR CENTERS
              </Link>
            </li>
            <li>
              <Link to='/brand-collabs'>
                <i className='fa fa-arrow-right'></i> BRAND COLLABS
              </Link>
            </li>
            <li>
              <Link to='/subscription-plan'>
                <i className='fa fa-arrow-right'></i> SUBSCRIPTION PLAN
              </Link>
            </li>
            <li>
              <Link to='/preferred-partner'>
                <i className='fa fa-arrow-right'></i> PREFERRED PARTNER
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
