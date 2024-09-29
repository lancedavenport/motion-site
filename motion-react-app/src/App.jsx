import background from "./assets/background.png";
import MainMotionComponent from "./MainMotionComponent";

function App() {
  return (
    <div
      className="w-screen min-h-screen bg-no-repeat bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Main Component */}
      <MainMotionComponent />
    </div>
  );
}

export default App;
