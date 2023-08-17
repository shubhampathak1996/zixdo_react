import React, { useEffect } from 'react';
import PinCodeCenters from '../our-centers/PinCodeCenters';
import { UseLat } from '../../shared/hooks/UseApi';

export const SingleStoreNearby = ({ pincode }) => {
  const { getCentres, centres_loading, centres } = UseLat();

  useEffect(() => {
    if (pincode && pincode.length === 6) {
      getCentres({ zip: pincode });
    }
  }, [pincode]);
  return (
    <div>
      <PinCodeCenters centers={centres} />
    </div>
  );
};
