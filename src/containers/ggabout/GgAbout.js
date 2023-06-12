import React from 'react'
import Banner from '../banner/Banner';
import BannerForGg from '../banner/BannerForGg';
import Footer from '../common/Footer'

function GgAbout() {
    return (
        <div>
            <div>
                <BannerForGg
                    Banner_gg_logo={"assets/images/page_gg_asha.png"}
                    Banner_desktop_img={"assets/images/gg_aha_gautam.png"}
                    Banner_mobile_img={"assets/images/gg_gautam_mobile_banner.png"}
                />
                <section className="section-heading">
                    <div className="gg-about-heading ">
                        <h1>about the Brand</h1>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 mx-auto">
                            <div className="about-page-content">
                                <p>
                                    An offshoot of the label, Asha Gautam, GG by Asha Gautam is Gautam
                                    Gupta’s venture into the world of couture, fusion fashion, and
                                    luxury prêt like never before. With over twenty-four years of
                                    experience delving into the textile industry, uncovering and
                                    exploring new and old Indian crafts, Gautam wanted to bring this
                                    knowledge to the contemporary world of fashion. Marrying modern
                                    sensibilities with uniquely Indian design to create contemporary
                                    fashion that stands on its own- this is the secret sauce to GG by
                                    Asha Gautam. He is working with some of the country’s best
                                    artisans and has a unique design philosophy, Gautam blends
                                    technology like 3D hand embroidery and Appliqué with the magic of
                                    Indian textiles, from Organza, Silk, Banarasi fabrics to georgette
                                    satin and so much more. With this bold Endeavour, Gautam has been
                                    shaking up the Indian fashion scene with diverse collections of
                                    fusion wear, luxury prêt, and couture pieces. Imbibing their
                                    philosophy of innovation, a new initiative has also taken birth
                                    under the umbrella of the label, known as ‘Style the Craft.’
                                    espousing the use of different crafts, showcasing the GG’s core
                                    design ideology at play.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5 mx-auto">
                            <div className="about-page-content">
                                <p>
                                    As the young label grows and expands, strengthening its voice, GG
                                    by Asha Gautam aims to bring a spirited approach to fashion,
                                    playing with new techniques, new textiles, and as always new
                                    crafts. They will be transforming these ideas into a fun capsule
                                    collection of resort wear, accessories, and evening wear. Despite
                                    their recent start in 2019, they have been shaking up the fashion
                                    scene, bringing fresh ideas into the mix. Their design philosophy
                                    is best put into words by Gautam himself, “I believe Indian
                                    handicraft is the stuff of dreams. Versatile, gorgeous with
                                    unlimited possibilities, it compels my creative instincts to
                                    narrate a different design story than what has been told by our
                                    parent label, Asha Gautam. To me, GG is not just a brand, but an
                                    ideology, a move towards fashion that is slow, conscious, and more
                                    responsible. And our artisans constantly work toward this goal,
                                    with upcycling, recycling, and the most sustainable of practices.
                                    This label pays its respects to the earth, and to Indian crafts
                                    with a uniquely contemporary perspective, bringing their beauty to
                                    the global stage, .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer is_gg_page={true} />
        </div>
    )
}

export default GgAbout;