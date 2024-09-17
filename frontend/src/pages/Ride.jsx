import { Link } from 'react-router-dom';

const Ride = () => {
  return (
    <div className=" text-white min-h-screen">
      <div className="bg-black h-[92vh]">
        <div className="flex flex-col lg:flex-row w-[90vw] lg:w-[70vw] mx-auto pt-12 lg:pt-24">
          {/* Left Section */}
          <div className="lg:w-1/2 flex flex-col gap-6 w-full pt-8 lg:pt-12 lg:pl-[5vw] text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-extrabold py-6 lg:py-8 leading-normal">
              Drive when you <br /> want, make what <br /> you need
            </h1>
            <p className="pb-4">Earn on your own schedule</p>

            {/* Location and Destination Inputs */}
            <div className="flex flex-row gap-4 items-center lg:items-start">
              <div className=" text-black border px-6 rounded-md py-2 bg-white">
                <button>
                  <Link to="/rideSelection">Get Started</Link>
                </button>
              </div>

              {/* Enter Destination */}
              <div className="flex cursor-pointer items-center gap-3 border-b border-white text-white w-full lg:w-[20vw] px-4 py-2 bg-black">
                Already have an account ? Sign in
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 w-full mt-8 pt-12 lg:mt-0 flex justify-center lg:justify-end">
            <img
              src="/rideImage.jpg"
              className="w-[50vw] lg:w-[25vw]"
              alt="homeImage"
            />
          </div>
        </div>
      </div>
      <div className="py-24 w-[90vw] lg:w-[70vw] mx-auto">
        <h1 className="text-black pb-12 text-2xl font-bold ">
          Why ride with us
        </h1>
        <div className="flex text-black py-5 flex-row justify-between">
          <div className="flex flex-col border px-12 py-8 gap-12 w-[22vw]">
            <div>
              <i className="fa-solid fa-calendar"></i>
              <h1 className="font-semibold pb-1 pt-4">Set your own hours</h1>
              <p className="text-gray-600">
                You decide when and how often you drive.
              </p>
            </div>
            <div>
              <button className="border-b text-gray-600 border-black">
                How driving works -
              </button>
            </div>
          </div>
          <div className="flex flex-col border px-12 py-8 gap-12 w-[22vw]">
            <div>
              <i className="fa-solid fa-money-bill"></i>
              <h1 className="font-semibold pb-1 pt-4">Get Paid fast</h1>
              <p className="text-gray-600">
                Weekly payments in your bank account.
              </p>
            </div>
          </div>
          <div className="flex flex-col border px-12 py-8 gap-12 w-[22vw]">
            <div>
              <i className="fa-solid fa-person"></i>
              <h1 className="font-semibold pb-1 pt-4">
                Get support at every turn
              </h1>
              <p className="text-gray-600">
                If there’s anything that you need, you can reach us anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 w-[50vw] flex flex-row lg:w-[63vw] mx-auto">
        <div>
          <img src="/rideHero.webp" className="w-[70vw]" alt="home" />
        </div>
        <div className="text-black pl-[10vw] flex flex-col justify-center gap-8 pb-12 mt-[2vw]">
          <h1 className="text-5xl tracking-normal font-semibold">
            Ride with friends seamlessly
          </h1>
          <p>
            Riding with friends just got easier: set up a group ride in the Uber
            app, invite your friends, and arrive at your destination. Friends
            who ride together save together.
          </p>
          <div className="flex flex-row items-center gap-5">
            <div>
              <button className="text-gray-100 px-7 py-2 rounded-md bg-black transition duration-100 hover:bg-gray-900">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-black text-3xl py-12 text-center">
        <button className="border-b border-black pb-1">
          Already have an account? Sign in
        </button>
      </div>
    </div>
  );
};

export default Ride;
