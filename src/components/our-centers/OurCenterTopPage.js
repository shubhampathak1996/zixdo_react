import React from 'react';

function OurCenterTopPage() {
  return (
    <>
      <section className="page-section location-page-banner sec-50 ">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="location-page-searchbar center">
                <h2>Find Your Store</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Amet quis integer
                  libero sed phasellus. Eget diam fusce lectus suspendisse vel
                  in. Pretium sit penatibus odio non. In tincidunt{' '}
                </p>
                <div className="location-search">
                  <div className="icon-search-flex">
                    <div className>
                      <form>
                        <input
                          type="text"
                          placeholder="Search by zip code, city or state"
                        />
                      </form>
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
