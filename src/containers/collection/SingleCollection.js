import React, { useState } from 'react'
import Banner from '../banner/Banner'
import Footer from '../common/Footer'
import Modal from 'react-modal';
import InnerImageZoom from 'react-inner-image-zoom'
import { useSingleCollection, useSingleCollectionBySlug } from "../../shared/hooks/UseCollection"
import { URI } from '../../domain/constant';
import renderHTML from "react-render-html";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

function SingleCollection({ match }) {
    let subtitle;
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const [activeImage, setActiveImage] = useState(null)
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(image) {
        setActiveImage(image)
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [data] = useSingleCollectionBySlug(match.params.slug);
    const { collection, collection_loading } = data;

    return (
        <div>
            {
                !collection_loading ? collection && (
                    <>
                        <Banner
                            Banner_desktop_img={`${URI}${collection.collection_banner_img}`}
                            Banner_mobile_img={`${URI}${collection.collection_mobile_banner_img}`}
                            Banner_title={collection.name}
                            is_asha_page={collection.brand === "Asha Gautam" && !collection.hide_on_menu}
                        />
                        <section className="heritage-page ptb-50">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="heritage-image pos-sticky cs-pointer">
                                            <img onClick={() => openModal(`${URI}${collection.featured_img}`)} src={`${URI}${collection.featured_img}`} />
                                            <p>
                                                {renderHTML(collection.description)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="row">
                                            {collection.gallery && collection.gallery.map((item) => {
                                                return (
                                                    <div className="col-md-6">
                                                        <div className="heritage-second-image cs-pointer">
                                                            <img onClick={() => openModal(`${URI}${item}`)} src={`${URI}${item}`} />
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                {activeImage && (
                                    <Lightbox image={activeImage} onClose={() => setActiveImage(null)} >
                                    </Lightbox>
                                )}
                            </div>
                        </section>
                    </>
                ) : (
                    <div></div>
                )
            }
            <Footer is_gg_page={collection && collection.brand === "GG By Asha Asha Gautam"} />
        </div>
    )
}

export default SingleCollection