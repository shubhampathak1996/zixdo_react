import React from 'react';

function BookServiceCard({ icon, heading, paragraph }) {
  return (
    <>
      <div className="book-service-card">
        <div className="service-icon">
          <img src={icon} alt />
          {/* <img src="assets/images/calendar_1.png" alt /> */}
        </div>
        <div className="service-card-heading">{heading}</div>
        <div className="service-card-content">{paragraph}</div>
      </div>
    </>
  );
}

export default BookServiceCard;
