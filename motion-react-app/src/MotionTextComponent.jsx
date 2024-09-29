import doughnutGif from "./assets/motion-doughnut.gif"; // Import doughnut GIF

const MotionTextComponent = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-5">
      {/* Doughnut GIF */}
      <div className="flex-shrink-0 w-96 md:w-[30rem] lg:w-[50rem] mt-8">
        {" "}
        {/* Added margin-top to offset text */}
        <img
          src={doughnutGif}
          alt="Motion Doughnut"
          className="w-full h-auto"
        />
      </div>

      {/* Text Content */}
      <div className="ml-24 lg:ml-10 text-white max-w-2xl mt-[-40px] mb-12">
        {" "}
        {/* Offset text, wider text area */}
        {/* Heading with gradient text */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-transparent bg-clip-text mb-4">
          NO EMOTION. JUST MOTION.
        </h1>
        {/* Paragraph Text */}
        <div className="text-lg md:text-xl space-y-3">
          <p>DO YOU GOT THAT MOTION MOTION?</p>
          <p>MONEY MOTION.</p>
          <p>DROP THE E. JUST MOTION.</p>
          <p>IF YOU&apos;RE NOT FIRST, YOU&apos;RE LAST.</p>
          <p>I GOT MOTION.</p>
          <p>I&apos;LL KNOW I HAVE ENOUGH MOTION WHEN I STOP PULLING OUT.</p>
          <p>MOTION IS FOR WINNERS.</p>
          <p>IGGY&apos;S BOOTY GOT MOTION.</p>
        </div>
      </div>
    </div>
  );
};

export default MotionTextComponent;
