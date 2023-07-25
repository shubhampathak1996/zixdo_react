import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const ContactUs = () => {
  return (
    <>
      <Header />
      <section className="become-partner-section ptb-30 bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h3>Contact Us</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="partner-form box-shadow_6">
                <h3>Become our service partner</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Non nulla ultrices
                  rhoncus morbi elementum nisi sed.
                </p>
                <form action>
                  <div className="contact-form-group">
                    <div className="contact-form-input">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="contact-form-input">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="contact-form-input">
                      <input type="text" placeholder="Phone" />
                    </div>
                    <div className="contact-form-input-message">
                      <input type="text" placeholder="Message" />
                    </div>
                  </div>
                  <div className="contact-form-btn">
                    <div className="form-submit-btn">
                      <a href>Submit</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contactus-box">
                <div className="contactus-content ptb-10">
                  <div className="contactus-address-heading">
                    <h3>
                      Address: <span>Delhi</span>
                    </h3>
                  </div>
                  <div className="contactus-detailed-address">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    Zixdo Technologies private limited D-485 KH NO-29/8 RAM PHAL
                    CHOWK PALAM EXTN, Sector 7 Dwarka, Dwarka, Delhi, 110075
                  </div>
                  <div className="contactus-contact-number">
                    <i className="fa fa-phone" aria-hidden="true" />
                    <a href="tel:805-500-8805">805-500-8805</a>
                  </div>
                </div>
                <div className="contactus-box-img">
                  <img
                    src="./assets/images/car-wash-detailing-station.webp"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="address-map ptb-30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="embeded-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4991598875918!2d77.06777657393678!3d28.584798586249555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bf0c33567ff%3A0x362d15a262ecee06!2sZixdo%20Technologies%20private%20limited!5e0!3m2!1sen!2sin!4v1686036006212!5m2!1sen!2sin"
                  width="100%"
                  height={500}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
