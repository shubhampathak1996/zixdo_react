import React from 'react'
import Banner from '../banner/Banner'
import Footer from '../common/Footer'
import Header from '../common/Header'

function PremiumSaree() {
    return (
        <div>
            <Banner

                Banner_desktop_img={"assets/images/explore.png"}
            />
            <section className="heritage-page ptb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="heritage-image">
                                <img src="assets/images/heritage_bridal_1.png" />
                                <p>
                                    You want to adjust the target and maximum to help keep the file
                                    size down. Dropping down to 5-7 for target can save a lot of
                                    quality. YouTube or other streaming platforms are going to do
                                    this regardless. There you have it, some quick tips to reduce
                                    file size in Adobe Premiere Pro. Remember to export for the
                                    quality of video you are creating. You want to adjust the target
                                    and maximum to help keep the file size down. Dropping down to
                                    5-7 for target can save a lot of quality.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="heritage-second-image">
                                        <img src="assets/images/heritage_bridal_2.png" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="heritage-second-image">
                                        <img src="assets/images/heritage_bridal_3.png" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="heritage-second-image">
                                        <img src="assets/images/heritage_bridal_4.png" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="heritage-second-image">
                                        <img src="assets/images/heritage_bridal_5.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default PremiumSaree