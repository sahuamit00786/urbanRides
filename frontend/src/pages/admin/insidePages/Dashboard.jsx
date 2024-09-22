import React from 'react';
import {
  FiUsers,
  FiDollarSign,
  FiTrendingUp,
  FiShoppingCart,
} from 'react-icons/fi';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Sample Data
const data = [
  { name: 'Jan', rentals: 4000 },
  { name: 'Feb', rentals: 3000 },
  { name: 'Mar', rentals: 5000 },
  { name: 'Apr', rentals: 4500 },
  { name: 'May', rentals: 6000 },
  { name: 'Jun', rentals: 7000 },
];

const recentRentals = [
  {
    id: 1,
    user: 'John Doe',
    bike: 'Mountain Bike',
    duration: '2 hours',
    amount: '$20',
  },
  {
    id: 2,
    user: 'Jane Smith',
    bike: 'City Bike',
    duration: '1 day',
    amount: '$45',
  },
  {
    id: 3,
    user: 'Bob Johnson',
    bike: 'Electric Bike',
    duration: '3 hours',
    amount: '$35',
  },
];

const AdminDashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Rentals"
          value="1,234"
          icon={<FiShoppingCart className="h-6 w-6" />}
        />
        <StatCard
          title="Active Users"
          value="567"
          icon={<FiUsers className="h-6 w-6" />}
        />
        <StatCard
          title="Revenue"
          value="$12,345"
          icon={<FiDollarSign className="h-6 w-6" />}
        />
        <StatCard
          title="Growth"
          value="+15%"
          icon={<FiTrendingUp className="h-6 w-6" />}
        />
      </div>

      {/* Charts and Recent Rentals */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="col-span-2 bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-bold mb-4">Rental Trends</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="rentals"
                  stroke="#000000"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-bold mb-4">Recent Rentals</h2>
          <div className="space-y-4">
            {recentRentals.map((rental) => (
              <div
                key={rental.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
                    {rental.user[0]} {/* First Letter of User */}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium">{rental.user}</p>
                    <p className="text-sm text-gray-500">{rental.bike}</p>
                  </div>
                </div>
                <div className="text-sm text-right">
                  <p className="font-medium">{rental.amount}</p>
                  <p className="text-gray-500">{rental.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
          View All Rentals
        </button>
      </div>
    </div>
  );
};

// Stat Card Component
function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white p-6 shadow rounded-lg flex items-center space-x-4">
      <div className="text-gray-600 bg-indigo-100 p-3 rounded-full">{icon}</div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

export default AdminDashboard;
