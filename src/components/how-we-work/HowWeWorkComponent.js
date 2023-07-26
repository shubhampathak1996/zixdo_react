import React from 'react';
import BookServiceCard from './BookServiceCard';
import { useState } from 'react';

function HowWeWorkComponent() {
  const [activeTab, setActiveTab] = useState('onetime');
  return (
    <div>
      <section className="how-we-work-section ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="how-we-work-section-heading">
                <h3>How it works at Zixdo.</h3>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur. Non nulla ultrices
                  rhoncus morbi elementum nisi sed.
                </p> */}
              </div>
            </div>
          </div>

          <div className="row ptb-30">
            <div className="col-md-12">
              <div className="how-we-work-wrapper">
                <div className="work-buttons">
                  <div
                    onClick={() => {
                      setActiveTab('onetime');
                    }}
                  >
                    <a href className="btn-main">
                      One Time Bookings Fresh or one time user
                    </a>
                  </div>
                  <div
                    onClick={() => {
                      setActiveTab('subscription');
                    }}
                  >
                    <a href className="btn-secondary">
                      Subscription Booking Annual or monthly subscription.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: activeTab === 'onetime' ? 'block' : 'none' }}>
            <div className="row ptb-30">
              <div className="col-md-4">
                <BookServiceCard
                  paragraph={
                    'View prices upfront and book appointment online or on call.'
                  }
                  heading={'Book Your Service'}
                  icon={'assets/images/calendar_1.png'}
                />
              </div>
              <div className="col-md-4">
                <BookServiceCard
                  paragraph={
                    'Relax! Our expert will shine your vehicle at your comfort zone within 30-60 minutes.'
                  }
                  heading={'Visit And Shine'}
                  icon={'assets/images/shine_1.png'}
                />
              </div>
              <div className="col-md-4">
                <BookServiceCard
                  paragraph={
                    'Check the vehicle & pay. Yes! Do not forget to grab a reflective sticker and get 10% off*.'
                  }
                  heading={'Payments'}
                  icon={'assets/images/payment_1.png'}
                />
              </div>
            </div>
          </div>
          {/* another service */}
          <div
            style={{ display: activeTab === 'subscription' ? 'block' : 'none' }}
          >
            <div className="row ptb-30">
              <div className="col-md-4">
                <BookServiceCard
                  paragraph={
                    'Get best custom subscription for your vehicle or Call us to know more.'
                  }
                  heading={'View Subscription plan'}
                  icon={'assets/images/calendar_1.png'}
                />
              </div>
              <div className="col-md-4">
                <BookServiceCard
                  paragraph={'Get your vehicle registered with us & Pay.'}
                  heading={'Register Your Vehicle'}
                  icon={'assets/images/payment_1.png'}
                />
              </div>
              <div className="col-md-4">
                <BookServiceCard
                  paragraph={
                    'Relax! Our expert will shine your vehicle as per subscription.EASY!!'
                  }
                  heading={'Visit & Shine'}
                  icon={'assets/images/shine_1.png'}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowWeWorkComponent;
