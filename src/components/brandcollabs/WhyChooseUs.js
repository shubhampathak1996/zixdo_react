import React from 'react';
import BookServiceCard from '../how-we-work/BookServiceCard';

function WhyChooseUs() {
  return (
    <>
      <section className="how-we-work-section ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="how-we-work-section-heading">
                <h3>Why choose us?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Non nulla ultrices
                  rhoncus morbi elementum nisi sed.
                </p>
              </div>
            </div>
          </div>
          <div className="row ptb-30">
            <div className="col-md-4">
              <BookServiceCard
                icon={'/assets/images/calendar_1.png'}
                heading={'1 Year Warranty'}
                paragraph={
                  'Lorem ipsum dolor sit amet consectetur. Non nulla ultrices rhoncus morbi elementum nisi sed.'
                }
              />
            </div>
            <div className="col-md-4">
              <BookServiceCard
                icon={'/assets/images/calendar_1.png'}
                heading={'Low Price Guarantee'}
                paragraph={
                  'Lorem ipsum dolor sit amet consectetur. Non nulla ultrices rhoncus morbi elementum nisi sed.'
                }
              />
            </div>
            <div className="col-md-4">
              <BookServiceCard
                icon={'/assets/images/calendar_1.png'}
                heading={'We are Here for You'}
                paragraph={
                  'Lorem ipsum dolor sit amet consectetur. Non nulla ultrices rhoncus morbi elementum nisi sed.'
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
