import React from "react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const Refund = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center mt-4 mb-4">
                Refunds and Cancellations
              </h3>
              <div className="cancellation-content">
                <h4>Terms And Conditions:</h4>
                <p>
                  Zixdo provides very transparent services with its Private
                  Policy- Terms and Conditions pertaining to personal
                  information, booking, rescheduling, cancellation, refund and
                  others. Once customers choose our services, they need to agree
                  to the collection and use of information with this policy.
                </p>
                <h5>Personal Information:</h5>
                <p>
                  Zixdo collects personal information to provide and improve of
                  the service. Information provided by the customers is not
                  shared with anyone. Hence the data is secured.
                </p>
                <h5>Booking & Rescheduling:</h5>
                <p>
                  Once booked for service, customers can reschedule the order. A
                  new time slot will be provided according to availability. In
                  case of rescheduling, the customer has to inform at least 2
                  hours before the scheduled time. There may be some surcharge
                  if rescheduling is not done within the prescribed time. The
                  customer will not be allowed to reschedule the order if the
                  scheduled time of booking is less than 60 minutes from the
                  time of cancelling or rescheduling. In such cases, the
                  customer will have to pay the full-service charge.
                </p>
                <h5>Cancellation:</h5>
                <p>
                  In case Zixdo receive a cancellation notice from the customer
                  and the service has not been delivered by us, we will be
                  cancelling the order.
                </p>
                <h5>Refund Policy:</h5>
                <p className="mb-5">
                  In case of cancellation as per terms, the entire amount will
                  be refunded to the customer within 7 working days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Refund;
