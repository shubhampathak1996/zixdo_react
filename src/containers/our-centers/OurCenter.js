import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import OurCenterComponent from '../../components/our-centers/OurCenterComponent';
import { UseCenterFilter } from '../../shared/hooks/UseFetch';
import { UseLat } from '../../shared/hooks/UseApi';

function OurCenter() {
  const { centers, getCenters, centers_loading } = UseCenterFilter();
  const { getCentres, centres_loading, centres } = UseLat();
  const [text, setText] = useState('A');
  const [pincode, setPincode] = useState(null);
  useEffect(() => {
    if (text) {
      getCenters({ text });
    }
  }, [text]);
  useEffect(() => {
    if (pincode && pincode.length === 6) {
      getCentres({ zip: pincode });
    }
  }, [pincode]);
  return (
    <>
      <Header />
      <OurCenterComponent
        setText={setText}
        text={text}
        centers={centers}
        centers_loading={centers_loading}
        pincode={pincode}
        setPincode={setPincode}
        pin_code_centres={centres}
        pin_code_centre_loading={centres_loading}
      />
      <Footer />
    </>
  );
}

export default OurCenter;
