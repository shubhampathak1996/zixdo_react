import React, { useEffect, useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import OurCenterComponent from '../../components/our-centers/OurCenterComponent';
import { UseCenterFilter } from '../../shared/hooks/UseFetch';

function OurCenter() {
  const { centers, getCenters, centers_loading } = UseCenterFilter();
  const [text, setText] = useState("A");
  useEffect(() => {
    if (text) {
      getCenters({ text });
    }
  }, [text]);

  return (
    <>
      <Header />
      <OurCenterComponent
        setText={setText}
        text={text}
        centers={centers}
        centers_loading={centers_loading}
      />
      <Footer />
    </>
  );
}

export default OurCenter;
