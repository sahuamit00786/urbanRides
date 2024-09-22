import React, { useState } from 'react';
import Dashboard from './insidePages/Dashboard';
import BikeManagement from './insidePages/BikeManagement';
import RentalManagement from './insidePages/RentalManagement';
import UserManagement from './insidePages/UserManagement';
import Payment from './insidePages/Payment';
import Booking from './insidePages/Booking';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <>
            <Dashboard />
          </>
        );
      case 'bikeManagement':
        return (
          <>
            <BikeManagement />
          </>
        );
      case 'rentalManagement':
        return (
          <>
            <RentalManagement />
          </>
        );
      case 'userManagement':
        return (
          <>
            <UserManagement />
          </>
        );
      case 'payment':
        return (
          <>
            <Payment />
          </>
        );
      case 'booking':
        return (
          <>
            <Booking />
          </>
        );
      default:
        return <div>Select a section</div>;
    }
  };

  const navigate = useNavigate();
  const handleNav = () => {
    navigate('/');
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="border-r border-gray-700 w-[20vw] h-screen bg-black text-white">
        <div className="p-6">
          <h2 className="font-bold text-2xl mb-8 text-center text-gray-300">
            Urban Admin{' '}
            <span
              onClick={handleNav}
              className="text-xs pl-6 hover:underline cursor-pointer"
            >
              Home
            </span>
          </h2>
          <ul className="space-y-1 text-sm">
            <li
              onClick={() => setActiveSection('dashboard')}
              className={`cursor-pointer  p-3 transition-colors outline-none ${
                activeSection === 'dashboard'
                  ? 'text-gray-300 border-b bg-gray-700 w-80'
                  : 'hover:text-gray-300'
              }`}
            >
              Dashboard
            </li>
            <li
              onClick={() => setActiveSection('bikeManagement')}
              className={`cursor-pointer p-3 transition-colors outline-none ${
                activeSection === 'bikeManagement'
                  ? 'text-gray-300 border-b bg-gray-700 w-80'
                  : 'hover:text-gray-300'
              }`}
            >
              Bike Management
            </li>
            <li
              onClick={() => setActiveSection('rentalManagement')}
              className={`cursor-pointer p-3  transition-colors outline-none ${
                activeSection === 'rentalManagement'
                  ? 'text-gray-300 border-b bg-gray-700 w-80'
                  : 'hover:text-gray-300'
              }`}
            >
              Rental Management
            </li>
            <li
              onClick={() => setActiveSection('userManagement')}
              className={`cursor-pointer p-3 transition-colors outline-none ${
                activeSection === 'userManagement'
                  ? 'text-gray-300 border-b  bg-gray-700 w-80'
                  : 'hover:text-gray-300'
              }`}
            >
              User Management
            </li>
            <li
              onClick={() => setActiveSection('payment')}
              className={`cursor-pointer p-3 transition-colors outline-none ${
                activeSection === 'payment'
                  ? 'text-gray-300 border-b bg-gray-700 w-80'
                  : 'hover:text-gray-300 '
              }`}
            >
              Payment & Earnings
            </li>
            <li
              onClick={() => setActiveSection('booking')}
              className={`cursor-pointer p-3 transition-colors outline-none ${
                activeSection === 'booking'
                  ? 'text-gray-300 border-b bg-gray-700 w-80'
                  : 'hover:text-gray-300'
              }`}
            >
              Booking & Reservation
            </li>
          </ul>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 h-screen overflow-y-auto">
        <div className="text-black">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
