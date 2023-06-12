import React from 'react';
import Slider from 'react-slick';
import ProductCard from '../product/ProductCard';
import {
  useProductsByCollection,
  useSelectAllProduct,
} from '../../shared/hooks/UseProduct';
import { useEffect } from 'react';
import renderHTML from 'react-render-html';
import { useState } from 'react';
function HotDeals({ item }) {
  const [productData, getProductData] = useProductsByCollection();

  const [product_data] = useSelectAllProduct();
  const { all_products, all_products_loading } = product_data;

  var product_settings = {
    dots: false,

    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  console.log('ITEM', productData);
  useEffect(() => {
    if (
      item &&
      item.collection_product_component &&
      item.collection_product_component.product_collection
    ) {
      getProductData(item.collection_product_component.product_collection.slug);
    }
  }, [item]);
  useState(() => {
    if (productData && productData.products) {
      product_settings.slidesToShow = productData.products.length;
    }
  }, [productData]);

  return (
    <div className='bg-off-white'>
      <div className='product-tab-section section-top-gap-100'>
        {/* Start Section Content */}
        <div className='section-content-gap'>
          <div className='container'>
            <div className='row'>
              <div className='section-content'>
                <h3 className='section-title'>{item.title}</h3>
                {item.description && renderHTML(item.description)}
              </div>
            </div>
          </div>
        </div>
        {/* End Section Content */}
        {/* Start Tab Wrapper */}
        <div className='product-tab-wrapper'>
          <div className='container'>
            <div>
              <div>
                <Slider {...product_settings}>
                  {productData &&
                    productData.products &&
                    productData.products.map((product) => {
                      return <ProductCard product={product} />;
                    })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        {/* End Catagory Wrapper */}
      </div>
    </div>
  );
}

export default HotDeals;
