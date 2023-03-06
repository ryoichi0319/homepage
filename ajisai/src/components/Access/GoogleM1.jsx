import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const GoogleM1 = () => {
  const mapStyles = {
  height: "100%",
  width: "100%"
};

const defaultCenter = {
  lat: 41.3851, lng: 2.1734
}
const locations = [
  {
      name: "Location 1",
      location: {
          lat: 41.3954,
          lng: 2.162
      },
  },
  {
      name: "Location 2",
      location: {
          lat: 41.3917,
          lng: 2.1649
      },
  },
];
return (
  <div className='map'>
  <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLEMAP_API}>
      <GoogleMap 
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}>
                {
                    locations.map(item => {
                        return (
                            <Marker key={item.name} position={item.location} />
                        )
                    })
                }
            </GoogleMap>
  </LoadScript>
  </div>
)
}

export default GoogleM1