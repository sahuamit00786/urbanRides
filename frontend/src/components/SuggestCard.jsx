const SuggestCard = ({ title, detail, buttonData, buttonLink, image }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-6 rounded-xl w-[20vw]">
      {/* Left side: Title, Detail, Button */}
      <div className="w-[60%]">
        <h1 className="text-lg text-gray-800 font-bold mb-2">{title}</h1>
        <p className="text-sm tracking-normal text-gray-700 mb-4">{detail}</p>
        <a href={buttonLink}>
          <button className="bg-gray-500 text-sm tracking-tighter text-white py-1 px-4 rounded hover:bg-gray-700 transition-colors">
            {buttonData}
          </button>
        </a>
      </div>

      {/* Right side: Image */}
      <div className="w-[40%]">
        <img src={image} alt="car" className="w-full object-contain" />
      </div>
    </div>
  );
};

export default SuggestCard;
