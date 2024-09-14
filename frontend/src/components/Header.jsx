import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [aboutToggle, setAboutToggle] = useState(false);

  return (
    <div className="bg-black pb-1 text-white">
      <div className="flex cursor-pointer flex-row w-[55vw] xl:w-[70vw] mx-auto justify-between">
        <ul className="flex flex-row gap-1 xl:gap-2 pt-5">
          <Link to="/" className="text-xl font-extrabold">
            UrbanRides
          </Link>
          <Link
            to="/ride"
            className="pt-1 ml-10 hover:bg-gray-400 hover:text-white transition-colors duration-300 px-4 rounded-3xl p-2"
          >
            Ride
          </Link>
          <Link
            to="/pricing"
            className="pt-1 hover:bg-gray-400 hover:text-white transition-colors duration-300 px-4 rounded-3xl p-2"
          >
            Pricing
          </Link>
          <li className="pt-1 relative font-semibold  hover:text-white transition-colors duration-300 rounded-3xl p-2">
            <button
              onClick={() => setAboutToggle(!aboutToggle)}
              className="flex flex-row px-4 items-center gap-3"
            >
              About
              {aboutToggle ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </button>
            <div
              className={`flex absolute ${
                !aboutToggle && 'hidden'
              } rounded-xl w-24 top-10 right-1 bg-white border border-black mt-2 text-black flex-col py-1 text-center gap-1`}
            >
              <div className="border-b pb-1 hover:text-gray-700 border-gray-700">
                About us
              </div>
              <div className=" hover:text-gray-700 border-gray-700">Blog</div>
            </div>
          </li>
        </ul>
        <ul className="flex font-semibold items-center flex-row gap-5 pt-3">
          <Link className=" hover:bg-gray-400 hover:text-white transition-colors rounded-3xl px-4 duration-300">
            Help
          </Link>
          <Link className="relative">
            <button
              onClick={() => setToggle(!toggle)}
              className="flex flex-row gap-3 items-center py-1 bg-white text-black px-5 rounded-xl"
            >
              Amit{' '}
              {toggle ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </button>
            <div
              className={`absolute ${
                !toggle && 'hidden'
              } top-12 bg-white rounded-xl w-24 text-black`}
            >
              <div className="flex flex-col py-2 text-center gap-2 border border-black rounded-lg">
                <div className="border-b hover:text-gray-700 border-gray-700">
                  <Link to="/profile">Profile</Link>
                </div>
                <div className="border-b hover:text-gray-700 border-gray-700">
                  Rides
                </div>
                <div className="hover:text-gray-700">Sign out</div>
              </div>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
