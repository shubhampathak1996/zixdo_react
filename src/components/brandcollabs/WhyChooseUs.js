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
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur. Non nulla ultrices
                  rhoncus morbi elementum nisi sed.
                </p> */}
              </div>
            </div>
          </div>
          <div className="row ptb-30">
            <div className="col-md-4">
              <BookServiceCard
                icon={'/assets/images/calendar_1.png'}
                heading={'1 Year Warranty'}
                paragraph={
                  'In the world of customer-centric services, positive approach and optimism are our key values. These core values transcend us to an era of stress-free solutions to our customers and business associates.'
                }
              />
            </div>
            <div className="col-md-4">
              <BookServiceCard
                icon={'/assets/images/calendar_1.png'}
                heading={'Low Price Guarantee'}
                paragraph={
                  'Quality constitutes our core values and it is the main driving force for us. Quality comes with professional expertise combined with the latest tools and technology. Our employees have inculcated this value.'
                }
              />
            </div>
            <div className="col-md-4">
              <BookServiceCard
                icon={'/assets/images/calendar_1.png'}
                heading={'We are Here for You'}
                paragraph={
                  'Customers’ care is yet another core value we have inculcated in true spirit. All our services and solutions accord top priority to customers’ satisfaction. We firmly believe customer care is the key to success.'
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
