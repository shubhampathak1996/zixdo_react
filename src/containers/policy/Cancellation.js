import React from 'react'
import Breadcrum from '../../components/breadcrum/Breadcrum'
import Banner from '../banner/Banner'
import Footer from '../common/Footer'
import Header from '../common/Header'

function Cancellation() {
    return (
        <div>
            <Banner
                Banner_title={"Cancellation Policy"}
                Banner_desktop_img={"assets/images/explore.png"}
            />
            <div className="privacy-section mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="privacy-policy-wrapper">
                                {/* Start Privacy Policy Single Item */}
                                <div
                                    className="privacy-single-item aos-init aos-animate"
                                    data-aos="fade-up"
                                    data-aos-delay={0}
                                >
                                    {
                                        //   <p>
                                        //   Our website address is :
                                        //   <a href="https://pgxpitstop.com/">  https://pgxpitstop.com/</a>
                                        // </p>
                                    }
                                </div>
                                {/* Start Privacy Policy Single Item */}
                                {/* Start Privacy Policy Single Item */}
                                <div
                                    className="privacy-single-item aos-init aos-animate"
                                    data-aos="fade-up"
                                    data-aos-delay={0}
                                >
                                    <h3>No cancellation will be consider once shipping process is initiated. </h3>
                                    <p>
                                        Product will be dispatch within 1 or 2 days of the order placed.
                                        Delivery will be within 10 days of order.
                                        We have full right to cancel any order due to any inaccuracy/error/any defect regarding the quality of the product.
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Cancellation