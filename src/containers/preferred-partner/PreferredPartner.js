import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import PreferredPartnerComponent from '../../components/preferred-partner/PreferredPartnerComponent';
import VideoSectionComponent from '../../components/video-section/VideoSectionComponent';
import TestimonialSectionComponent from '../../components/testimonial-box/TestimonialSectionComponent';
import Collobration from '../../components/preferred-partner/Collobration';
import StatsComponent from '../../components/preferred-partner/StatsComponent';

function PreferredPartner() {
  return (
    <div>
      <Header />
      <PreferredPartnerComponent />
      <VideoSectionComponent />

      <Collobration />
      <StatsComponent />
      <TestimonialSectionComponent />
      <Footer />
    </div>
  );
}

export default PreferredPartner;
