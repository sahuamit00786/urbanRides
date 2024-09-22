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
// const GEOAPIFY_API_KEY = 'b81a0261fe1e433bba84bd8216048977';
// let DefaultIcon = L.icon({
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
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
//   const [routeCoordinates, setRouteCoordinates] = useState([]);
//   const [distance, setDistance] = useState(null);

//   const fromHome = JSON.parse(localStorage.getItem('location'));
//   const { first, second } = fromHome;

//   const fetchRoute = async () => {
//     if (!position || !secondPosition) return;

//     const response = await fetch(
//       `https://api.geoapify.com/v1/routing?waypoints=${position[0]},${position[1]}|${secondPosition[0]},${secondPosition[1]}&mode=drive&apiKey=${GEOAPIFY_API_KEY}`,
//     );
//     const data = await response.json();
//     console.log('data', data.features);

//     if (data.features && data.features.length > 0) {
//       const coordinates = data.features[0].geometry.coordinates.map((coord) => [
//         coord[1],
//         coord[0],
//       ]); // [lat, lng]
//       setRouteCoordinates(coordinates);
//       setDistance(data.features[0].properties.distance / 1000);
//     }
//   };

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
//                 value={first || locationInput}
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
//                 value={second || destinationInput}
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
//               onClick={fetchRoute} // Fetch route when clicked
//               className="border w-full py-2 bg-black text-white hover:bg-gray-600 transition duration-100"
//             >
//               Check Rides
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
//           {/* Marker for the first position */}
//           <Marker position={position}>
//             <Popup>
//               Starting Point: {locationInput || 'Selected location'}
//             </Popup>
//           </Marker>

//           {/* Marker for the second position */}
//           <Marker position={secondPosition}>
//             <Popup>
//               Destination: {destinationInput || 'Selected destination'}
//             </Popup>
//           </Marker>

//           {/* Polyline for the route */}
//           {routeCoordinates.length > 0 && (
//             <>
//               <Polyline
//                 positions={routeCoordinates}
//                 color="blue"
//                 weight={8} // Increase weight here to make the line thicker
//                 opacity={0.8} // Optional: adjust opacity
//                 dashArray="5, 10" // Optional: add dashed line style
//               />
//               {/* <AdjustMapView bounds={routeCoordinates} /> */}
//             </>
//           )}
//         </MapContainer>
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
import { useState, useEffect } from 'react';

const GEOAPIFY_API_KEY = 'b81a0261fe1e433bba84bd8216048977';

let DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

L.Marker.prototype.options.icon = DefaultIcon;

const RideSelection = () => {
  const [position, setPosition] = useState([26.8854284, 80.99749539150943]);
  const [secondPosition, setSecondPosition] = useState([
    26.8854284, 80.99749539150943,
  ]);
  const [locationInput, setLocationInput] = useState('');
  const [destinationInput, setDestinationInput] = useState('');
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    const fromHome = JSON.parse(localStorage.getItem('location'));
    if (fromHome) {
      const { first, second } = fromHome;
      if (first) {
        setLocationInput(first);
        fetchCoordinates(first, setPosition);
      }
      if (second) {
        setDestinationInput(second);
        fetchCoordinates(second, setSecondPosition);
      }
    }
  }, []);

  const fetchCoordinates = async (locationName, setPos) => {
    if (!locationName) return;

    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
          locationName,
        )}&apiKey=${GEOAPIFY_API_KEY}`,
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const [lon, lat] = data.features[0].geometry.coordinates; // [lon, lat]
        setPos([lat, lon]);
      } else {
        console.warn('No coordinates found for:', locationName);
        setPos([26.8854284, 80.99749539150943]); // Default coordinates
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  const fetchRoute = async () => {
    if (!position || !secondPosition) return;

    const response = await fetch(
      `https://api.geoapify.com/v1/routing?waypoints=${position[0]},${position[1]}|${secondPosition[0]},${secondPosition[1]}&mode=drive&apiKey=${GEOAPIFY_API_KEY}`,
    );
    const data = await response.json();

    if (data.features && data.features.length > 0) {
      const coordinates = data.features[0].geometry.coordinates.map((coord) => [
        coord[1],
        coord[0],
      ]);
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

            <div
              onClick={() => {
                localStorage.removeItem('location'),
                  setLocationInput(''),
                  setDestinationInput('');
              }}
              className="text-right hover:underline cursor-pointer pr-3 w-full text-xs"
            >
              Clear
            </div>

            <button
              onClick={fetchRoute}
              className="border w-full py-2 bg-black text-white hover:bg-gray-600 transition duration-100"
            >
              Check Rides
            </button>
          </div>
        </div>


        {/* rides */}
        <div>
          <div className="p-2 mt-5 flex flex-row w-[16vw] mx-auto items-center bg-gradient-to-r from-gray-100 to-gray-200 rounded-md shadow-lg transition-transform transform">
            {/* Driver Profile Picture */}
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQDw8QEBAQDg8PDw0PDQ0QDQ8NDw0PFhEWFhURExMYHSggGBolGxMTITEhJSk3Li4uFx8zODMsNygtLisBCgoKDQ0NDg0NDysZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EADAQAQACAAMFBgYCAwEAAAAAAAABAgMEESExQVFxBRJhgZHBIjJSobHRovATQuFy/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANZxI5tf8ANHP7SCQR/wCaP7EsxiRzBuMRLIAAAAAAAAAAAAAAAAAAAMWtpvBlpfEiP0hvizO7ZCMEtsaeiOZYEAAAAGYlvXFmPFGAs1xYnwSKTemJMeMclFoa0tE7mwAAAAAAAAAAAAAMWnTaDF7aK1rTO8vbWWqAAAAAAAEAAAAAM1nTcs4d9evFVZrOm0Fwa0trDZQAAAAAAAAAAVsa+s6cITYttIVQAEAABpjY0UjWfKOMmNiRWszPDhznk5OJiTadZ3/gE2LnLTu+GPDf6oJnXft67WBUIlPhZu9ePejlO37oAHWwMxF92yeMJXFraYnWNkxul1ctjd+uvGNkx4oqUAAAG+HfSfDitKSxgW2acvwolAAAAAAAAAkFfHtt6ImZlhAAAABz+0cTW0V4RtnrKolzU/Hb/wBTHoiVAAAABYyOJpeI4W2T7K7NZ0mJ5TEg7QywigADfCtpMejQBdGKTrEMqAAAAAADXEnZLZHj/LPl+QVgEAAAAHJzddL266+u1Evdo4e63lPsoqgAAAA2w662iOcxH3arXZ+FrbvcK/kHSYBFAAAAWcCdiRFl909fZKoAAAAAAI8f5Z8vykaYsbJBVAQAAAAYtWJiYnbE73LzGBNJ5xwl1WLViY0mNYngDii9i5D6Z08J/aC2UvH+uvSYlUQCaMrf6fvEJ8LIfVPlH7BVwcKbzpHnPCHWwsOKxERw+/izSkVjSI0hlFAAAAAAWMvunr7JUeBGxIoAAAAAAMTDICnLCTGrpPXajQAAAQ5jMxTZvnlHuCYmXLxM1e3HSOUbEEyo7XejnHqd6OcerigO13o5x6nejnHq4oDtxI4iXDzN67p18J2wDrCvl83Ftk/DP2nosIAAANsOuswCzSNIhsCgAAAAAAACPGrrHRWXVXFppPhO4GgMXtpEzO6I1QQZzMd2NI+aftHNzJbXvNpmZ3y1VAAAAAAAABfyWZ1+G2//AFnn4KBE6bt/AHbGmBid6sT69W6KLGBXjzQ0rrOi3EKAAAAAAAAAADW9dY0bAKdo02KvaFtKac5iPf2dPEpr14S5XakaRWPGQc8AQAAAAAAAAABf7NtstHKYn++i7EOf2Z81unu7GFh6dfwKzh00jx4twAAAAAAAAAAAAAQ5nL1xI0t5TxhMA8/msnbD37a8LRu8+Su9RMKGY7MrbbX4J5b6+nAHGFjGyWJTfXWOdfihXEAAAAATYOUvfdWdOc7IBCmy+WtiT8MbONp3Q6OX7LiNt570/TGyv/XQrWIjSI0iN0RsgVBlMpXDjZttO+3P9LAAAAAAAAAAAAAAAAAAAAI8TArb5qxPjMRr6pAFO/ZmHPCY6Wn3Rz2TT6rfx/ToAOdHZNPqt/H9JK9mYcfVPW36XQEWHlqV3ViPHTWfVKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k="
              alt="Driver"
              className="w-12 h-12 rounded-full border border-gray-300 object-contain mt-2 ml-2"
            />
            <div>
              <div className="flex flex-col ml-4">
                <div className="flex flex-row items-center gap-12">
                  <span className="text-md font-bold text-offblack transition-colors">
                    Akash Pal
                  </span>
                  <span className="text-sm  font-semibold text-gray-800">
                    Price: <span className="text-green-600">$20</span>
                  </span>
                </div>
                <span className="text-xs text-gray-700 py-1">
                  Expected Time:{' '}
                  <span className="text-orange-500">15 mins</span>
                </span>
              </div>

              {/* Select Rider Button */}
              <button className="ml-4 mt-1 bg-gray-800 hover:bg-black text-white w-full font-semibold text-xs py-1 px-4 rounded-lg transition duration-200">
                Select Rider
              </button>
            </div>
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
            <Polyline
              positions={routeCoordinates}
              color="blue"
              weight={8}
              opacity={0.8}
              dashArray="5, 10"
            />
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
