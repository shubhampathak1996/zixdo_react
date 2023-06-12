import React from 'react'
import Banner from '../banner/Banner'
import Footer from '../common/Footer'
import Header from '../common/Header'
import { useGetSetting } from '../../shared/hooks/UseSetting'


function Contact() {
  const [setting_data] = useGetSetting()
  const { settings, loading } = setting_data;
  return (
    <div>
      <Banner Banner_title={"Contact Us"}
        Banner_desktop_img={"assets/images/210310-11-063.jpg"}
        Banner_mobile_img={"assets/images/210310-11-063_mobile_banner.jpg"}
      />
      <div>
        <section className="ptb-50">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="contact-content">
                  <h3>visit our store</h3>
                  <p>
                    {settings && settings.store_address}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-content">
                  <h3>call us</h3>
                  <a href="#">{settings && settings.contact_no1}</a>
                  <a href="#">{settings && settings.contact_no2}</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-content">
                  <h3>e-mail us</h3>
                  <a href="#"> <strong>{settings && settings.email_address}</strong></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="contact-map">
                <h3>locate us on map</h3>

                <div
                  dangerouslySetInnerHTML={{ __html: settings && settings.map_integrate_links }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Contact