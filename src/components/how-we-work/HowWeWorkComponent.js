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
                <h3>How we works</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Non nulla ultrices
                  rhoncus morbi elementum nisi sed.
                </p>
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
                    'Lorem ipsum dolor sit amet consectetur. Lectus laoreet ut egestas fames eu aliquam eget id. At viverra amet'
                  }
                  heading={'Book Your Service'}
                  icon={'assets/images/calendar_1.png'}
                />
              </div>
              <div className="col-md-4">
                <BookServiceCard
                  paragraph={
                    'Lorem ipsum dolor sit amet consectetur. Lectus laoreet ut egestas fames eu aliquam eget id. At viverra amet'
                  }
                  heading={'Visit And Shine'}
                  icon={'assets/images/shine_1.png'}
                />
              </div>
              <div className="col-md-4">
                <BookServiceCard
                  paragraph={
                    'Lorem ipsum dolor sit amet consectetur. Lectus laoreet ut egestas fames eu aliquam eget id. At viverra amet'
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
                    'Lorem ipsum dolor sit amet consectetur. Lectus laoreet ut egestas fames eu aliquam eget id. At viverra amet'
                  }
                  heading={'hello this is the'}
                  icon={'assets/images/calendar_1.png'}
                />
              </div>
              <div className="col-md-4">
                <BookServiceCard
                  paragraph={
                    'Lorem ipsum dolor sit amet consectetur. Lectus laoreet ut egestas fames eu aliquam eget id. At viverra amet'
                  }
                  heading={'hello this is the '}
                  icon={'assets/images/shine_1.png'}
                />
              </div>
              <div className="col-md-4">
                <BookServiceCard
                  paragraph={
                    'Lorem ipsum dolor sit amet consectetur. Lectus laoreet ut egestas fames eu aliquam eget id. At viverra amet'
                  }
                  heading={'hello this is the '}
                  icon={'assets/images/payment_1.png'}
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
