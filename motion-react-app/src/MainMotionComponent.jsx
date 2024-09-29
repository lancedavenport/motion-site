import logo from "./assets/white_logo.png";
import moneyGif from "./assets/falling_money.gif";
import mainVideo from "./assets/main_video.gif";
import spiralGif from "./assets/motion-spiral.gif";
import xIcon from "./assets/x_icon.png";

const MainMotionComponent = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Top logo */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-5 left-5 w-20 md:w-24" // Adjusted width for better placement
      />

      {/* Main Video GIF */}
      <img
        src={mainVideo}
        alt="Main Video"
        className="absolute top-1/2 left-10 w-32 md:w-48 transform -translate-y-1/2"
      />

      {/* Falling Money GIF */}
      <img
        src={moneyGif}
        alt="Falling Money"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
      />

      {/* Spiral GIF - Above and to the right of "MOTION MOTION" */}
      <img
        src={spiralGif}
        alt="Spiral Motion"
        className="absolute top-10 right-10 md:top-16 md:right-16 w-28 md:w-36"
      />

      {/* Centered Content */}
      <div className="relative z-10 text-center w-full px-4 md:px-0 mt-12">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-wide">
          MOTION MOTION
        </h1>

        {/* Contract Address */}
        <div className="bg-gray-900 bg-opacity-75 text-white py-2 px-8 mt-6 rounded-lg inline-block">
          <p className="text-md md:text-lg font-mono">
            CA: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <a
            href="#"
            className="flex items-center space-x-2 bg-red-500 px-4 py-2 rounded-full shadow-lg"
          >
            <img src={xIcon} alt="Telegram" className="w-5 h-5" />
            <span className="text-white">TELEGRAM</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 bg-green-500 px-4 py-2 rounded-full shadow-lg"
          >
            <img src={xIcon} alt="Chart" className="w-5 h-5" />
            <span className="text-white">CHART</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 bg-blue-500 px-4 py-2 rounded-full shadow-lg"
          >
            <img src={xIcon} alt="Twitter" className="w-5 h-5" />
            <span className="text-white">TWITTER</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainMotionComponent;
