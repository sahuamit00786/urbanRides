import React, { useState } from 'react';
import {
  FaBicycle,
  FaUser,
  FaCalendarAlt,
  FaDollarSign,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaEdit,
  FaTrashAlt,
} from 'react-icons/fa';

export default function RentalManagement() {
  const [rentals, setRentals] = useState([
    {
      id: '1',
      bikeName: 'Mountain Explorer',
      userName: 'John Doe',
      rentDate: '2023-06-15',
      status: 'active',
      pricePerHour: 15,
      totalHours: 4,
      amount: 60,
      paymentStatus: 'Completed',
    },
    {
      id: '2',
      bikeName: 'City Cruiser',
      userName: 'Jane Smith',
      rentDate: '2023-06-14',
      status: 'inactive',
      pricePerHour: 12,
      totalHours: 2,
      amount: 24,
      paymentStatus: 'pending',
    },
  ]);

  const makeNew = false;

  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-4xl font-bold text-black mb-8 text-center">
        Rental Management
      </h1>

      {makeNew && (
        <div className="rounded-lg shadow-lg p-8 mb-8 bg-gray-100">
          <h2 className="text-2xl font-semibold text-black mb-6 border-b border-gray-500 pb-2">
            Add New Rental
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="bikeId"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Bike
                </label>
                <div className="relative">
                  <select
                    id="bikeId"
                    name="bikeId"
                    className="w-full pl-10 pr-3 py-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-black appearance-none"
                  >
                    <option value="">Select a bike</option>
                    <option value="1">Mountain Explorer</option>
                    <option value="2">City Cruiser</option>
                  </select>
                  <FaBicycle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="userId"
                  className="block text-sm font-medium text-black mb-1"
                >
                  User
                </label>
                <div className="relative">
                  <select
                    id="userId"
                    name="userId"
                    className="w-full pl-10 pr-3 py-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-black appearance-none"
                  >
                    <option value="">Select a user</option>
                    <option value="1">John Doe</option>
                    <option value="2">Jane Smith</option>
                  </select>
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="rentDate"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Rent Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="rentDate"
                    name="rentDate"
                    className="w-full pl-10 pr-3 py-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-black"
                  />
                  <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="pricePerHour"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Price per Hour
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="pricePerHour"
                    name="pricePerHour"
                    className="w-full pl-10 pr-3 py-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-black"
                    placeholder="Enter price per hour"
                  />
                  <FaDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="totalHours"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Total Hours
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="totalHours"
                    name="totalHours"
                    className="w-full pl-10 pr-3 py-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-black"
                    placeholder="Enter total hours"
                  />
                  <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="pickupLat"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Pickup Location (Latitude)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="pickupLat"
                    name="pickupLat"
                    className="w-full pl-10 pr-3 py-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-black"
                    placeholder="Enter pickup latitude"
                  />
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="pickupLng"
                  className="block text-sm font-medium text-black mb-1"
                >
                  Pickup Location (Longitude)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="pickupLng"
                    name="pickupLng"
                    className="w-full pl-10 pr-3 py-2 bg-gray-200 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-black"
                    placeholder="Enter pickup longitude"
                  />
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-300"
              >
                Add Rental
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-black mb-6 border-b border-gray-500 pb-2">
          Rental Inventory
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Bike
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Rent Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-400">
              {rentals.map((rental) => (
                <tr
                  key={rental.id}
                  className="bg-white hover:bg-gray-200 transition duration-300"
                >
                  <td className="px-6 py-4 text-sm font-medium text-black">
                    {rental.bikeName}
                  </td>
                  <td className="px-6 py-4 text-sm text-black">
                    {rental.userName}
                  </td>
                  <td className="px-6 py-4 text-sm text-black">
                    {rental.rentDate}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {rental.status === 'active' ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black text-white">
                        Active <FaCheckCircle className="ml-1" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-600 text-white">
                        Inactive <FaTimesCircle className="ml-1" />
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-black">
                    ${rental.amount}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {rental.paymentStatus === 'Completed' ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black text-white">
                        Completed
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-600 text-white">
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm flex space-x-4">
                    <button className="text-black hover:text-gray-600">
                      <FaEdit />
                    </button>
                    <button className="text-black hover:text-red-600">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
