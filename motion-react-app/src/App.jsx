import { useEffect, useRef } from "react";
import background from "./assets/background.png";
import MainMotionComponent from "./MainMotionComponent";
import MotionTextComponent from "./MotionTextComponent";
import BuyMotionComponent from "./BuyMotionComponent";
import TokenomicsComponent from "./TokenomicsComponent.jsx";
import FooterComponent from "./FooterComponent";

function App() {
  const backgroundRef = useRef(null); // Create a ref for the background div
  const ticking = useRef(false); // Ref to prevent multiple rAF calls

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (backgroundRef.current) {
            const scrollTop = window.pageYOffset;
            backgroundRef.current.style.backgroundPositionY = `${
              scrollTop * 0.5
            }px`; // Adjust scroll speed
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className="flex flex-col min-h-screen w-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="flex-grow">
        <MainMotionComponent />
        <MotionTextComponent />
        <BuyMotionComponent />
        <TokenomicsComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
