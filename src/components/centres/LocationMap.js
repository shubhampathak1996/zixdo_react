import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent({ latitude, longitude }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCle6FyJZp_URUl8SngM97nT59lHRzjQv4',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    if (latitude && longitude) {
      const bounds = new window.google.maps.LatLngBounds({
        lat: latitude,
        lng: longitude,
      });
      map.fitBounds(bounds);

      setMap(map);
    }
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <>
      {latitude && longitude && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat: latitude,
            lng: longitude,
          }}
          zoom={18}
          // onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <Marker
            position={{
              lat: latitude,
              lng: longitude,
            }}
          ></Marker>
        </GoogleMap>
      )}
    </>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
