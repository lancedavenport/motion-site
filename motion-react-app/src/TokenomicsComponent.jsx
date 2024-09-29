import pieChart from "./assets/pie_chart.png"; // Pie chart image
import motionGif from "./assets/motion_linear_horizontal.gif"; // Motion linear GIF
import globeGif from "./assets/globe.gif"; // Globe GIF

const TokenomicsComponent = () => {
  return (
    <div className="relative w-full min-h-screen text-white flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-16">
      {/* Motion GIF at the top */}
      <div className="absolute top-0 w-full h-24 md:h-32 lg:h-40 z-20">
        {" "}
        {/* Ensure higher z-index */}
        <img
          src={motionGif}
          alt="Motion Linear"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Globe GIF in the background */}
      <div className="absolute inset-0 opacity-30 z-10">
        {" "}
        {/* Higher opacity, set correct z-index */}
        <img
          src={globeGif}
          alt="Globe"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Area */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center">
        {/* Pie Chart and Tokenomics Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Pie Chart */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0 flex justify-center mt-50">
            <img src={pieChart} alt="Pie Chart" className="w-full h-auto" />
          </div>

          {/* Tokenomics Boxes */}
          <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 space-y-6 text-lg text-left">
            <h3 className="text-xl font-bold mb-4">TOKENOMICS</h3>
            <div className="bg-black border border-gray-600 rounded-md p-4">
              <h3 className="font-bold">TAXES</h3>
              <p>0% BUY, 0% SELL</p>
            </div>
            <div className="bg-black border border-gray-600 rounded-md p-4">
              <h3 className="font-bold">CONTRACT</h3>
              <p>LIQUIDITY LOCKED 6.9 YEARS + CONTRACT RENOUNCED</p>
            </div>
            <div className="bg-black border border-gray-600 rounded-md p-4">
              <h3 className="font-bold">TOTAL SUPPLY</h3>
              <p>100,000,000,000 $MOTION (100B TOKENS)</p>
            </div>
          </div>
        </div>

        {/* Contract Address and Buttons */}
        <div className="mt-8 w-full text-center">
          <p className="font-mono">
            CONTRACT ADDRESS: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="bg-black border border-gray-600 text-white py-2 px-6 rounded-full hover:bg-gray-800">
              BUY $MOTION
            </button>
            <button className="bg-black border border-gray-600 text-white py-2 px-6 rounded-full hover:bg-gray-800">
              $MOTION CHART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsComponent;
