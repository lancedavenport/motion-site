import rightGif from "./assets/motion_circle_right_loop.gif"; // Import the GIF for the right

const BuyMotionComponent = () => {
  return (
    <div className="relative w-full min-h-screen flex items-start justify-between px-8 md:px-16 lg:px-24 py-16">
      {/* Text Content */}
      <div className="text-white max-w-2xl">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-transparent bg-clip-text mb-8">
          HOW TO BUY $MOTION?
        </h1>

        {/* Steps */}
        <div className="space-y-10 text-lg md:text-xl">
          {/* Step 1 */}
          <div>
            <h2 className="text-red-500 font-bold text-3xl md:text-4xl">1</h2>
            <h3 className="text-red-500 font-bold">DOWNLOAD A WALLET.</h3>
            <p className="text-white">
              Download a Phantom wallet on browser extension or on the appstore.
              This wallet will act as a digital safe where you can keep your
              $MOTION tokens & interact with Ethereum activities.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <h2 className="text-green-500 font-bold text-3xl md:text-4xl">2</h2>
            <h3 className="text-green-500 font-bold">SECURE YOUR ETH.</h3>
            <p className="text-white">
              Purchase Ethereum within the Phantom wallet itself (using
              moonpay), or use an exchange to deposit Ethereum into your wallet
              address.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <h2 className="text-blue-500 font-bold text-3xl md:text-4xl">3</h2>
            <h3 className="text-blue-500 font-bold">GET MOTION.</h3>
            <p className="text-white">
              Head to Uniswap to purchase your $BEEF. Paste the $BEEF contract
              address to swap your SOL into $BEEF.
            </p>
          </div>
        </div>
      </div>

      {/* Right GIF - Centered vertically */}
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
