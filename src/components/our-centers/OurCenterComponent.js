import React from 'react';
import AlphabeticalSearch from './AlphabeticalSearch';
import OurCenterTopPage from './OurCenterTopPage';
import TestimonialSectionComponent from '../testimonial-box/TestimonialSectionComponent';

function OurCenterComponent() {
  return (
    <>
      <OurCenterTopPage />
      <AlphabeticalSearch />
      <TestimonialSectionComponent />
    </>
  );
}

export default OurCenterComponent;
