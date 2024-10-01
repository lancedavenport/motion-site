import logo from "./assets/white_logo.png";
import moneyGif from "./assets/falling_money.gif";
import mainVideo from "./assets/main_video.gif"; // Main Motion Video GIF for center
import spiralGif from "./assets/motion-spiral.gif";
import telegramButton from "./assets/telegram_button.gif"; // Telegram button GIF
import chartButton from "./assets/chart_button.gif"; // Chart button GIF
import twitterButton from "./assets/twitter_button.gif"; // Twitter button GIF

const MainMotionComponent = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center">
      {/* Top logo */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-5 left-5 w-16 md:w-20"
      />

      {/* Falling Money GIF */}
      <img
        src={moneyGif}
        alt="Falling Money"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
      />

      {/* Spiral GIF */}
      <img
        src={spiralGif}
        alt="Spiral Motion"
        className="absolute top-10 right-2 md:top-16 md:right-16 w-20 md:w-36"
      />

      {/* Main Content */}
      <div className="relative z-10 text-center w-full px-4 mt-12 flex flex-col items-center">
        <img
          src={mainVideo}
          alt="Main Motion Video"
          className="w-64 md:w-96 lg:w-[32rem] h-auto"
        />

        {/* Contract Address */}
        <div className="bg-gray-900 bg-opacity-75 text-white py-2 px-4 mt-6 rounded-lg">
          <p className="text-sm md:text-lg font-mono">
            CA: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </p>
        </div>

        {/* Buttons with GIFs */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mt-6">
          {/* Telegram Button */}
          <a
            href="https://t.me/yourtelegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={telegramButton}
              alt="Telegram Button"
              className="w-20 md:w-28 lg:w-32 h-auto"
            />
          </a>

          {/* Chart Button */}
          <a
            href="https://yourchartlink.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={chartButton}
              alt="Chart Button"
              className="w-20 md:w-28 lg:w-32 h-auto"
            />
          </a>

          {/* Twitter Button */}
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitterButton}
              alt="Twitter Button"
              className="w-20 md:w-28 lg:w-32 h-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainMotionComponent;
