import { Homepage } from "./components/Homepage";
import { About } from "./components/About";
import { TechnologiesTools } from "./components/TechnologiesTools";
import "./index.css";

function App() {
  return (
    <div id="app-scroll-root" className="min-h-screen overflow-x-hidden overflow-y-auto">
      <Homepage />
      <About />
      <TechnologiesTools />
    </div>
  );
}

export default App;
