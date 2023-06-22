import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

import SubscriptionPlanComponent from '../../components/subscription/SubscriptionPlanComponent';
import WhyChooseUs from '../../components/brandcollabs/WhyChooseUs';
import WhySectionWhite from '../../components/subscription/WhySectionWhite';
import FeaturesComponent from '../../components/features/FeaturesComponent';
import TestimonialSectionComponent from '../../components/testimonial-box/TestimonialSectionComponent';

function SubscriptionPlan() {
  return (
    <div>
      <Header />
      <SubscriptionPlanComponent />
      <WhyChooseUs />
      <WhySectionWhite />
      <FeaturesComponent />
      <TestimonialSectionComponent />

      <Footer />
    </div>
  );
}

export default SubscriptionPlan;
