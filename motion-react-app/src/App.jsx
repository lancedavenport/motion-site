// src/App.jsx
import { useEffect, useRef } from "react"; // Import hooks for parallax effect
import background from "./assets/background.png";
import MainMotionComponent from "./MainMotionComponent";
import MotionTextComponent from "./MotionTextComponent";
import BuyMotionComponent from "./BuyMotionComponent";
import TokenomicsComponent from "./TokenomicsComponent.jsx"; // Correct extension

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
      className="w-screen min-h-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Main Motion Component */}
      <MainMotionComponent />

      {/* Motion Text Component */}
      <MotionTextComponent />

      {/* Buy Motion Component */}
      <BuyMotionComponent />

      {/* Tokenomics Component */}
      <TokenomicsComponent />
    </div>
  );
}

export default App;
