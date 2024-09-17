import { Link } from 'react-router-dom';

const SignIn = () => {
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
              type="text"
              className="px-3 py-2 border rounded-md text-sm w-2/3 mb-4"
              placeholder="name@email.com"
            />
            <input
              type="password"
              className="px-3 py-2 border rounded-md text-sm w-2/3 mb-4"
              placeholder="Password"
            />
            <button className="text-sm font-semibold bg-black text-white py-2 hover:bg-gray-700 transition duration-200 w-2/3 rounded-lg">
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
