const Pricing = () => {
  return (
    <div>
      <h1 className="font-extrabold text-5xl text-gray-700 text-center py-[90px] ">
        Our Approach to <br /> Pricing{' '}
      </h1>
      <div className="w-full bg-gray-200 h-[17vw]">
        <div className="flex justify-center">
          <div className="flex flex-col pt-12">
            <h1 className="text-black font-semibold pt-8 text-2xl ">
              We ride without extra charges
            </h1>
            <ul className="list-disc pl-5 py-8 ">
              <li>
                Your safety is our top priority, ensuring well-maintained bikes
                for a worry-free ride.
              </li>
              <li>
                Your comfort is guaranteed with bikes tailored to provide a
                smooth and enjoyable experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        src="/deskWork.svg"
        alt="deskwork image"
        className="w-[50vw] mx-auto pt-[150px]"
      />
    </div>
  );
};

export default Pricing;
