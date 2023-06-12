import React from 'react';
import Slider from 'react-slick';
import { URI } from '../../domain/constant';
import Image from '../common/Image';
import NextArrowComponent from '../slider/NextArrowComponent';
import PreArrowComponent from '../slider/PreArrowComponent';

function ProductGallerySimple({ gallery }) {
  var product_setting = {
    dots: false,
    infinite: true,
    nav: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowComponent />,
    prevArrow: <PreArrowComponent />,
  };
  return (
    <div>
      <Slider {...product_setting}>
        {gallery && gallery.length > 0 ? (
          <div>
            {
              //   <img
              //   src={`${URI}${img}`}
              //   className="product-default-img img-fluid"
              // />
            }

            <Image
              src={gallery[0] ? `${URI}${gallery[0]}` : null}
              className='product-default-img img-fluid br-11 br-top-l-r-12'
            />
          </div>
        ) : (
          <div>
            {
              //   <img
              //   src={`${URI}${img}`}
              //   className="product-default-img img-fluid"
              // />
            }

            <Image src={null} className='product-default-img img-fluid' />
          </div>
        )}
      </Slider>
    </div>
  );
}

export default ProductGallerySimple;
