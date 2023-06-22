import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BannerComponent from '../../components/bannersection/BannerComponent';
import FeaturesComponent from '../../components/features/FeaturesComponent';

import HowWeWorkComponent from '../../components/how-we-work/HowWeWorkComponent';
import BecomeServicePartnerComponent from '../../components/become-service/BecomeServicePartnerComponent';
import ServiceSectionComponent from '../../components/service-section/ServiceSectionComponent';
import PartnerComponent from '../../components/parnter-section/PartnerComponent';
import MainServiceComponent from '../../components/main-service/MainServiceComponent';
import VideoSectionComponent from '../../components/video-section/VideoSectionComponent';
import TestimonialSectionComponent from '../../components/testimonial-box/TestimonialSectionComponent';

function Home() {
  return (
    <div>
      <Header />
      <BannerComponent />
      <FeaturesComponent />
      <ServiceSectionComponent />
      <BecomeServicePartnerComponent />
      <HowWeWorkComponent />
      <PartnerComponent />
      <MainServiceComponent />
      <VideoSectionComponent />
      <TestimonialSectionComponent />
      <Footer />
    </div>
  );
}

export default Home;
