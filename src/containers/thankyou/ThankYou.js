import React from "react";
import { Link } from "react-router-dom";
import Breadcrum from "../../components/breadcrum/Breadcrum";
import Footer from "../common/Footer";
import Header from "../common/Header";

function ThankYou() {
  return (
    <div>
      <Header />
      <Breadcrum title={"Thank You"} />
      <section className="ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="thankyou-iamge">
                <img
                  src="/assets/images/thankyou.webp"
                  style={{ borderRadius: 3, width: "100%" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="thankyou-content">
                <h3>Thank you!</h3>
                <p>
                  Congratulations your order has been placed successfully. Check
                  your order status{" "}
                </p>
                <div className="contact-us mt-5 text-center">
                  <Link
                    className="offcanvas-cart-action-button-link"
                    to="/my-account"
                  >
                    View Order
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ThankYou;
