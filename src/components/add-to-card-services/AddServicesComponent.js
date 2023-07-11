import React from 'react';

function AddServicesComponent() {
  return (
    <div className='service-card'>
      <div className='service-image'>
        <img src='assets/images/service1 1.png' alt />
      </div>
      <div className='service-content'>
        <div className='service-heading'>{name}</div>
        <ul>
          <li>
            <i className='fa fa-check'></i> Glass Cleaning
          </li>
          <li>
            <i className='fa fa-check'></i> Roof Cleaning
          </li>
          <li>
            <i className='fa fa-check'></i> Exterior Cleaning
          </li>
          <li>
            <i className='fa fa-check'></i> Exterior Wash
          </li>
        </ul>
        <hr></hr>

        <div className='booking-amount-flex'>
          <div className='booking-content'>
            <h2>₹500.00</h2>
          </div>
          <div className='add-button'>
            <button className='btn btn-primary'>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddServicesComponent;
