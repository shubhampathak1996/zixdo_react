import React from "react";
import Breadcrum from "../../components/breadcrum/Breadcrum";
import ProductCard from "../../components/product/ProductCard";
import Product_flex from "../../components/product/Product_flex";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { useAllProducts } from "../../shared/hooks/UseProduct";
import { useSelectAllCollection } from "../../shared/hooks/UseCollection";
import Skeleton from "react-loading-skeleton";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/common/Pagination";
import { LIMIT } from "../../domain/constant";

function Shop() {
  const [data, setPageNumber] = useAllProducts();
  const [collection_data] = useSelectAllCollection();
  const { products_loading, products, total_products, page, pages } = data;
  const { all_collections } = collection_data;
  const [activeSidebar, setActiveSidebar] = useState(null);
  useEffect(() => {
    if (all_collections) {
      const filterData = all_collections.filter((item) => item.show_on_sidebar);
      if (filterData) {
        setActiveSidebar(filterData);
      }
    }
  }, [all_collections]);

  return (
    <div>
      <Header />
      <Breadcrum title={"Shop All"} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <div className="container  box-shadow-2 ">
              <div className="row">
                <div className="col-md-12">
                  <div className="shop-side-nav-filter">
                    <div className="shop-side-nav-filter-title">
                      <p>
                        <strong>Shop By Collection</strong>
                      </p>
                    </div>
                    <hr />
                    <div className="side-nav-filter-list">
                      {activeSidebar &&
                        activeSidebar.map((item) => {
                          return (
                            <div>
                              <ul>
                                <li>
                                  <Link to={`/collections/${item.slug}`}>
                                    {" "}
                                    <p>{item.name}</p>{" "}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="shop-section">
              <div className="container">
                <div className="row flex-column-reverse flex-lg-row">
                  <div className="col-lg-12">
                    {/* Start Shop Product Sorting Section */}
                    <div
                      className="shop-sort-section"
                      data-aos="fade-up"
                      data-aos-delay={0}
                    >
                      <div className="container">
                        <div className="row">
                          {/* Start Sort Wrapper Box */}
                          <div className="sort-box d-flex justify-content-between align-items-center flex-wrap">
                            {/* Start Sort tab Button */}
                            <div className="sort-tablist">
                              <ul className="tablist nav sort-tab-btn">
                                <li>
                                  <a
                                    className="nav-link active"
                                    data-bs-toggle="tab"
                                    href="#layout-4-grid"
                                  >
                                    <img
                                      src="assets/images/icon/bkg_grid.png"
                                      alt
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    href="#layout-list"
                                  >
                                    <img
                                      src="assets/images/icon/bkg_list.png"
                                      alt
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* End Sort tab Button */}
                            {/* Start Sort Select Option */}
                            <div className="sort-select-list"></div>
                            {/* End Sort Select Option */}
                            {/* Start Page Amount */}
                            <div className="page-amount">
                              <span>
                                {
                                  // Showing 1–9 of
                                }
                                showing {products && products.length} of{" "}
                                {total_products} results
                              </span>
                            </div>
                            {/* End Page Amount */}
                          </div>
                          {/* Start Sort Wrapper Box */}
                        </div>
                      </div>
                    </div>

                    {/* End Section Content */}
                    {/* Start Tab Wrapper */}
                    <div className="sort-product-tab-wrapper">
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <div className="tab-content tab-animate-zoom">
                              {/* Start Grid View Product */}
                              <div
                                className="tab-pane active show sort-layout-single"
                                id="layout-4-grid"
                              >
                                <div className="row">
                                  {/* Start Product Defautlt Single */}
                                  {products &&
                                    products.map((item) => {
                                      return (
                                        <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                                          <ProductCard product={item} />
                                        </div>
                                      );
                                    })}
                                  {products_loading && (
                                    <>
                                      <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                                        <div className="product-default-single border-around mr-2">
                                          <img
                                            src="/assets/images/default-image.png"
                                            className="w-100"
                                          />
                                          <div className="product-pad">
                                            <Skeleton height={20}> </Skeleton>
                                            <Skeleton height={30}> </Skeleton>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                                        <div className="product-default-single border-around mr-2">
                                          <img
                                            src="/assets/images/default-image.png"
                                            className="w-100"
                                          />
                                          <div className="product-pad">
                                            <Skeleton height={20}> </Skeleton>
                                            <Skeleton height={30}> </Skeleton>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                                        <div className="product-default-single border-around mr-2">
                                          <img
                                            src="/assets/images/default-image.png"
                                            className="w-100"
                                          />
                                          <div className="product-pad">
                                            <Skeleton height={20}> </Skeleton>
                                            <Skeleton height={30}> </Skeleton>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                                        <div className="product-default-single border-around mr-2">
                                          <img
                                            src="/assets/images/default-image.png"
                                            className="w-100"
                                          />
                                          <div className="product-pad">
                                            <Skeleton height={20}> </Skeleton>
                                            <Skeleton height={30}> </Skeleton>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                                        <div className="product-default-single border-around mr-2">
                                          <img
                                            src="/assets/images/default-image.png"
                                            className="w-100"
                                          />
                                          <div className="product-pad">
                                            <Skeleton height={20}> </Skeleton>
                                            <Skeleton height={30}> </Skeleton>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                                        <div className="product-default-single border-around mr-2">
                                          <img
                                            src="/assets/images/default-image.png"
                                            className="w-100"
                                          />
                                          <div className="product-pad">
                                            <Skeleton height={20}> </Skeleton>
                                            <Skeleton height={30}> </Skeleton>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                                        <div className="product-default-single border-around mr-2">
                                          <img
                                            src="/assets/images/default-image.png"
                                            className="w-100"
                                          />
                                          <div className="product-pad">
                                            <Skeleton height={20}> </Skeleton>
                                            <Skeleton height={30}> </Skeleton>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                                        <div className="product-default-single border-around mr-2">
                                          <img
                                            src="/assets/images/default-image.png"
                                            className="w-100"
                                          />
                                          <div className="product-pad">
                                            <Skeleton height={20}> </Skeleton>
                                            <Skeleton height={30}> </Skeleton>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                                        <div className="product-default-single border-around mr-2">
                                          <img
                                            src="/assets/images/default-image.png"
                                            className="w-100"
                                          />
                                          <div className="product-pad">
                                            <Skeleton height={20}> </Skeleton>
                                            <Skeleton height={30}> </Skeleton>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                                        <div className="product-default-single border-around mr-2">
                                          <img
                                            src="/assets/images/default-image.png"
                                            className="w-100"
                                          />
                                          <div className="product-pad">
                                            <Skeleton height={20}> </Skeleton>
                                            <Skeleton height={30}> </Skeleton>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                                        <div className="product-default-single border-around mr-2">
                                          <img
                                            src="/assets/images/default-image.png"
                                            className="w-100"
                                          />
                                          <div className="product-pad">
                                            <Skeleton height={20}> </Skeleton>
                                            <Skeleton height={30}> </Skeleton>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-xl-4 col-lg-4 col-sm-6 col-12">
                                        <div className="product-default-single border-around mr-2">
                                          <img
                                            src="/assets/images/default-image.png"
                                            className="w-100"
                                          />
                                          <div className="product-pad">
                                            <Skeleton height={20}> </Skeleton>
                                            <Skeleton height={30}> </Skeleton>
                                          </div>
                                        </div>
                                      </div>
                                    </>
                                  )}

                                  {/* End Product Defautlt Single */}
                                </div>
                              </div>
                              {/* End Grid View Product */}
                              {/* Start List View Product */}
                              <div
                                className="tab-pane sort-layout-single"
                                id="layout-list"
                              >
                                <div className="row">
                                  {/* Start Product Defautlt Single */}
                                  {products &&
                                    products.map((item) => {
                                      return (
                                        <div className="col-12">
                                          <Product_flex product={item} />{" "}
                                        </div>
                                      );
                                    })}

                                  {/* End Product Defautlt Single */}
                                </div>
                              </div>
                              {/* End List View Product */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Tab Wrapper */}
                    {/* Start Pagination */}
                    <Pagination
                      pages={pages}
                      count={total_products}
                      loading={products_loading}
                    />
                    {/* End Pagination */}
                  </div>
                  {/* End Shop Product Sorting Section  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Shop;
