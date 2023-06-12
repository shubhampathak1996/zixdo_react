import React from 'react';
import { URI } from '../../domain/constant';
import Image from '../common/Image';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
function Gallery({ activeImage, media, setActiveImage, image }) {
  return (
    <div className='product-details-gallery-area d-flex align-items-start flex-row-reverse'>
      <div className='product-large-image br-11px product-large-image-vertical ml-15'>
        <div className='product-image-large-single zoom-image-hover br-11px'>
          {activeImage && <img src={`${URI}${activeImage}`} />}
          {/* {activeImage && <InnerImageZoom src={`${URI}${activeImage}`} />} */}
        </div>
      </div>
      <div className='product-image-thumb product-image-thumb-vertical pos-relative'>
        {media &&
          media.map((item) => {
            return (
              <div className='zoom-active product-image-thumb-single'>
                <div
                  className='product-image-large-single zoom-image-hover br-11px'
                  onClick={() => setActiveImage(item)}
                >
                  {
                    // <img src={`${URI}${item}`} alt className="img-fluid" />
                  }
                  <Image src={`${URI}${item}`} className='img-fluid' />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Gallery;
