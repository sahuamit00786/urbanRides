import { useState } from 'react';

const Rentals = () => {
  const [selectedPackage, setSelectedPackage] = useState('');

  const handlePackageChange = (event) => {
    console.log(event.target.name, event.target.value);
    setSelectedPackage(event.target.value);
  };

  return (
    <div className="h-screen px-12">
      <div className="px-[100px] py-[70px] flex gap-8 flex-row">
        <div className="h-[70vh] w-[15vw] border p-4">
          <h1 className="border-b border-gray-300">FILTERS</h1>
          <div className="flex flex-col text-xs text-gray-500 mt-5">
            <p className="text-xs">BOOKING DURATION</p>
            <label className="flex mt-3 items-center gap-2">
              <input
                type="radio"
                value="daily"
                name="bookingDuration"
                className="w-4 h-4 ml-2 text-black accent-black" // Customizing radio size and color
                checked={selectedPackage === 'daily'}
                onChange={handlePackageChange}
              />
              <span>Daily Package</span>
            </label>

            <label className="flex items-center gap-2 mt-2">
              <input
                type="radio"
                value="weekly"
                name="bookingDuration"
                className="w-4 h-4 ml-2 text-black accent-black" // Customizing radio size and color
                checked={selectedPackage === 'weekly'}
                onChange={handlePackageChange}
              />
              <span>Weekly Package</span>
            </label>

            {/* Add more radio buttons similarly */}
          </div>

          <hr className="mt-4 border-gray-300" />
          <div className="flex flex-col text-xs text-gray-500 mt-5">
            <p className="text-xs">TRANSMISSION TYPE</p>
            <label className="flex mt-3 items-center gap-2">
              <input
                type="checkbox"
                value="daily"
                id="Manual"
                className="w-4 h-4 ml-2 text-black accent-black" // Customizing radio size and color
                // onChange={handlePackageChange}
              />
              <span>Manual</span>
            </label>

            <label className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                value="Automatic"
                name="bookingDuration"
                className="w-4 h-4 ml-2 text-black accent-black" // Customizing radio size and color
              />
              <span>Automatic</span>
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                value="Semi-Automatic"
                name="bookingDuration"
                className="w-4 h-4 ml-2 text-black accent-black" // Customizing radio size and color
              />
              <span>Semi-Automatic</span>
            </label>

            {/* Add more radio buttons similarly */}
          </div>

          <hr className="mt-4 border-gray-300" />
          <div className="flex flex-col text-xs text-gray-500 mt-5">
            <p className="text-xs">Mileage</p>
            <label className="flex mt-3 items-center gap-2">
              <input
                type="checkbox"
                value="daily"
                id="Manual"
                className="w-4 h-4 ml-2 text-black accent-black" // Customizing radio size and color
                // onChange={handlePackageChange}
              />
              <span>20km - 30km</span>
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                value="Automatic"
                name="bookingDuration"
                className="w-4 h-4 ml-2 text-black accent-black" // Customizing radio size and color
              />
              <span>30km - 40km</span>
            </label>

            <label className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                value="Automatic"
                name="bookingDuration"
                className="w-4 h-4 ml-2 text-black accent-black" // Customizing radio size and color
              />
              <span>40km - 50km</span>
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                value="Semi-Automatic"
                name="bookingDuration"
                className="w-4 h-4 ml-2 text-black accent-black" // Customizing radio size and color
              />
              <span>Above 50</span>
            </label>

            {/* Add more radio buttons similarly */}
          </div>

          <hr className="mt-4 border-gray-300" />
          <div className="flex flex-col text-xs text-gray-500 mt-5">
            <p className="text-xs">Engine Power</p>
            <label className="flex mt-3 items-center gap-2">
              <input
                type="checkbox"
                value="daily"
                id="Manual"
                className="w-4 h-4 ml-2 text-black accent-black" // Customizing radio size and color
                // onChange={handlePackageChange}
              />
              <span>{'<'}100cc</span>
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                value="Automatic"
                name="bookingDuration"
                className="w-4 h-4 ml-2 text-black accent-black" // Customizing radio size and color
              />
              <span>100cc - 200cc</span>
            </label>

            <label className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                value="Automatic"
                name="bookingDuration"
                className="w-4 h-4 ml-2 text-black accent-black" // Customizing radio size and color
              />
              <span>200cc - 300cc</span>
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                value="Semi-Automatic"
                name="bookingDuration"
                className="w-4 h-4 ml-2 text-black accent-black" // Customizing radio size and color
              />
              <span>Above 300</span>
            </label>

            {/* Add more radio buttons similarly */}
          </div>
        </div>
        <div className="w-[75vw] h-[85vh] flex flex-row gap-8 border p-5">
          <div className="w-[22%] border h-[60%]">
            <div className="h-1/2 bg-[#f8f5f5]">
              <div className="h-1/3  flex flex-row items-center justify-between pt-6 pr-2">
                <div className="text-xs font-semibold text-gray-500 p-3">
                  Activa 5G
                </div>
                <div className="text-[10px] flex flex-col gap-1 font-normal">
                  <span className="inline-flex items-center bg-[#D4EDDA] text-green-700 px-3 py-1 rounded-md">
                    <i className="fa-solid fa-check pr-2"></i>
                    <span>Pay At Pickup available</span>
                  </span>

                  <span className="inline-flex items-center justify-end bg-[#FFF3CD] text-yellow-600 px-3 py-1 rounded-md">
                    <i className="fa-solid fa-star pr-2"></i>
                    <span>3.2 (2 Reviews)</span>
                  </span>

                  <span className="inline-flex items-center bg-[#D4EDDA] text-green-700 px-3 py-1 rounded-md">
                    <i className="fa-solid fa-motorcycle pr-2"></i>
                    <span>Home Delivery available</span>
                  </span>
                </div>
              </div>
              <div className="w-full object-fit ">
                <img
                  src="/bikes/Activa5g.png"
                  className="w-32 mx-auto pt-10"
                  alt=""
                />
              </div>
            </div>
            <div className="h-1/2 border-t-2">
              <div className="text-xs text-gray-600 flex flex-row gap-2 p-2 justify-center">
                <div className="flex gap-1 items-center py-1 px-2 bg-gray-100 rounded-full">
                  <i className="fa-solid fa-gears"></i> Automatic
                </div>
                <div className="flex gap-1 items-center py-1 px-2 bg-gray-100 rounded-full">
                  <i className="fa-solid fa-motorcycle"></i>2 Seater
                </div>
                <div className="flex gap-1 items-center py-1 px-2 bg-gray-100 rounded-full">
                  <i className="fa-solid fa-gas-pump"></i>Petrol
                </div>
              </div>
              <div className="text-xs text-center px-2 py-3 mt-3 rounded-2xl bg-gray-200 border w-[80%] mx-auto items-center">
                Available at : <span className="">Lucknow Metro Station</span>
              </div>
              <div className="p-3 flex flex-row justify-between pt-8">
                <div className="flex flex-col">
                  <span className="text-green-700 text-xl font-md">₹ 299</span>
                  <span className="text-xs text-gray-600">- per hour</span>
                  <span className=" text-xs text-gray-600">
                    - Fuel Excluded
                  </span>
                </div>
                <button className="text-sm border px-5 bg-black text-white rounded-lg hover:bg-gray-500 transition duration-100 h-8">
                  Book Now
                </button>
              </div>
              <div className="border-t font-bold text-gray-600 mt-2 pt-2 text-center text-xs">
                Security Deposit : <span className="font-md">₹ 2000</span>
              </div>
            </div>
          </div>
          <div className="w-[22%] border h-[60%]">
            <div className="h-1/2 bg-[#f8f5f5]">
              <div className="h-1/3  flex flex-row items-center justify-between pt-6 pr-2">
                <div className="text-xs font-semibold text-gray-500 p-3">
                  Honda Shine
                </div>
                <div className="text-[10px] flex flex-col gap-1 font-normal">
                  <span className="inline-flex items-center bg-[#D4EDDA] text-green-700 px-3 py-1 rounded-md">
                    <i className="fa-solid fa-check pr-2"></i>
                    <span>Pay At Pickup available</span>
                  </span>

                  <span className="inline-flex items-center justify-end bg-[#FFF3CD] text-yellow-600 px-3 py-1 rounded-md">
                    <i className="fa-solid fa-star pr-2"></i>
                    <span>4.3 (2 Reviews)</span>
                  </span>

                  <span className="inline-flex items-center bg-[#D4EDDA] text-green-700 px-3 py-1 rounded-md">
                    <i className="fa-solid fa-motorcycle pr-2"></i>
                    <span>Home Delivery available</span>
                  </span>
                </div>
              </div>
              <div className="w-full object-fit ">
                <img
                  src="/bikes/Honda-Shine.png"
                  className="w-32 mx-auto pt-10"
                  alt=""
                />
              </div>
            </div>
            <div className="h-1/2 border-t-2">
              <div className="text-xs text-gray-600 flex flex-row gap-2 p-2 justify-center">
                <div className="flex gap-1 items-center py-1 px-2 bg-gray-100 rounded-full">
                  <i className="fa-solid fa-gears"></i> Manual
                </div>
                <div className="flex gap-1 items-center py-1 px-2 bg-gray-100 rounded-full">
                  <i className="fa-solid fa-motorcycle"></i>2 Seater
                </div>
                <div className="flex gap-1 items-center py-1 px-2 bg-gray-100 rounded-full">
                  <i className="fa-solid fa-gas-pump"></i>Petrol
                </div>
              </div>
              <div className="text-xs text-center px-2 py-3 mt-3 rounded-2xl bg-gray-200 border w-[80%] mx-auto items-center">
                Available at : <span className="">Charbagh Metro Station</span>
              </div>
              <div className="p-3 flex flex-row justify-between pt-8">
                <div className="flex flex-col">
                  <span className="text-green-700 text-xl font-md">₹ 349</span>
                  <span className="text-xs text-gray-600">- per hour</span>
                  <span className=" text-xs text-gray-600">
                    - Fuel Excluded
                  </span>
                </div>
                <button className="text-sm border px-5 bg-black text-white rounded-lg hover:bg-gray-500 transition duration-100 h-8">
                  Book Now
                </button>
              </div>
              <div className="border-t font-bold text-gray-600 mt-2 pt-2 text-center text-xs">
                Security Deposit : <span className="font-md">₹ 2500</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rentals;
