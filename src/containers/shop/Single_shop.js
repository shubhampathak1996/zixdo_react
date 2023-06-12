import React from "react";
import Slider from "react-slick";
import Breadcrum from "../../components/breadcrum/Breadcrum";
import ProductCard from "../../components/product/ProductCard";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { Formik, Form } from "formik";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {
  TextInput,
  SelectBox,
  CheckBox,
  TextArea,
} from "../../components/Form/Form";
import {
  useSingleProduct,
  useSingleProductBySlug,
} from "../../shared/hooks/UseProduct";
import { URI } from "../../domain/constant";
import { useState } from "react";
import { useEffect } from "react";
import Gallery from "../../components/single-product/Gallery";
import renderHTML from "react-render-html";
import * as qs from "qs";
import { useHistory, useLocation } from "react-router";
import VariationOption from "../../components/single-product/VariationOption";
import GiveRating from "../../components/rating/GiveRating";
import ProductPrice from "../../components/single-product/ProductPrice";
import VariationProductPrice from "../../components/single-product/VariationProductPrice";
import VariableProductTitle from "../../components/single-product/VariableProductTitle";
import ProductTitle from "../../components/single-product/ProductTitle";
import {
  useAddToWishlist,
  useCheckInWishlist,
} from "../../shared/hooks/UseWishlist";
import {
  useAddToCart,
  useCheckInCart,
  useDecreaseQuantity,
} from "../../shared/hooks/UseCart";
import { useCreateReview } from "../../shared/hooks/UseReview";
import CartComponent from "../../components/cart/CartComponent";

function Single_shop({ match }) {
  const history = useHistory();
  const location = useLocation();
  const [reviewData, addReview] = useCreateReview();
  const queryParams = qs.parse(window.location.search.replace("?", ""));
  var Single_shop = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,

    slidesToScroll: 1,
    centerPadding: "10px",
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
  // console.log("QS", queryParams);

  const [data] = useSingleProductBySlug(match.params.slug);
  const { product, product_loading } = data;
  const [activeImage, setActiveImage] = useState(null);
  const [activeMedia, setActiveMedia] = useState(null);

  const [activeVariation, setActiveVariation] = useState(
    queryParams.variation ? queryParams.variation : null
  );
  const [activeVariantVersion, setActiveVariantVersion] = useState(null);

  useEffect(() => {
    if (product) {
      if (!product.is_variable_product || !product.variations) {
        if (product && product.media) {
          setActiveMedia(product.media);
          setActiveImage(product.media[0]);
        }
      } else {
        if (activeVariation) {
          let filteredOptions = product.variations.filter(
            (item) => item._id == activeVariation
          );
          if (filteredOptions.length == 0) {
            setActiveVariation(filteredOptions[0]._id);
            setActiveVariantVersion(filteredOptions[0]);
          }
        } else {
          // setActiveVariation(product.variations[0]._id);
          // setActiveVariantVersion(product.variations[0]);
          setActiveMedia(product.media);
          setActiveImage(product.media[0]);
        }
      }
    }
  }, [product, activeVariation]);
  useEffect(() => {
    if (product) {
      setActiveVariation(queryParams.variation);
    }
  }, [queryParams.variation]);

  useEffect(() => {
    if (activeVariation && product && product.variations) {
      let selectedVariant = product.variations.filter(
        (item) => item._id == activeVariation
      );
      if (selectedVariant.length > 0) {
        setActiveVariantVersion(selectedVariant[0]);
        if (selectedVariant[0].media && selectedVariant[0].media.length > 0) {
          setActiveMedia(selectedVariant[0].media);
          setActiveImage(selectedVariant[0].media[0]);
        } else {
          setActiveMedia(product.media);
          setActiveImage(product.media[0]);
        }
      }
    }
  }, [activeVariation, product]);

  const checkExistence = ({ array, label, value }) => {
    if (array && label && value) {
      const filterData = array.options.filter(
        (item) => item.label == label && value == item.value
      );
      if (filterData && filterData.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  };

  const handleVariationChange = ({ label, value }) => {
    if (
      product.variations &&
      product.variations.length > 0 &&
      activeVariantVersion &&
      activeVariantVersion.options
    ) {
      const newVariationToMap = activeVariantVersion.options.map((item) => {
        if (item.label == label) {
          return {
            label: label,
            value: value,
          };
        } else {
          return {
            label: item.label,
            value: item.value,
          };
        }
      });
      // console.log("NEW VARIATION", newVariationToMap);
      const newVariationProductsMap = product.variations.map((item) => {
        let newAllOptions = item.options.map((newItem) => {
          return {
            label: newItem.label,
            value: newItem.value,
          };
        });
        item.options = newAllOptions;
        return item;
      });
      console.log("NEW VARIATION PRODUCTS", newVariationProductsMap);

      let finalFilterProductVariation = newVariationProductsMap.filter((item) =>
        isEqual(item.options, newVariationToMap)
      );
      // console.log("FInal Product Variation", finalFilterProductVariation);
      if (
        finalFilterProductVariation &&
        finalFilterProductVariation.length > 0
      ) {
        let queryParams = { variation: finalFilterProductVariation[0]._id };
        const query = qs.stringify(queryParams, {
          encodeValuesOnly: true,
        });
        history.push(`${location.pathname}?${query}`);
      }
    } else {
      if (product.variations && product.variations.length) {
        console.log(label, value, product);
        const newVariationProductsMap = product.variations.map((item) => {
          let newAllOptions = item.options.map((newItem) => {
            return {
              label: newItem.label,
              value: newItem.value,
            };
          });
          item.options = newAllOptions;
          return item;
        });

        let finalFilterProductVariation = newVariationProductsMap.filter(
          (item) =>
            item.options &&
            item.options[0] &&
            item.options[0].label == label &&
            item.options[0].value == value
        );
        console.log("finalFilterProductVariation", finalFilterProductVariation);

        let queryParams = { variation: finalFilterProductVariation[0]._id };
        const query = qs.stringify(queryParams, {
          encodeValuesOnly: true,
        });
        history.push(`${location.pathname}?${query}`);
      }
    }
  };

  const isEqual = (value, other) => {
    var type = Object.prototype.toString.call(value);

    if (type !== Object.prototype.toString.call(other)) return false;

    if (["[object Array]", "[object Object]"].indexOf(type) < 0) return false;

    var valueLen =
      type === "[object Array]" ? value.length : Object.keys(value).length;
    var otherLen =
      type === "[object Array]" ? other.length : Object.keys(other).length;
    if (valueLen !== otherLen) return false;

    var compare = function (item1, item2) {
      var itemType = Object.prototype.toString.call(item1);

      if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
        if (!isEqual(item1, item2)) return false;
      } else {
        if (itemType !== Object.prototype.toString.call(item2)) return false;

        if (itemType === "[object Function]") {
          if (item1.toString() !== item2.toString()) return false;
        } else {
          if (item1 !== item2) return false;
        }
      }
    };

    if (type === "[object Array]") {
      for (var i = 0; i < valueLen; i++) {
        if (compare(value[i], other[i]) === false) return false;
      }
    } else {
      for (var key in value) {
        if (value.hasOwnProperty(key)) {
          if (compare(value[key], other[key]) === false) return false;
        }
      }
    }

    return true;
  };
  const [wishlist, addToWishlist] = useAddToWishlist();
  const [productInWishlist] = useCheckInWishlist(product);
  const [productInCart] = useCheckInCart(product);
  const [cart, addData] = useAddToCart();
  const [decreaseQuantity] = useDecreaseQuantity();

  const addToCart = async (product) => {
    await addData({
      name: product.name,
      product: product._id,
      regular_price: product.regular_price,
      sale_price: product.sale_price,
      slug: product.slug,
      image: product.media && product.media[0],
    });
  };
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    if (product && product.reviews) {
      const mapData = product.reviews.map((item) => Number(item.ratings));
      const averageRatingData =
        mapData.reduce((a, b) => a + b, 0) / product.reviews.length;
      setAverageRating(averageRatingData);
    }
  }, [product]);

  return (
    <>
      <Header />
      {!product_loading ? (
        product && (
          <>
            <div className="product-details-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-5">
                    <Gallery
                      media={activeMedia}
                      activeImage={activeImage}
                      setActiveImage={setActiveImage}
                    />
                  </div>
                  <div className="col-md-7">
                    <div
                      className="product-details-content-area"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      {/* Start  Product Details Text Area*/}
                      <div className="product-details-text">
                        <ProductTitle product={product} />
                        <VariableProductTitle
                          product={product}
                          activeVariantVersion={activeVariantVersion}
                        />
                        <div className="d-flex align-items-center">
                          <Rating
                            initialRating={averageRating}
                            emptySymbol="fa fa-star-o empty mr-3 "
                            fullSymbol="fa fa-star full mr-3  "
                            readonly
                            fractions={2}
                          />

                          <a href className="customer-review">
                            (
                            {product.reviews && product.reviews.length > 0
                              ? `${product.reviews.length} Reviews`
                              : "No Reviews Yet"}{" "}
                            )
                          </a>
                        </div>
                        <ProductPrice product={product} />
                        <VariationProductPrice
                          product={product}
                          activeVariantVersion={activeVariantVersion}
                        />
                        <div
                          className="d-flex flex-wrap-wrap"
                          style={{ gap: "10px", marginBottom: "20px" }}
                        >
                          {product.collections &&
                            product.collections.map((item) => {
                              return (
                                <div
                                  key={item._id}
                                  style={{
                                    background: "#f1f1f1",
                                    padding: "10px 10px",
                                  }}
                                  className="badge"
                                >
                                  <Link to={`/collections/${item.slug}`}>
                                    {" "}
                                    {item.name}{" "}
                                  </Link>
                                </div>
                              );
                            })}
                        </div>

                        <VariationOption
                          product={product}
                          activeVariantVersion={activeVariantVersion}
                          handleVariationChange={handleVariationChange}
                          checkExistence={checkExistence}
                        />

                        {/* <div className="single-add-buy-flex">
                        <div className="product-buy-it-now-btn">
                          <div className="product-add-to-cart-btn">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#modalAddcart"
                            >
                              Buy It Now
                            </a>
                          </div>
                        </div>
                        <div className="single-buy-add">
                          <div className="product-add-to-cart-btn">
                            <a
                              href="#"
                              data-bs-toggle="modal"
                              data-bs-target="#modalAddcart"
                            >
                              Add To Cart
                            </a>
                          </div>
                        </div>
                      </div> */}
                        <div
                          className="single-add-buy-flex "
                          style={{ marginBottom: "10px" }}
                        >
                          {/* {productInCart ? (
                            <>
                              <div className="product-buy-it-now-btn">
                                <div className="d-flex align-items-center">
                                  <div>
                                    <button
                                      className="btn btn-increase-quantity"
                                      onClick={() =>
                                        decreaseQuantity(product.slug)
                                      }
                                    >
                                      {" "}
                                      <i className="fa fa-minus"></i>{" "}
                                    </button>{" "}
                                  </div>
                                  <div>
                                    <div className="quantity">
                                      {productInCart.quantity}
                                    </div>
                                  </div>
                                  <div>
                                    <button
                                      className="btn btn-increase-quantity"
                                      onClick={() => addToCart(product)}
                                    >
                                      {" "}
                                      <i className="fa fa-plus"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="product-buy-it-now-btn">
                                <Link
                                  className="btn btn-add"
                                  style={{
                                    background: "#6DA34D",
                                    color: "#fff",
                                  }}
                                  // onClick={() => addToCart(product)}
                                  to={"/cart"}
                                >
                                  <i className="fa fa-check-circle"></i> View
                                  Cart
                                </Link>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="product-buy-it-now-btn">
                                <div className="product-add-to-cart-btn">
                                  <a className="btn btn-buy">Buy Now</a>
                                </div>
                              </div>
                              <div className="single-buy-add">
                                <div className="product-add-to-cart-btn">
                                  <a
                                    className="btn btn-add"
                                    onClick={() => addToCart(product)}
                                  >
                                    Add To Cart
                                  </a>
                                </div>
                              </div>
                            </>
                          )} */}
                          <CartComponent
                            product={product}
                            activeVariantVersion={activeVariantVersion}
                          />
                        </div>

                        <div className="service-promo-wrapper">
                          <div className="row">
                            <div className="col-lg-4 col-md-6">
                              {/* Start Service Promo Single Item */}
                              <div
                                className="service-promo-single-item aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={0}
                              >
                                <div className="service-promo-icon">
                                  <img src="/assets/images/icon/secure.png" />
                                </div>
                                <div className="service-promo-content">
                                  <h6>100% Secure Payment</h6>
                                </div>
                              </div>
                              {/* End Service Promo Single Item */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                              {/* Start Service Promo Single Item */}
                              <div
                                className="service-promo-single-item aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={0}
                              >
                                <div className="service-promo-icon">
                                  <img src="/assets/images/icon/customer-support.png" />
                                </div>
                                <div className="service-promo-content">
                                  <h6>Customer Support</h6>
                                </div>
                              </div>
                              {/* End Service Promo Single Item */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                              {/* Start Service Promo Single Item */}
                              <div
                                className="service-promo-single-item aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay={0}
                              >
                                <div className="service-promo-icon">
                                  <img src="/assets/images/icon/support-icons.png" />
                                </div>
                                <div className="service-promo-content">
                                  <h6>Trusted Razorpay</h6>
                                </div>
                              </div>
                              {/* End Service Promo Single Item */}
                            </div>
                          </div>
                        </div>
                        <div className="product-description">
                          {product.description &&
                            renderHTML(product.description)}
                        </div>
                      </div>

                      {/* End  Product Details Social Area*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-details-content-tab-section section-inner-bg section-top-gap-100">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div
                      className="product-details-content-tab-wrapper"
                      data-aos="fade-up"
                      data-aos-delay={0}
                    >
                      {/* Start Product Details Tab Button */}
                      <ul className="nav tablist product-details-content-tab-btn d-flex justify-content-center">
                        {/* <li>
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#specification"
                    >
                      <h5>Specification</h5>
                    </a>
                  </li> */}
                        <li>
                          <a
                            className="nav-link"
                            data-bs-toggle="tab"
                            href="#review"
                          >
                            <h5>Write A Review!</h5>
                          </a>
                        </li>
                      </ul>
                      {/* End Product Details Tab Button */}
                      {/* Start Product Details Tab Content */}
                      <div className="product-details-content-tab">
                        <div className="single-tab-content-item">
                          {/* Start - Review Comment */}
                          <ul className="comment">
                            {product.reviews &&
                              product.reviews.map((item) => {
                                return <GiveRating review={item} />;
                              })}
                          </ul>
                          {/* End - Review Comment */}
                          <div className="review-form">
                            <div className="review-form-text-top">
                              <h5>ADD A REVIEW</h5>
                            </div>
                            <Formik
                              initialValues={{
                                name: "",
                                email: "",
                                message: "",
                                ratings: "",
                              }}
                              validationSchema={Yup.object({
                                name: Yup.string().required("Required"),
                                email: Yup.string().required("Required"),
                                message: Yup.string().required("Required"),
                                ratings: Yup.string().required("Required"),
                              })}
                              onSubmit={async (
                                values,
                                { setSubmitting, resetForm }
                              ) => {
                                setSubmitting(true);
                                values.product = product._id;
                                console.log("REVIEW", values);
                                await addReview(values);
                                resetForm();
                                setSubmitting(false);
                              }}
                            >
                              {(formik) => {
                                console.log(formik);
                                return (
                                  <Form>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="default-form-box mb-20">
                                          <TextInput
                                            label=" Your name "
                                            name="name"
                                            type="text"
                                            placeholder="Enter your name"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="default-form-box mb-20">
                                          <TextInput
                                            label=" Your Email *"
                                            name="email"
                                            type="email"
                                            placeholder="Enter your email"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-12 rat">
                                        <Rating
                                          initialRating={formik.values.ratings}
                                          emptySymbol="fa fa-star-o fa-2x full mr-3"
                                          fullSymbol="fa fa-star fa-2x full mr-3"
                                          fractions={2}
                                          onChange={(value) => {
                                            formik.setFieldValue(
                                              "ratings",
                                              value
                                            );
                                          }}
                                        />
                                      </div>
                                      <div className="col-12">
                                        <div className="default-form-box mb-20">
                                          <label htmlFor="comment-review-text">
                                            Your review <span>*</span>
                                          </label>
                                          <TextArea
                                            placeholder="Write a review"
                                            name="message"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-12">
                                        <button
                                          className="form-submit-btn"
                                          type="submit"
                                        >
                                          Submit
                                        </button>
                                      </div>
                                    </div>
                                  </Form>
                                );
                              }}
                            </Formik>
                          </div>
                        </div>
                      </div>
                      {/* End Product Details Tab Content */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      ) : (
        <div></div>
      )}

      <div className="product-section section-top-gap-100">
        {/* Start Section Content */}
        <div className="section-content-gap">
          <div className="container">
            <div className="row">
              <div className="section-content">
                <h3
                  className="section-title"
                  data-aos="fade-up"
                  data-aos-delay={0}
                >
                  Related Products
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* End Section Content */}
        {/* Start Product Wrapper */}
        <div
          className="product-wrapper"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Slider {...Single_shop}>
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </Slider>
              </div>
            </div>
          </div>
        </div>
        {/* End Product Wrapper */}
      </div>

      <Footer />
    </>
  );
}

export default Single_shop;
