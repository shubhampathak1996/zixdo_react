import React from 'react';
import AlphabeticalSearch from './AlphabeticalSearch';
import OurCenterTopPage from './OurCenterTopPage';
import TestimonialSectionComponent from '../testimonial-box/TestimonialSectionComponent';
import  Skeleton  from 'react-loading-skeleton';

function OurCenterComponent({ setText, text, centers, centers_loading }) {
  return (
    <>
      <OurCenterTopPage />
      {centers_loading ? (
       
           <div className="row">
                               <div className="col-md-6">
                                 <Skeleton height={250} />
                               </div>
                               <div className="col-md-6">
                                 <Skeleton height={250} />
                               </div>
                               <div className="col-md-6">
                                 <Skeleton height={250} />
                               </div>
                               <div className="col-md-6">
                                 <Skeleton height={250} />
                               </div>
        </div>
      ) : (
<AlphabeticalSearch setText={setText} text={text} centers={centers} />
      )}
      
      <TestimonialSectionComponent />
    </>
  );
}

export default OurCenterComponent;
