import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../../slices/slice/auth';
import { errorMsg } from '../../toast';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});

  const { error, isAuthenticated, loading } = useSelector(
    (state) => state.counter,
  );

  useEffect(() => {
    errorMsg(error);
  }, [error]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await dispatch(userLogin(formData));
    // console.log('userStatus', userData);
    if (userData && userData.payload.status === 1) {
      navigate('/sign-in');
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
          <div className="mb-8 mt-[30px]">
            <h1 className="text-2xl cursor-pointer text-center font-extrabold mb-2">
              <Link to="/">UrbanRides</Link>
            </h1>
            <p className="text-center text-sm text-gray-600">
              Sign up to start your journey!
            </p>
          </div>

          <form className="flex flex-col mt-2 items-center mb-10">
            <input
              type="text"
              onChange={handleChange}
              id="name"
              className="px-3 py-2 border rounded-md text-sm w-2/3 mb-4"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              id="email"
              onChange={handleChange}
              className="px-3 py-2 border rounded-md text-sm w-2/3 mb-4"
              placeholder="Email"
              required
            />
            <input
              type="password"
              id="password"
              onChange={handleChange}
              className="px-3 py-2 border rounded-md text-sm w-2/3 mb-4"
              placeholder="Password"
              required
            />
            <input
              type="text"
              id="phone"
              onChange={handleChange}
              maxLength={12}
              className="px-3 py-2 border rounded-md text-sm w-2/3 mb-4"
              placeholder="Phone"
              required
            />
            <input
              type="text"
              id="alternatePhone"
              onChange={handleChange}
              maxLength={12}
              className="px-3 py-2 border rounded-md text-sm w-2/3 mb-4"
              placeholder="Alternate Phone"
            />
            <button
              onClick={handleSubmit}
              className="text-sm font-semibold bg-black text-white py-2 hover:bg-gray-700 transition duration-200 w-2/3 rounded-lg"
            >
              Sign up
            </button>
          </form>

          <div className="flex flex-col items-center text-sm">
            <Link
              to="/sign-in"
              className="mb-2 hover:text-gray-600 hover:underline"
            >
              Already have an account?{' '}
              <span className="font-semibold">Sign in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
