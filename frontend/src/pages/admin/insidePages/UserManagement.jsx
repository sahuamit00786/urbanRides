import React, { useState } from 'react';
import {
  FaUserEdit,
  FaTrashAlt,
  FaCheckCircle,
  FaTimesCircle,
} from 'react-icons/fa';

export default function UserManagement() {
  const [users, setUsers] = useState([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      status: 'active',
      role: 'customer',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '098-765-4321',
      status: 'inactive',
      role: 'customer',
    },
  ]);

  const makeNew = false;

  return (
    <div className="min-h-screen p-8 bg-offwhite">
      <h1 className="text-4xl font-bold text-offblack mb-8 text-center">
        User Management
      </h1>

      {/* Add New User Section */}
      {makeNew && (
        <div className="rounded-lg shadow-lg p-8 mb-8 bg-white">
          <h2 className="text-2xl font-semibold text-offblack mb-6 border-b border-gray-500 pb-2">
            Add New User
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="userName"
                  className="block text-sm font-medium text-offblack mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  className="w-full px-4 py-2 bg-offwhite border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-offblack"
                  placeholder="Enter user name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-offblack mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-offwhite border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-offblack"
                  placeholder="Enter email"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-offblack mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 bg-offwhite border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-offblack"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-offblack mb-1"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full px-4 py-2 bg-offwhite border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-offblack"
                >
                  <option value="customer">Customer</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-offblack text-white font-medium rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-300"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      )}
      {/* User List Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-offblack mb-6 border-b border-gray-500 pb-2">
          User Inventory
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-300">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-offblack uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-400">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="bg-offwhite hover:bg-gray-200 transition duration-300"
                >
                  <td className="px-6 py-4 text-sm font-medium text-offblack">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-offblack">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-offblack">
                    {user.phone}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    {user.status === 'active' ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-offblack text-white">
                        Active <FaCheckCircle className="ml-1" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-600 text-white">
                        Inactive <FaTimesCircle className="ml-1" />
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-offblack">
                    {user.role}
                  </td>
                  <td className="px-6 py-4 text-sm flex space-x-4">
                    <button className="text-offblack hover:text-gray-600">
                      <FaUserEdit />
                    </button>
                    <button className="text-offblack hover:text-red-600">
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
