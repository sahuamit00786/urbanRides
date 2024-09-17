import { Link } from 'react-router-dom';

const Signup = () => {
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
              name="name"
              className="px-3 py-2 border rounded-md text-sm w-2/3 mb-4"
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              className="px-3 py-2 border rounded-md text-sm w-2/3 mb-4"
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              className="px-3 py-2 border rounded-md text-sm w-2/3 mb-4"
              placeholder="Password"
              required
            />
            <input
              type="text"
              name="phone"
              className="px-3 py-2 border rounded-md text-sm w-2/3 mb-4"
              placeholder="Phone"
              required
            />
            <input
              type="text"
              name="alternatePhone"
              className="px-3 py-2 border rounded-md text-sm w-2/3 mb-4"
              placeholder="Alternate Phone"
            />
            <button
              type="submit"
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
