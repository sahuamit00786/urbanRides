// import Sidebar from '../components/Sidebar';

import { Link, useLocation } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const section = searchParams.get('section') || 'profile';

  const reviews = [
    {
      id: 1,
      name: 'Jane Doe',
      date: 'September 5, 2024',
      profilePic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaEH0E-R3GYwCjaoS8eBzzEo6DhmXxP07Xyg&s',
      review:
        'This was an amazing experience! The bike was in perfect condition, and the process was seamless. Would definitely rent again.',
      rating: 5,
    },
    {
      id: 2,
      name: 'John Smith',
      date: 'August 20, 2024',
      profilePic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1SUjdLrWBVDK-izPxe389Yj9Pic8FqfbTQ&s',
      review:
        'Great bike, but the rental station was a bit far from my location. Overall, a good experience.',
      rating: 4,
    },
  ];

  return (
    <div className="bg-white w-[55vw] border-2 xl:w-[70vw] h-[92vh] mx-auto flex flex-row justify-center">
      {/* <!-- Left Sidebar --> */}
      <div className="w-1/5 my-10 bg-black rounded-3xl  text-white p-6">
        <div className="mb-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaEH0E-R3GYwCjaoS8eBzzEo6DhmXxP07Xyg&s"
            alt="User Profile"
            className="w-24 h-24 object-cover rounded-full mx-auto border-2 border-white"
          />
          <h2 className="text-center text-xl font-bold mt-4">John Doe</h2>
          <p className="text-center text-gray-400">Member since June 2020</p>
        </div>
        <nav className="flex flex-col gap-1">
          {/* Conditional classes based on section */}
          <Link
            to="/profile?section=profile"
            className={`block py-2 px-4 rounded-lg ${
              section === 'profile' ? 'bg-gray-700' : ' hover:bg-gray-700'
            }`}
          >
            Profile
          </Link>
          <Link
            to="/profile?section=rides"
            className={`block py-2 px-4 rounded-lg ${
              section === 'rides' ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
          >
            My Rides
          </Link>
          <Link
            to="/profile?section=reviews"
            className={`block py-2 px-4 rounded-lg ${
              section === 'reviews' ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
          >
            Reviews
          </Link>
          <Link
            to="/profile?section=documents"
            className={`block py-2 px-4 rounded-lg ${
              section === 'documents' ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
          >
            License & Docs
          </Link>
          <Link
            to="/profile?section=settings"
            className={`block py-2 px-4 rounded-lg ${
              section === 'settings' ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
          >
            Settings
          </Link>
        </nav>
      </div>

      {/* <!-- Main Content Area --> */}
      {section == 'profile' && (
        <div className="w-3/5 p-12 space-y-8">
          {/* <!-- Profile Section --> */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center space-x-6">
              <div className="space-y-1 p-2">
                <h1 className="text-2xl font-bold text-black">John Doe</h1>
                <p className="text-md text-gray-500">john.doe@example.com</p>
                <p className="text-md text-gray-500">+123 456 7890</p>
                <p className="text-md text-gray-500">New York, USA</p>
              </div>
            </div>
            <button className="bg-black text-sm text-white py-2 px-5 -mt-[70px] rounded-lg shadow-md hover:bg-gray-800 transition duration-200">
              Edit Profile
            </button>
          </div>

          {/* <!-- License Information --> */}
          <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-black">
              License Information
            </h2>
            <div className="flex items-center space-x-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1SUjdLrWBVDK-izPxe389Yj9Pic8FqfbTQ&s"
                alt="License Photo"
                className="w-36 h-24 border object-cover border-gray-400 shadow-md"
              />
              <div className="space-y-2">
                <p className="text-gray-600 font-bold text-lg">
                  License Number:{' '}
                  <span className="font-medium">ABCD123456</span>
                </p>
                <p className="text-gray-600 font-bold text-lg">
                  Expiry Date: <span className="font-medium">12/2025</span>
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Recent Rides Section --> */}
          <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-black">Recent Rides</h2>
            <div className="space-y-4">
              {/* <!-- Ride Card --> */}
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 flex justify-between items-center shadow-sm">
                <div>
                  <p className="text-black text-lg">
                    Ride to: <span className="font-medium">Downtown</span>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Date: <span className="font-medium">Sept 10, 2024</span>
                  </p>
                </div>
                <p className="text-green-600 font-medium text-lg">Completed</p>
              </div>

              <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 flex justify-between items-center shadow-sm">
                <div>
                  <p className="text-black text-lg">
                    Ride to: <span className="font-medium">Airport</span>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Date: <span className="font-medium">Sept 8, 2024</span>
                  </p>
                </div>
                <p className="text-red-600 font-medium text-lg">Cancelled</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {section == 'rides' && (
        <div className="w-3/5 p-12 space-y-8">
          {/* Ride Card */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-black">
                  Ride Details
                </h2>
                <p className="text-sm font-medium text-black mt-2">
                  <span className="font-bold">Ride to:</span> Downtown
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Date:</span> Sept 10, 2024
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Pickup Location:</span> Central
                  Park
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Drop-off Location:</span> Times
                  Square
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Ride Duration:</span> 30 minutes
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Fare:</span> $25
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-black mb-2">Status</p>
                <p className="text-green-600 font-medium text-lg">Completed</p>
              </div>
            </div>
            {/* Bike Details */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-black mb-2">
                Bike Details
              </h3>
              <p className="text-sm text-gray-600">
                <span className="font-bold">Bike Owner:</span> Jane Smith
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-bold">Owner Contact:</span> +91 63862
                02642
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-bold">Bike Model:</span> Yamaha YZF-R1
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-bold">License Plate:</span> XYZ1234
              </p>
            </div>
          </div>
        </div>
      )}

      {section == 'documents' && (
        <div className="w-3/5 p-12 space-y-8">
          <div>
            <h1 className="text-2xl font-semibold text-black">
              License & Documents
            </h1>
            {/* <p className="text-gray-500 text-lg">
              Please upload your driver's license, passport, and any other
              necessary documents to complete your profile.
            </p> */}
            <div>
              <div className="relative w-64 h-40 bg-gray-200 rounded-lg overflow-hidden">
                {/* License Photo Container */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1SUjdLrWBVDK-izPxe389Yj9Pic8FqfbTQ&s" // Replace with your license photo URL
                  alt="License Photo"
                  className="w-full h-full object-cover transition duration-300 ease-in-out"
                />
                {/* Gradient Overlay and Download Icon */}
                <div className="absolute inset-0 hover:bg-gray-700 hover:opacity-80 cursor-pointer flex items-center justify-center transition duration-300 ease-in-out">
                  <i className="fas fa-download text-white text-3xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {section == 'reviews' && (
        <div className="w-3/5 px-9 text-black space-y-5">
          <div className="max-w-5xl mx-auto px-4 pt-[50px]">
            <div className="space-y-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white shadow-lg rounded-xl p-6 flex items-start space-x-6"
                >
                  {/* User profile pic */}
                  <img
                    src={review.profilePic}
                    alt={review.name}
                    className="w-16 h-16 rounded-full border-2 border-black dark:border-white"
                  />

                  {/* Review content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-semibold text-black">
                        {review.name}
                      </h2>
                      <span className="text-sm text-black">{review.date}</span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-500 mt-2">{review.review}</p>

                    {/* Star Rating */}
                    <div className="flex flex-row justify-between items-center">
                      <div className="mt-4">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <span
                            key={idx}
                            className={`inline-block text-xl ${
                              idx < review.rating
                                ? 'text-yellow-500'
                                : 'text-gray-300 dark:text-gray-500'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <div className="mt-4">
                        <button className="bg-black text-white px-8 text-xs py-2 rounded-xl">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {section == 'settings' && (
        <div className="w-3/5 p-12 space-y-8">
          {/* Personal Information Section */}
          <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold text-black">
              Personal Information
            </h2>
            <div className="space-y-1">
              <div className="flex flex-col">
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="+123 456 7890"
                  className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="address"
                  className="text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="New York, USA"
                  className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
                />
              </div>
            </div>
          </div>

          {/* License Information Section */}
          <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold text-black">
              License Information
            </h2>
            <div className="space-y-2">
              <div className="flex flex-col">
                <label
                  htmlFor="licenseNumber"
                  className="text-sm font-medium text-gray-700"
                >
                  License Number
                </label>
                <input
                  id="licenseNumber"
                  type="text"
                  placeholder="ABCD123456"
                  className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="expiryDate"
                  className="text-sm font-medium text-gray-700"
                >
                  Expiry Date
                </label>
                <input
                  id="expiryDate"
                  type="text"
                  placeholder="12/2025"
                  className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="licensePhoto"
                  className="text-sm font-medium text-gray-700"
                >
                  License Photo
                </label>
                <input
                  id="licensePhoto"
                  type="file"
                  className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-black"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-black text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 transition duration-200">
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
