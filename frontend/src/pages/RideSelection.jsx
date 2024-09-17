// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Popup,
//   Polyline,
// } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import { useState } from 'react';
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// const GEOAPIFY_API_KEY = 'b81a0261fe1e433bba84bd8216048977';
// let DefaultIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow,
// });

// L.Marker.prototype.options.icon = DefaultIcon;

// const RideSelection = () => {
//   const [position, setPosition] = useState([26.8854284, 80.99749539150943]);
//   const [secondPosition, setSecondPosition] = useState([
//     26.8854284, 80.99749539150943,
//   ]);
//   const [locationInput, setLocationInput] = useState('');
//   const [destinationInput, setDestinationInput] = useState('');
//   const [locationSuggestions, setLocationSuggestions] = useState([]);
//   const [destinationSuggestions, setDestinationSuggestions] = useState([]);
//   const [route, setRoute] = useState([]); // Store the route polyline
//   const [distance, setDistance] = useState(null); // Store the distance between two points

//   // Fetch suggestions from Geoapify Autocomplete API for location
//   const fetchLocationSuggestions = async (input) => {
//     if (input.length > 2) {
//       const response = await fetch(
//         `https://api.geoapify.com/v1/geocode/autocomplete?text=${input}&apiKey=${GEOAPIFY_API_KEY}`,
//       );
//       const data = await response.json();
//       setLocationSuggestions(data.features);
//     } else {
//       setLocationSuggestions([]);
//     }
//   };

//   // Fetch suggestions from Geoapify Autocomplete API for destination
//   const fetchDestinationSuggestions = async (input) => {
//     if (input.length > 2) {
//       const response = await fetch(
//         `https://api.geoapify.com/v1/geocode/autocomplete?text=${input}&apiKey=${GEOAPIFY_API_KEY}`,
//       );
//       const data = await response.json();
//       setDestinationSuggestions(data.features);
//     } else {
//       setDestinationSuggestions([]);
//     }
//   };

//   // Fetch route between two locations from Geoapify Routing API
//   const fetchRoute = async () => {
//     const response = await fetch(
//       `https://api.geoapify.com/v1/routing?waypoints=${position[0]},${position[1]}|${secondPosition[0]},${secondPosition[1]}&mode=drive&apiKey=${GEOAPIFY_API_KEY}`,
//     );
//     const data = await response.json();
//     const routeCoords = data.features[0].geometry.coordinates.map((coord) => [
//       coord[1],
//       coord[0],
//     ]); // Convert to [lat, lon] format
//     setRoute(routeCoords); // Set the polyline route
//     setDistance(data.features[0].properties.distance / 1000); // Distance in kilometers
//   };

//   return (
//     <div className="w-full min-h-screen p-10 flex flex-row justify-between">
//       <div className="border w-[20vw] bg-gray-50 h-[85vh]">
//         <div className="flex flex-col items-center mt-12">
//           <span className="w-full lg:w-[16vw] text-gray-500 italic pl-2 underline">
//             Find your perfect route and start your journey with ease!
//           </span>

//           <div className="relative flex flex-col gap-4 mt-5 items-center lg:items-start">
//             {/* Enter Location */}
//             <div className="flex items-center gap-3 text-black border w-full lg:w-[16vw] px-4 py-2 bg-white relative">
//               <div className="w-3 h-3 border-2 border-black rounded-full"></div>
//               <input
//                 type="text"
//                 placeholder="Enter location"
//                 value={locationInput}
//                 onChange={(e) => {
//                   setLocationInput(e.target.value);
//                   fetchLocationSuggestions(e.target.value);
//                 }}
//                 className="flex-1 focus:outline-none border-0"
//               />
//               <i className="fa-solid fa-paper-plane"></i>

//               {/* Autocomplete suggestions dropdown */}
//               {locationSuggestions.length > 0 && (
//                 <div className="absolute top-[45px] left-0 w-full bg-white shadow-lg z-10">
//                   {locationSuggestions.map((suggestion) => (
//                     <div
//                       key={suggestion.properties.formatted}
//                       className="p-2 hover:bg-gray-100 cursor-pointer"
//                       onClick={() => {
//                         setPosition([
//                           suggestion.properties.lat,
//                           suggestion.properties.lon,
//                         ]);
//                         setLocationInput(suggestion.properties.formatted);
//                         setLocationSuggestions([]);
//                       }}
//                     >
//                       {suggestion.properties.formatted}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Enter Destination */}
//             <div className="flex items-center gap-3 text-black border w-full lg:w-[16vw] px-4 py-2 bg-white relative">
//               <div className="w-3 h-3 border-2 border-black bg-black rounded-full"></div>
//               <input
//                 type="text"
//                 placeholder="Enter destination"
//                 value={destinationInput}
//                 onChange={(e) => {
//                   setDestinationInput(e.target.value);
//                   fetchDestinationSuggestions(e.target.value);
//                 }}
//                 className="flex-1 focus:outline-none"
//               />
//               <i className="fa-solid fa-map-pin"></i>

//               {/* Autocomplete suggestions dropdown */}
//               {destinationSuggestions.length > 0 && (
//                 <div className="absolute top-[45px] left-0 w-full bg-white shadow-lg z-10">
//                   {destinationSuggestions.map((suggestion) => (
//                     <div
//                       key={suggestion.properties.formatted}
//                       className="p-2 hover:bg-gray-100 cursor-pointer"
//                       onClick={() => {
//                         setSecondPosition([
//                           suggestion.properties.lat,
//                           suggestion.properties.lon,
//                         ]);
//                         setDestinationInput(suggestion.properties.formatted);
//                         setDestinationSuggestions([]);
//                       }}
//                     >
//                       {suggestion.properties.formatted}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <button
//               className="border w-full py-2 bg-black text-white hover:bg-gray-600 transition duration-100"
//               onClick={fetchRoute} // Fetch the route when button is clicked
//             >
//               Search Rides
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="border w-[73vw] h-[85vh]">
//         <MapContainer
//           center={position}
//           zoom={13}
//           scrollWheelZoom={false}
//           style={{ height: '100%', width: '100%' }}
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <Marker position={position}>
//             <Popup>
//               Starting Point: {locationInput || 'Selected location'}
//             </Popup>
//           </Marker>
//           <Marker position={secondPosition}>
//             <Popup>
//               Destination: {destinationInput || 'Selected destination'}
//             </Popup>
//           </Marker>

//           {/* Draw the route if available */}
//           {route.length > 0 && <Polyline positions={route} color="blue" />}
//         </MapContainer>

//         {/* Display the distance */}
//         {distance && (
//           <div className="p-4">
//             <p>Distance: {distance.toFixed(2)} km</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RideSelection;

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';

const GEOAPIFY_API_KEY = 'b81a0261fe1e433bba84bd8216048977'; // Add your API key here
let DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

L.Marker.prototype.options.icon = DefaultIcon;

const RideSelection = () => {
  const [position, setPosition] = useState([26.8854284, 80.99749539150943]); // Default position
  const [secondPosition, setSecondPosition] = useState([
    26.8854284, 80.99749539150943,
  ]);
  const [locationInput, setLocationInput] = useState('');
  const [destinationInput, setDestinationInput] = useState('');
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [routeCoordinates, setRouteCoordinates] = useState([]); // To store route coordinates
  const [distance, setDistance] = useState(null);

  // Fetch route between the two points from Geoapify Routing API
  const fetchRoute = async () => {
    if (!position || !secondPosition) return; // Ensure both positions are set

    const response = await fetch(
      `https://api.geoapify.com/v1/routing?waypoints=${position[0]},${position[1]}|${secondPosition[0]},${secondPosition[1]}&mode=drive&apiKey=${GEOAPIFY_API_KEY}`,
    );
    const data = await response.json();
    console.log('data', data.features);

    if (data.features && data.features.length > 0) {
      const coordinates = data.features[0].geometry.coordinates.map((coord) => [
        coord[1],
        coord[0],
      ]); // [lat, lng]
      setRouteCoordinates(coordinates);
      setDistance(data.features[0].properties.distance / 1000);
    }
  };

  const fetchLocationSuggestions = async (input) => {
    if (input.length > 2) {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${input}&apiKey=${GEOAPIFY_API_KEY}`,
      );
      const data = await response.json();
      setLocationSuggestions(data.features);
    } else {
      setLocationSuggestions([]);
    }
  };

  // Fetch suggestions from Geoapify Autocomplete API for destination
  const fetchDestinationSuggestions = async (input) => {
    if (input.length > 2) {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${input}&apiKey=${GEOAPIFY_API_KEY}`,
      );
      const data = await response.json();
      setDestinationSuggestions(data.features);
    } else {
      setDestinationSuggestions([]);
    }
  };

  return (
    <div className="w-full min-h-screen p-10 flex flex-row justify-between">
      <div className="border w-[20vw] bg-gray-50 h-[85vh]">
        <div className="flex flex-col items-center mt-12">
          <span className="w-full lg:w-[16vw] text-gray-500 italic pl-2 underline">
            Find your perfect route and start your journey with ease!
          </span>

          <div className="relative flex flex-col gap-4 mt-5 items-center lg:items-start">
            {/* Enter Location */}
            <div className="flex items-center gap-3 text-black border w-full lg:w-[16vw] px-4 py-2 bg-white relative">
              <div className="w-3 h-3 border-2 border-black rounded-full"></div>
              <input
                type="text"
                placeholder="Enter location"
                value={locationInput}
                onChange={(e) => {
                  setLocationInput(e.target.value);
                  fetchLocationSuggestions(e.target.value);
                }}
                className="flex-1 focus:outline-none border-0"
              />
              <i className="fa-solid fa-paper-plane"></i>

              {/* Autocomplete suggestions dropdown */}
              {locationSuggestions.length > 0 && (
                <div className="absolute top-[45px] left-0 w-full bg-white shadow-lg z-10">
                  {locationSuggestions.map((suggestion) => (
                    <div
                      key={suggestion.properties.formatted}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setPosition([
                          suggestion.properties.lat,
                          suggestion.properties.lon,
                        ]);
                        setLocationInput(suggestion.properties.formatted);
                        setLocationSuggestions([]);
                      }}
                    >
                      {suggestion.properties.formatted}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Enter Destination */}
            <div className="flex items-center gap-3 text-black border w-full lg:w-[16vw] px-4 py-2 bg-white relative">
              <div className="w-3 h-3 border-2 border-black bg-black rounded-full"></div>
              <input
                type="text"
                placeholder="Enter destination"
                value={destinationInput}
                onChange={(e) => {
                  setDestinationInput(e.target.value);
                  fetchDestinationSuggestions(e.target.value);
                }}
                className="flex-1 focus:outline-none"
              />
              <i className="fa-solid fa-map-pin"></i>

              {/* Autocomplete suggestions dropdown */}
              {destinationSuggestions.length > 0 && (
                <div className="absolute top-[45px] left-0 w-full bg-white shadow-lg z-10">
                  {destinationSuggestions.map((suggestion) => (
                    <div
                      key={suggestion.properties.formatted}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSecondPosition([
                          suggestion.properties.lat,
                          suggestion.properties.lon,
                        ]);
                        setDestinationInput(suggestion.properties.formatted);
                        setDestinationSuggestions([]);
                      }}
                    >
                      {suggestion.properties.formatted}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Button to check rides and display route */}
            <button
              onClick={fetchRoute} // Fetch route when clicked
              className="border w-full py-2 bg-black text-white hover:bg-gray-600 transition duration-100"
            >
              Check Rides
            </button>
          </div>
        </div>
      </div>

      <div className="border w-[73vw] h-[85vh]">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Marker for the first position */}
          <Marker position={position}>
            <Popup>
              Starting Point: {locationInput || 'Selected location'}
            </Popup>
          </Marker>

          {/* Marker for the second position */}
          <Marker position={secondPosition}>
            <Popup>
              Destination: {destinationInput || 'Selected destination'}
            </Popup>
          </Marker>

          {/* Polyline for the route */}
          {routeCoordinates.length > 0 && (
            <Polyline positions={routeCoordinates} color="blue" />
          )}
        </MapContainer>
        {distance && (
          <div className="p-4">
            <p>Distance: {distance.toFixed(2)} km</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RideSelection;
