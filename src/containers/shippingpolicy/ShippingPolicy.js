import React from 'react'
import Breadcrum from '../../components/breadcrum/Breadcrum'
import Footer from '../common/Footer'
import Header from '../common/Header'

function ShippingPolicy() {
    return (
        <div>
            <Header />
            <Breadcrum title={'Shipping policy'} />
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
                                        <p>Product will be shipped within 24 hrs.</p>

                                        <p>All orders after 06:00 P.M. will be shipped on the next day.</p>

                                        <p>Product will be dispatch within 1 or 2 days of the order placed.
                                            Delivery will be within 10 days of order.
                                            We have full right to cancel any order due to any inaccuracy/error/any defect regarding the quality of the product.</p>

                                        <p> In case you want to choose the courier option, call or Whatsapp our customer service at 9891224832 with your order ID right after you place your order. You can also add order notes while purchasing. </p>

                                        <p>In cases of non-availability of door delivery, you might have to collect the product from the nearest deliverable area. The courier partner will get in touch with you regarding the same.</p>

                                        <p>The delivery of the product depends on the delivery capacity of our third party partner. We will not be held responsible for any delays from their side.</p>

                                        <p><strong>For international shipping, charges and other criterias may differ</strong></p>
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

export default ShippingPolicy