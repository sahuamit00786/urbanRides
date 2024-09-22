import React, { useState } from 'react';
import { FaWallet, FaDollarSign, FaCalendarAlt } from 'react-icons/fa';

export default function Payment() {
  const [payments, setPayments] = useState([
    {
      id: '1',
      user: 'John Doe',
      date: '2024-09-20',
      amount: 25.0,
      status: 'Completed',
    },
    {
      id: '2',
      user: 'Jane Smith',
      date: '2024-09-21',
      amount: 15.0,
      status: 'Pending',
    },
  ]);

  const [earnings, setEarnings] = useState([
    {
      id: '1',
      period: 'Sept 2024',
      total: 1000.0,
    },
    {
      id: '2',
      period: 'Aug 2024',
      total: 1200.0,
    },
  ]);

  return (
    <div className="min-h-screen p-8 bg-offwhite">
      <h1 className="text-4xl font-bold text-offblack mb-8 text-center">
        Payments & Earnings
      </h1>

      {/* Payments Section */}
      <div className="rounded-lg shadow-lg p-8 mb-8 bg-white">
        <h2 className="text-2xl font-semibold text-offblack mb-6 border-b border-gray-500 pb-2">
          Recent Payments
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-400">
              {payments.map((payment) => (
                <tr
                  key={payment.id}
                  className="bg-offwhite hover:bg-gray-200 transition duration-300"
                >
                  <td className="px-6 py-4 text-sm font-medium text-offblack">
                    {payment.user}
                  </td>
                  <td className="px-6 py-4 text-sm text-offblack">
                    {payment.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-offblack">
                    <FaDollarSign className="inline mr-2" />
                    {payment.amount}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {payment.status === 'Completed' ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-600 text-white">
                        {payment.status}
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-600 text-white">
                        {payment.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Earnings Section */}
      <div className="rounded-lg shadow-lg p-8 bg-white">
        <h2 className="text-2xl font-semibold text-offblack mb-6 border-b border-gray-500 pb-2">
          Monthly Earnings
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  Period
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  Total Earnings
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-400">
              {earnings.map((earning) => (
                <tr
                  key={earning.id}
                  className="bg-offwhite hover:bg-gray-200 transition duration-300"
                >
                  <td className="px-6 py-4 text-sm font-medium text-offblack">
                    {earning.period}
                  </td>
                  <td className="px-6 py-4 text-sm text-offblack">
                    <FaWallet className="inline mr-2" />
                    {earning.total}
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
