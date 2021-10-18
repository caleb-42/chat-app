import { Box } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import GoogleMapReact from "google-map-react";
import React, { useEffect, useState } from "react";
import Geocode from "react-geocode";

export const SimpleMap = ({
  address,
  setAddress,
  center = { lat: 59.95, lng: 30.33 },
  zoom = 5,
}) => {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
  Geocode.setApiKey(apiKey);

  // set response language. Defaults to english.
  Geocode.setLanguage("en");

  const [cnt, setCnt] = useState(center);

  useEffect(() => {
    Geocode.fromLatLng(cnt.lat, cnt.lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log(address);
        setAddress({ address, cnt });
      },
      (error) => {
        console.error(error);
        setAddress("failed to get Address");
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cnt]);

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: apiKey }}
      defaultCenter={center}
      defaultZoom={zoom}
      onClick={({ x, y, lat, lng, event }) => {
        setCnt({
          lat: Math.round(lat * 100) / 100,
          lng: Math.round(lng * 100) / 100,
        });
        console.log(x, y, lat, lng, event);
      }}
    >
      <Marker lat={cnt.lat} lng={cnt.lng} text={address} />
    </GoogleMapReact>
  );
};

const Marker = ({ text }) => (
  <Tooltip label={text} placement="top" isOpen>
    <Box pos="relative">
      <div className="pin"></div>
      <div className="pulse"></div>
    </Box>
  </Tooltip>
);
