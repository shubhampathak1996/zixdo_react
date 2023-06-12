import React from 'react'
import Banner from '../banner/Banner'
import Footer from '../common/Footer'

function Press() {
    return (
        <div>
            <Banner
                Banner_desktop_img={"assets/images/210310-5-048 1.jpg"}
                Banner_mobile_img={"assets/images/210310-5-0481_mobile_banner.jpg"}
                is_asha_page={true}
            />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="press-title ">
                                <h2>Press -</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Press