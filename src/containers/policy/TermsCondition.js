import React from 'react'
import Breadcrum from '../../components/breadcrum/Breadcrum'
import Banner from '../banner/Banner'
import Footer from '../common/Footer'
import Header from '../common/Header'

function TermsCondition() {
  return (
    <div>
      <Banner
        Banner_title={"Terms and Conditions"}
        Banner_desktop_img={"assets/images/explore.png"}
      />
      <div className="privacy-section mt-5">
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
                  <h3><strong>Who we are</strong></h3>
                  <p>
                    Welcome to <strong>PGX PitStop.</strong> <strong>PGX PitStop</strong> (WE) and its affiliates grant the user (YOU) the authority to use the <strong>pgxpitstop.com</strong> (THE WEBSITE) subject to the conditions set out in this page.
                  </p>

                  <p>Kindly read and understand these terms and conditions of use carefully before using any of the PGX PitStop services available on this website. By using the website, you agree to adhere to all the conditions given below and will be bound by the same.</p>

                  <p>Furthermore, when you use any of the current or future services of PGX PitStop you will be subject to the terms, guidelines and conditions applicable to that PGX PitStop service. If any such conditions of use are contrary with any such terms, the above terms will control.</p>

                  <p>These “Terms and Conditions of use” comprise an electronic record within the denotation of the applicable law. This electronic record is produced by a computer system and thus does not require any physical or digital signatures.</p>

                  <p>The terms and conditions consists of the following sub-topics which one user may go through before availing any of our services.</p>

                  <h3><strong>Conditions of use and conditions of sale:</strong></h3>

                  <ul>
                    <li>
                      <p>•	Privacy policy</p>
                    </li>
                    <li>
                      <p>•	Returns and refund policy</p>
                    </li>
                    <li>
                      <p>•	Pricing policy</p>
                    </li>
                    <li>
                      <p>•	Shipping policy</p>
                    </li>
                  </ul>


                  <h3><strong>Conditions of use </strong></h3>
                  <p>The following constitutes the conditions of use for the website of <strong>PGX PitStop:</strong></p>

                  <ul>
                    <li>
                      <p>•	The account privacy will be the exclusive responsibility of you and you should retain the secrecy of your password and any other details. If you have any purpose to believe such data might have been known to others you must right away bring that to our attention. One should make sure such information are not made available any of online or offline sources so that they are not misused.</p>
                    </li>
                    <li>
                      <p>•	All the contents in the website are the exclusive possession of <strong>PGX PitStop</strong> and we forbid the use of any content acquired from our website encompassing but not limited to prices, images and explanation on any other sources unless you acquire a written consent from <strong>PGX PitStop</strong> authorizing the use of the same.</p>
                    </li>
                    <li>
                      <p>•	All the images found on the website is the exclusive possession of <strong>PGX PitStop</strong> and is subject to copyright. Any unauthorized use of the same is forbidden unless you acquire a written consent from <strong>PGX PitStop</strong>.</p>
                    </li>
                    <li>
                      <p>•	All the products found on the website are sold exclusively by <strong>PGX PitStop</strong> and its affiliated sellers and you hereby understand that the contact of sale is between you and <strong>PGX PitStop</strong> or any of its affiliated sellers. You agree, understand and acknowledge that the website is an online platform that allows you to purchase the products listed on the website at the available price denoted therein at any time from any location.</p>
                    </li>
                  </ul>

                  <h3><strong>To know more about our privacy policy, visit privacy policy</strong></h3>

                  <p>*While we guarantee to our best potential that we will make the website accessible to you at all times, it is crucial to accept that internet at any given time is beyond our sole control, so the availability at all times cannot however be promised. Also, your access maybe provisionally made inaccessible due to maintenance or introduction of any new services.</p>

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

export default TermsCondition
