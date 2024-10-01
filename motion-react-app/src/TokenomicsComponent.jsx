import pieChart from "./assets/pie_chart.png"; // Pie chart image
import motionGif from "./assets/motion_linear_horizontal.gif"; // Motion linear GIF
import globeGif from "./assets/motion_globe_white.gif"; // Globe GIF
import tokenomicsInfo from "./assets/tokenomics_info.png"; // Tokenomics info image

const TokenomicsComponent = () => {
  return (
    <div className="relative w-full min-h-screen text-white flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-32">
      {/* Motion GIF at the top */}
      <div className="absolute top-0 w-full h-32 md:h-40 lg:h-48 z-20">
        <img
          src={motionGif}
          alt="Motion Linear"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Globe GIF in the background, moved down and to the left */}
      <div className="absolute bottom-0 left-[-25%] w-full h-full z-10 opacity-20 transform translate-y-[20%]">
        <img
          src={globeGif}
          alt="Globe"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Area */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center space-y-20 lg:space-y-24 mt-28">
        {/* Pie Chart and Tokenomics Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between w-full max-w-6xl space-y-16 lg:space-y-0">
          {/* Pie Chart */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={pieChart}
              alt="Pie Chart"
              className="w-80 h-auto lg:w-[28rem]"
            />
          </div>

          {/* Tokenomics Info Image */}
          <div className="w-full lg:w-1/2 flex justify-start lg:pl-20">
            <img
              src={tokenomicsInfo}
              alt="Tokenomics Info"
              className="w-full lg:w-[28rem] h-auto"
            />
          </div>
        </div>

        {/* Contract Address and Buttons */}
        <div className="w-full text-center space-y-6">
          <p className="font-mono text-white text-lg tracking-widest">
            CONTRACT ADDRESS: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-black/80 border border-gray-600 text-white py-2 px-8 rounded-full hover:bg-gray-800 transition-all duration-200">
              BUY $MOTION
            </button>
            <button className="bg-black/80 border border-gray-600 text-white py-2 px-8 rounded-full hover:bg-gray-800 transition-all duration-200">
              $MOTION CHART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsComponent;
