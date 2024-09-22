import React, { useState } from 'react';
import {
  FaCalendarAlt,
  FaClock,
  FaBicycle,
  FaUser,
  FaCheckCircle,
  FaTimesCircle,
} from 'react-icons/fa';

export default function Booking() {
  const [reservations, setReservations] = useState([
    {
      id: '1',
      user: 'John Doe',
      bikeModel: 'Yamaha MT-15',
      date: '2024-09-22',
      time: '10:00 AM',
      status: 'Confirmed',
    },
    {
      id: '2',
      user: 'Jane Smith',
      bikeModel: 'Honda CBR500R',
      date: '2024-09-23',
      time: '12:00 PM',
      status: 'Pending',
    },
    {
      id: '3',
      user: 'Michael Lee',
      bikeModel: 'Royal Enfield Classic 350',
      date: '2024-09-24',
      time: '02:00 PM',
      status: 'Cancelled',
    },
  ]);

  return (
    <div className="min-h-screen p-8 bg-offwhite">
      <h1 className="text-4xl font-bold text-offblack mb-8 text-center">
        Booking & Reservations
      </h1>

      {/* Reservations Section */}
      <div className="rounded-lg shadow-lg p-8 bg-white">
        <h2 className="text-2xl font-semibold text-offblack mb-6 border-b border-gray-500 pb-2">
          Recent Bookings
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  Bike Model
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-400">
              {reservations.map((reservation) => (
                <tr
                  key={reservation.id}
                  className="bg-offwhite hover:bg-gray-200 transition duration-300"
                >
                  <td className="px-6 py-4 text-sm font-medium text-offblack">
                    <FaUser className="inline mr-2" />
                    {reservation.user}
                  </td>
                  <td className="px-6 py-4 text-sm text-offblack">
                    <FaBicycle className="inline mr-2" />
                    {reservation.bikeModel}
                  </td>
                  <td className="px-6 py-4 text-sm text-offblack">
                    <FaCalendarAlt className="inline mr-2" />
                    {reservation.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-offblack">
                    <FaClock className="inline mr-2" />
                    {reservation.time}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {reservation.status === 'Confirmed' ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-600 text-white">
                        <FaCheckCircle className="mr-1" />
                        {reservation.status}
                      </span>
                    ) : reservation.status === 'Pending' ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-600 text-white">
                        {reservation.status}
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600 text-white">
                        <FaTimesCircle className="mr-1" />
                        {reservation.status}
                      </span>
                    )}
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
