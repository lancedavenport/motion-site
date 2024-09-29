import background from "./assets/background.png";
import MainMotionComponent from "./MainMotionComponent";
import MotionTextComponent from "./MotionTextComponent"; // Import the new component

function App() {
  return (
    <div
      className="w-screen min-h-screen bg-no-repeat bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Main Motion Component */}
      <MainMotionComponent />

      {/* Motion Text Component */}
      <MotionTextComponent />
    </div>
  );
}

export default App;
