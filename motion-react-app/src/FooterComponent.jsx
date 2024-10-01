import footerGif from "./assets/footer.gif"; // Footer background GIF
import telegramButton from "./assets/telegram_button.gif"; // Telegram button GIF
import chartButton from "./assets/chart_button.gif"; // Chart button GIF
import twitterButton from "./assets/twitter_button.gif"; // Twitter button GIF

const FooterComponent = () => {
  return (
    <div
      className="relative w-full h-auto py-10 flex items-center justify-center bg-black"
      style={{
        backgroundImage: `url(${footerGif})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Buttons for social links */}
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        {/* Telegram Button */}
        <a
          href="https://t.me/yourtelegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={telegramButton}
            alt="Telegram Button"
            className="w-20 h-auto md:w-28 lg:w-32"
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
            className="w-20 h-auto md:w-28 lg:w-32"
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
            className="w-20 h-auto md:w-28 lg:w-32"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterComponent;
