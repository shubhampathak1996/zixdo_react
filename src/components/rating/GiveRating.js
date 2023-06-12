import React from "react";
import { Formik, Form } from "formik";
import Rating from "react-rating";
function GiveRating({ review }) {
  return (
    <div>
      <li className="comment-list">
        <div className="comment-wrapper">
          {/* <div className="comment-img">
            <img src="/assets/images/user/image-3.png" alt />
          </div> */}
          <div className="comment-content">
            <div className="comment-content-top">
              <div className="comment-content-left">
                <h6 className="comment-name">{review.name}</h6>
                <div className="product-review">
                  <Rating
                    initialRating={review.ratings}
                    emptySymbol="fa fa-star-o empty mr-3 "
                    fullSymbol="fa fa-star full mr-3  "
                    readonly
                    fractions={2}
                  />
                </div>
              </div>
            </div>
            <div className="para-content">
              <p>{review.message}</p>
            </div>
          </div>
        </div>
        <hr />
      </li>
    </div>
  );
}

export default GiveRating;
