import React from 'react';
import AlphabeticalSearch from './AlphabeticalSearch';
import OurCenterTopPage from './OurCenterTopPage';
import TestimonialSectionComponent from '../testimonial-box/TestimonialSectionComponent';

function OurCenterComponent({ setText, text, centers, centers_loading }) {
  return (
    <>
      <OurCenterTopPage />
      <AlphabeticalSearch setText={setText} text={text} centers={centers} />
      <TestimonialSectionComponent />
    </>
  );
}

export default OurCenterComponent;
