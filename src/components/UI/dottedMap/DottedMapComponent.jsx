import React from 'react';
import DottedMap from 'dotted-map/without-countries';
import MyMapString from './MyMap.js';
import './dottedMap.css'; // Optional: if you have specific CSS for the map

const DottedMapComponent = () => {
  // Recreate the map at each render, it's fast due to pre-computation
  const map = new DottedMap({ map: MyMapString });

  // Add a pin to the map (for example, in New York)
  map.addPin({
    lat: 40.73061,
    lng: -73.935242,
    svgOptions: { color: '#d6ff79', radius: 0.4 },
  });

  // Generate the SVG for the map
  const svgMap = map.getSVG({
    radius: 0.22,
    color: '#D0D5DD',
    shape: 'circle',
    backgroundColor: '#12132A',
  });

  return (
    <div className="dotted-map">
      <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`} alt="Dotted Map" />
    </div>
  );
};

export default DottedMapComponent;