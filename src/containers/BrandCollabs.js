import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import BrandCollabsComponent from '../components/brandcollabs/BrandCollabsComponent';
import PartnerComponent from '../components/parnter-section/PartnerComponent';
import MainServiceComponent from '../components/main-service/MainServiceComponent';
import WhyChooseUs from '../components/brandcollabs/WhyChooseUs';
import TestimonialSectionComponent from '../components/testimonial-box/TestimonialSectionComponent';
import ReachCollab from '../components/brandcollabs/ReachCollab';

function BrandCollabs() {
  return (
    <>
      <Header />
      <BrandCollabsComponent />
      <PartnerComponent />
      <MainServiceComponent />
      <WhyChooseUs />
      <ReachCollab />
      <TestimonialSectionComponent />
      <Footer />
    </>
  );
}

export default BrandCollabs;
