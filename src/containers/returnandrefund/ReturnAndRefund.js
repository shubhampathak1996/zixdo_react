import React from 'react'
import Breadcrum from '../../components/breadcrum/Breadcrum'
import Footer from '../common/Footer'
import Header from '../common/Header'

function ReturnAndRefund() {
    return (
        <div>
            <Header />
            <Breadcrum title={'Return and Refund'} />
            <div className="privacy-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="privacy-policy-wrapper privacy-policy-content">
                                {/* Start Privacy Policy Single Item */}
                                <div
                                    className="privacy-single-item aos-init aos-animate"
                                    data-aos="fade-up"
                                    data-aos-delay={0}
                                >

                                    <div>
                                        <h3><strong>No Return Only Replacement Policy</strong></h3>

                                        <p>Returns are not accepted</p>

                                        <p>All products listed in www.pgxpitstop.com will be bound by this replacement policy. Using the website means you have read and understood the terms and conditions of return and refund policy.</p>

                                        <p>In case of damaged goods being delivered or wrong size or wrong specification is delivered we offer only replacement. No refund of the same will be provided under any condition. </p>

                                        <p>Replacement will be done if the video of unboxing of parcel has been made</p>

                                        <p>Any item that shows the sign of wear or use or if it is in a condition other than the way it was when it was delivered, it cannot be returned. </p>

                                        <p>Damaged or defective products should be returned in the condition they came in and should include all accessories with it.</p>

                                        <p>All return requests should be filed within 48 hours of the delivery of the product. Any request succeeding that will not qualify for replacement.</p>
                                    </div>

                                </div>
                                {/* Start Privacy Policy Single Item */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ReturnAndRefund