import React from 'react'
import Breadcrum from '../../components/breadcrum/Breadcrum'
import Banner from '../banner/Banner'

import Footer from '../common/Footer'
import Header from '../common/Header'

function About() {
  return (
    <div>
      <Banner
        Banner_title={"About the Brand"}
        Banner_desktop_img={"assets/images/210310-6-194.jpg"}
        Banner_mobile_img={"assets/images/210310-6-194_mobile_banner.jpg"}
        is_asha_page={true}

      />
      <section className="about-us ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="about-content">
                <p>
                  With a little love, a pinch of creativity, and a vision, Asha
                  Gautam's label was started with the concoction of these
                  ingredients as a passion project by Asha Gupta in 1998.
                </p>
                <p>
                  With her keen eye for fashion and affinity towards Indian arts
                  and crafts, it has bloomed into one of the most exquisite
                  fashion labels. As time passed, her son, Gautam, joined her,
                  giving a fresh yet young perspective and making the brand more
                  desirable for fashion enthusiasts.
                </p>
                <p>
                  Along with Gautam came his deep-rooted knowledge and love of the
                  great Indian textiles and contemporary fashion, thanks to his
                  education at NIFT. The mother-son duo brought to life the
                  wonders of modern silhouettes with a touch of Indian textiles
                  and weaves. Thinking beyond the boundaries of existing fashion,
                  they travelled to remote parts of the country, like Paithan,
                  Bhuj, Pochampally, and Uppada, amongst others, discovering
                  deep-rooted traditions that had been sucked into obscurity by
                  reviving, renewing it, giving them new life.
                </p>
                <p>
                  With Asha's creativity and her honed skill of up-cycling, they
                  brought to life their Indian bridal line using techniques like
                  appliqué, rich embroideries like Convent and French Knots, Nib
                  Painting, Bandhani and Chikankari. The brand uses weaves from
                  Kota Dori, Real Banarasi Zari, and Paithani, further essaying a
                  new design story.
                </p>
                <p>
                  Label Asha Gautam works very closely with weavers and artisans
                  across India to revive countries history, culture and heritage,
                  making each creation a masterpiece. After 24 years of travel and
                  collaborations, the brand is currently associated with artisans
                  from 7 states, 15 clusters, with more than 30 Indian crafts. All
                  designs are an amalgamation of modern cuts with rich
                  craftsmanship.
                </p>
                <p>
                  "We want Asha Gautam to be a powerhouse of the Indian Arts and
                  Crafts, a centre of design excellence where even the rarest
                  Indian art traditions can thrive beautifully. And for that, we
                  want to work with more than 10,000 creative artisans who can
                  bring this vision to life with their creativity." - Gautam Gupta
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-image">
                <img src="assets/images/about-us.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
