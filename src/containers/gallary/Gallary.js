import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { UseGalleryImages } from '../../shared/hooks/UseFetch';
import { useEffect } from 'react';
import { UPLOAD_URI } from '../../domain/constant';

function Gallary() {
  const { galleryImage, GetGalleryImages, galley_images_loading } =
    UseGalleryImages();
  useEffect(() => {
    GetGalleryImages();
  }, []);
  console.log(galleryImage, 'gallery Images');
  return (
    <>
      <Header />
      <section className="page-section gallery-banner  sec-50 ">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="location-page-searchbar center">
                <h2>Our Gallery</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-50">
        <div className="container">
          <div className="row">
            {galleryImage &&
              galleryImage.map((data) => {
                return (
                  <div className="col-md-4">
                    <div className="gallery-image">
                      <img
                        src={`https://zixdo.com/admin/Galley_banner/${data.image}`}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Gallary;
