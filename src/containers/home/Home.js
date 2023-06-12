import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { useSelectAllCollection } from "../../shared/hooks/UseCollection"
import { useSelectAllBanner } from '../../shared/hooks/UseBanner';
import { useSelectAllMobilebanner } from '../../shared/hooks/UseMobilebanner';
import { URI } from "../../domain/constant";

function Home() {

  const [banner_Data] = useSelectAllBanner();
  const [mobile_banner_Data] = useSelectAllMobilebanner();
  const { all_banners, all_banners_loading } = banner_Data;
  const { all_mobilebanners, all_mobilebanners_loading } = mobile_banner_Data;

  const navMenu = useRef(null)
  const openNav = () => {
    navMenu.current.style.width = "100%";
  }

  const closeNav = () => {
    navMenu.current.style.width = "0";
  }

  const [collection_data] = useSelectAllCollection();
  const { all_collections } = collection_data;

  const [showCollection, setShowCollection] = useState(false)

  const ToggleButton = () => {
    return (
      setShowCollection(!showCollection)
    )
  }
  return (
    <div>
      <div>
        <header className="header">
          <div id="mySidenav" ref={navMenu} className="sidenav">
            <a className="closebtn" onClick={() => closeNav()}><i class="fa fa-times" aria-hidden="true"></i></a>

            <Link to="/bridal">Bridal</Link>
            <a onClick={ToggleButton} >Collections</a>
            {
              all_collections && all_collections.map((item) => {

                if (item.brand === "Asha Gautam") {
                  return (
                    showCollection ? (
                      <Link to={`/collection/${item.slug}`}>
                        <div className="pl-30">{item.name}</div>
                      </Link>
                    ) : (
                      null
                    )
                  )
                }
                return (
                  null
                )
              })
            }
            <Link to="/gg-about">GG By Asha Gautam</Link>
            <Link to="/about-us">About the Brand</Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/press">Press</Link>
          </div>
          <div className="header-top">
            <div className="main-nav">
              <div className="logo">
                <Link to="/">
                  <img src="assets/images/logo.png" />
                </Link>
              </div>
              <div className="menu-nav-icon">
                <div className="menu-icon" onClick={() => openNav()}>
                  {/* <img src="./assets/images/menu.png" alt=""> */}
                  <i className="fa fa-bars" aria-hidden="true" />
                </div>
              </div>
              <div className="menu">
                <nav>
                  <input className="hidden" type="checkbox" id="menuToggle" />
                  <label className="menu-btn" htmlFor="menuToggle">
                    <div className="menu" />
                    <div className="menu" />
                    <div className="menu" />
                  </label>
                  {
                    // <div className>
                    //   <ul className="nav-tabs">
                    //     <li className="nav-tab"><a href>Bridal</a></li>
                    //     <li className="nav-tab"><a href>Collections</a></li>
                    //     <li className="nav-tab"><a href>GG by Asha Gautam</a></li>
                    //     <li className="nav-tab"><a href>Press</a></li>
                    //   </ul>
                    // </div>
                  }
                </nav>
              </div>

            </div>
          </div>
        </header>

        <section className="banner">
          <div className="banner-images">
            {
              all_banners && all_banners.map((item) => {
                return (
                  <img className="only-desktop" src={`${URI}${item.image}`} />
                )
              })
            }
            {
              all_mobilebanners && all_mobilebanners.map((item) => {
                return (
                  <img className="only-mobile" src={`${URI}${item.image}`} />
                )
              })
            }
          </div>
          <div className="banner-content">
            <div className="vrindavan-image">
              <img src="assets/images/vrindavan.png" />
            </div>
            <h1>The Heritage Bridal</h1>
          </div>
        </section>
        {/* explore */}
        {/* <section class="explore">
      <div class="container">
        <a href=""
        ><div class="explore-image">
            <img src="assets/images/explore.png" />
          </div>

          <div class="centered">
            <h2>explore</h2>
          </div>
        </a>
      </div>
    </section> */}
        <Link to="/gg-about">
          <section className="explore main-gg">
            <a href><div className="explore-image">
              <img src="assets/images/gg_aha_gautam.png" />
            </div>
              <div className="centered gg">
                <img src="assets/images/explore_gg.png" />
              </div>
            </a>
          </section>
        </Link>


        <Footer />

        {/* script */}
      </div>


    </div>
  );
}

export default Home;
