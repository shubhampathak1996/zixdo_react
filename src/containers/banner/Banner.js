import React from 'react'
import Header from '../common/Header'
import HeaderForGg from '../common/HeaderForGg'

function Banner({ Banner_title, Banner_gg_logo, Banner_desktop_img, Banner_content, Banner_mobile_img, is_asha_page }) {
    return (
        <div>
            <section className="banner">
                <div className="banner-images-new">
                    <img className="only-desktop" src={Banner_desktop_img} />
                    <img className="only-mobile" src={Banner_mobile_img} />
                </div>
                {!is_asha_page ? (
                    <HeaderForGg />
                ) : (
                    <Header />
                )}
                <div className="banner-content page">
                    <div className="vrindavan-image">
                        <h1>{Banner_title}</h1>
                    </div>
                    <div className="header-content">
                        <h3>{Banner_content}</h3>
                    </div>
                </div>
                <div className="banner-content page">
                    <div className="vrindavan-image">
                        <img src={Banner_gg_logo} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner