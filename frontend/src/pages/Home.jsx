import SuggestCard from '../components/SuggestCard';

const Home = () => {
  return (
    <div className=" text-white min-h-screen">
      <div className="bg-black h-[92vh]">
        <div className="flex flex-col lg:flex-row w-[90vw] lg:w-[70vw] mx-auto pt-12 lg:pt-24">
          {/* Left Section */}
          <div className="lg:w-1/2 w-full pt-8 lg:pt-12 lg:pl-[5vw] text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-extrabold py-6 lg:py-8 leading-normal">
              Go anywhere with <br /> Urban Rides
            </h1>
            <p className="pb-4">Request a ride, hop in, and go</p>

            {/* Location and Destination Inputs */}
            <div className="relative flex flex-col gap-4 items-center lg:items-start">
              {/* Vertical Line */}
              <div className="absolute lg:h-12 h-8 left-[22px] top-[25px] bottom-2.5 w-0 border-l-2 border-gray-500"></div>

              {/* Enter Location */}
              <div className="flex items-center gap-3 text-black border w-full lg:w-[20vw] px-4 py-2 bg-white">
                <div className="w-3 h-3 border-2 border-black rounded-full"></div>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="flex-1 focus:outline-none border-0"
                />
                <i className="fa-solid fa-paper-plane"></i>
              </div>

              {/* Enter Destination */}
              <div className="flex items-center gap-3 text-black border w-full lg:w-[20vw] px-4 py-2 bg-white">
                <div className="w-3 h-3 border-2 border-black bg-black rounded-full"></div>
                <input
                  type="text"
                  placeholder="Enter destination"
                  className="flex-1 focus:outline-none"
                />
                <i className="fa-solid fa-map-pin"></i>
              </div>
            </div>

            <button className="mt-12 border px-5 hover:bg-gray-200 transition duration-200 hover:text-black py-2">
              See prices
            </button>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <img
              src="/homeImage.webp"
              className="w-[50vw] lg:w-[25vw]"
              alt="homeImage"
            />
          </div>
        </div>
      </div>
      <div className="py-24 w-[90vw] lg:w-[70vw] mx-auto">
        <h1 className="text-black pb-12 text-2xl font-bold text-center">
          Suggestions
        </h1>
        <div className="flex px-12 flex-row justify-between">
          <SuggestCard
            title={'Ride'}
            detail={
              'Go anywhere with Urban rides. Request a ride, hop in, and go'
            }
            buttonData={'Details'}
            buttonLink={'/'}
            image={'/car.png'}
          />
          <SuggestCard
            title={'Rental Cars'}
            detail={
              'Your perfect rental car is a few clicks away . Learn more about Urban Ride Rent'
            }
            buttonData={'Details'}
            buttonLink={'/'}
            image={'/key.png'}
          />
          <SuggestCard
            title={'Reserve'}
            detail={
              'Reserve your ride in advance so you can relax on the day of your trp.'
            }
            buttonData={'Details'}
            buttonLink={'/'}
            image={'/calendar.png'}
          />
        </div>
      </div>
      <div className="py-24 w-[50vw] flex flex-row lg:w-[63vw] mx-auto">
        <div>
          <img src="/home2.webp" className="w-[70vw]" alt="home" />
        </div>
        <div className="text-black pl-[10vw] flex flex-col justify-center gap-8 pb-12 mt-[2vw]">
          <h1 className="text-5xl tracking-normal font-semibold">
            Drive when you <br /> want, make what <br /> you need
          </h1>
          <p>
            Make money on your schedule with deliveries or rides—or both. You
            can use your own car or choose a rental through Uber.
          </p>
          <div className="flex flex-row items-center gap-5">
            <div>
              <button className="text-gray-100 px-7 py-2 rounded-md bg-black transition duration-100 hover:bg-gray-900">
                Get started
              </button>
            </div>
            <div>
              <button className="border-b">
                Already have an account? Sign in
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 w-[50vw] flex flex-row lg:w-[63vw] mx-auto">
        <div className="text-black pr-[10vw] flex flex-col justify-center gap-8 pb-12 mt-[2vw]">
          <h1 className="text-5xl tracking-normal font-semibold">
            Make money by renting out your bike
          </h1>
          <p>
            Connect with thousands of drivers and earn more per week with
            UrbanRide’s free fleet management tools.
          </p>
          <div className="flex flex-row items-center gap-5">
            <div>
              <button className="text-gray-100 px-7 py-2 rounded-md bg-black transition duration-100 hover:bg-gray-900">
                Get started
              </button>
            </div>
            <div>
              <button className="border-b">
                Already have an account? Sign in
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src="/hero3.webp" className="w-[70vw]" alt="home" />
        </div>
      </div>
    </div>
  );
};

export default Home;
