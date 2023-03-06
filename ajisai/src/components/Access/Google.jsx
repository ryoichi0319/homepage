import React from 'react'
import { GoogleMap, Marker, useJsApiLoader,InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 34.77253924696464,
  lng: 135.57612565725168
};
const positionAjisai= {
  lat: 34.77253924696464,
  lng: 135.57612565725168}
  
function MyComponent() {
  const [size, setSize] = useState(undefined);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAP_API
  })
  const infoWindowOptions = {
    pixelOffset: size,
  };
  const createOffsetSize = () => {
    return setSize(new window.google.maps.Size(0, -45));}

  const [map, setMap] = useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        onUnmount={onUnmount}
        onLoad={() => createOffsetSize()}
      >
        <Marker position={positionAjisai} />
        <InfoWindow position={positionAjisai} options={infoWindowOptions}  >
          <p>あじさい物流</p>
        </InfoWindow>

        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)