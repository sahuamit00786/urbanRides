import React from 'react';

export default function BikeManagement() {
  const makeNew = false;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Bike Management</h1>

      {makeNew && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Add New Bike
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="bikeName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Bike Name
                </label>
                <input
                  type="text"
                  id="bikeName"
                  name="bikeName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter bike name"
                />
              </div>
              <div>
                <label
                  htmlFor="bikeType"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Bike Type
                </label>
                <select
                  id="bikeType"
                  name="bikeType"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option value="electric">Electric</option>
                  <option value="petrol">Petrol</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="bikePricePerHour"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Price per Hour
                </label>
                <input
                  type="number"
                  id="bikePricePerHour"
                  name="bikePricePerHour"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter price per hour"
                />
              </div>
              <div>
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Brand
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter brand name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="bikeDescription"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Bike Description
              </label>
              <textarea
                id="bikeDescription"
                name="bikeDescription"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter bike description"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label
                  htmlFor="transmission"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Transmission
                </label>
                <select
                  id="transmission"
                  name="transmission"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option value="manual">Manual</option>
                  <option value="automatic">Automatic</option>
                  <option value="semi-automatic">Semi-Automatic</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="seatCapacity"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Seat Capacity
                </label>
                <input
                  type="number"
                  id="seatCapacity"
                  name="seatCapacity"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter seat capacity"
                />
              </div>
              <div>
                <label
                  htmlFor="engineCapacity"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Engine Capacity
                </label>
                <input
                  type="text"
                  id="engineCapacity"
                  name="engineCapacity"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter engine capacity"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="hasABS"
                  name="hasABS"
                  className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="hasABS"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Has ABS
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="hasGPS"
                  name="hasGPS"
                  className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="hasGPS"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Has GPS
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="hasBluetooth"
                  name="hasBluetooth"
                  className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="hasBluetooth"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Has Bluetooth
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Bike
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Bike Inventory
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bike Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price/Hour
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  Mountain Explorer
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Electric</td>
                <td className="px-6 py-4 whitespace-nowrap">$15</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Available
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-900">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">City Cruiser</td>
                <td className="px-6 py-4 whitespace-nowrap">Petrol</td>
                <td className="px-6 py-4 whitespace-nowrap">$12</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Rented
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-900">
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
