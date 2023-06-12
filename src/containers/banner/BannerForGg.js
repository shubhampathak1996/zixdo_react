import React from 'react'
import HeaderForGg from '../common/HeaderForGg'

const BannerForGg = ({ Banner_desktop_img, Banner_mobile_img, Banner_gg_logo }) => {
    return (
        <section className="banner">
            <div className="banner-images-new">
                <img className="only-desktop" src={Banner_desktop_img} />
                <img className="only-mobile" src={Banner_mobile_img} />
            </div>
            <HeaderForGg />
            <div className="banner-content page">
                <div className="vrindavan-image">
                    <img src={Banner_gg_logo} />
                </div>
            </div>
        </section>
    )
}

export default BannerForGg