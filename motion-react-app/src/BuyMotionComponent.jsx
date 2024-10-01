import rightGif from "./assets/motion_circle_right_loop.gif"; // Import the GIF for the right
import number1 from "./assets/number_1.png"; // Number 1 graphic
import number2 from "./assets/number_2.png"; // Number 2 graphic
import number3 from "./assets/number_3.png"; // Number 3 graphic

const BuyMotionComponent = () => {
  return (
    <div className="relative w-full min-h-screen flex items-start justify-between px-8 md:px-16 lg:px-24 py-16">
      {/* Text Content */}
      <div className="text-white max-w-2xl">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-transparent bg-clip-text mb-12">
          HOW TO BUY $MOTION?
        </h1>

        {/* Steps */}
        <div className="space-y-12 text-lg md:text-xl">
          {/* Step 1 */}
          <div className="flex items-start space-x-4">
            <img
              src={number1}
              alt="Number 1"
              className="w-12 md:w-16 lg:w-20"
            />
            <div>
              <h3 className="text-red-500 font-bold text-2xl md:text-3xl">
                DOWNLOAD A WALLET.
              </h3>
              <p className="text-white">
                Download a Phantom wallet on browser extension or on the
                appstore. This wallet will act as a digital safe where you can
                keep your $MOTION tokens & interact with Ethereum activities.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4">
            <img
              src={number2}
              alt="Number 2"
              className="w-12 md:w-16 lg:w-20"
            />
            <div>
              <h3 className="text-green-500 font-bold text-2xl md:text-3xl">
                SECURE YOUR ETH.
              </h3>
              <p className="text-white">
                Purchase Ethereum within the Phantom wallet itself (using
                moonpay), or use an exchange to deposit Ethereum into your
                wallet address.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4">
            <img
              src={number3}
              alt="Number 3"
              className="w-12 md:w-16 lg:w-20"
            />
            <div>
              <h3 className="text-blue-500 font-bold text-2xl md:text-3xl">
                GET MOTION.
              </h3>
              <p className="text-white">
                Head to Uniswap to purchase your $BEEF. Paste the $BEEF contract
                address to swap your SOL into $BEEF.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right GIF */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[30rem] md:w-[35rem] lg:w-[40rem] h-auto">
        <img
          src={rightGif}
          alt="Motion Circle Right Loop"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default BuyMotionComponent;
