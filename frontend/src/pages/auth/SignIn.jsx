import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../slices/slice/auth';
import { errorMsg } from '../../toast';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formdata, setFromData] = useState({});

  const handleChange = (e) => {
    setFromData({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('formdata', formdata);
    const userData = await dispatch(login(formdata));
    // console.log('userStatus', userData);
    if (userData && userData.payload.status === 1) {
      navigate('/');
    } else if (userData && userData.error) {
      errorMsg(userData.error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[60vw] flex mx-auto border rounded-lg shadow-lg overflow-hidden">
        {/* First div with 50% width */}
        <div className="w-1/2">
          <img
            src="/auth.png"
            className="h-[70vh] w-full object-fit"
            alt="png"
          />
        </div>

        {/* Second div with 50% width */}
        <div className="w-1/2 flex flex-col p-8">
          <div className="mb-8 mt-[70px]">
            <h1 className="text-2xl cursor-pointer text-center font-extrabold mb-2">
              <Link to="/">UrbanRides</Link>
            </h1>
            <p className="text-center text-sm text-gray-600">Welcome back!</p>
          </div>
          <div className="flex flex-col mt-2 items-center mb-10">
            <input
              onChange={handleChange}
              type="text"
              id="email"
              className="px-3 py-2 border rounded-md text-sm w-2/3 mb-4"
              placeholder="name@email.com"
            />
            <input
              onChange={handleChange}
              type="password"
              id="password"
              className="px-3 py-2 border rounded-md text-sm w-2/3 mb-4"
              placeholder="Password"
            />
            <button
              onClick={handleSubmit}
              className="text-sm font-semibold bg-black text-white py-2 hover:bg-gray-700 transition duration-200 w-2/3 rounded-lg"
            >
              Sign in
            </button>
          </div>
          <div className="flex flex-col items-center text-sm">
            <Link
              to="/sign-up"
              className=" mb-2 hover:text-gray-600 hover:underline"
            >
              Don{"'"}t have an account?{' '}
              <span className="font-semibold">Sign up</span>
            </Link>
            <Link
              className=" mb-2 hover:text-gray-600 hover:underline"
              to="/reset-password"
            >
              Reset password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
