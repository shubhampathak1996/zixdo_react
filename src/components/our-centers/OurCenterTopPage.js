import React from 'react';

function OurCenterTopPage({ pincode, setPincode }) {
  return (
    <>
      <section className='page-section location-page-banner sec-50 '>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 mx-auto'>
              <div className='location-page-searchbar center'>
                <h2>Find Your Store</h2>
                <p>Find Car Cleaning and Shining Service at Your Location</p>
                <div className='location-search'>
                  <div className='icon-search-flex'>
                    <div className>
                      <input
                        type='text'
                        placeholder='Search by zip code, city or state'
                        onChange={(e) => setPincode(e.target.value)}
                        value={pincode}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurCenterTopPage;
