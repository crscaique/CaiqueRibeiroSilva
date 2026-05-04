import { Homepage } from "./components/Homepage";
import { About } from "./components/About";
import { TechnologiesTools } from "./components/TechnologiesTools";
import { Projects } from "./components/Projects";
import { FindMe} from "./components/FindMe";
import "./index.css";

function App() {
  return (
    <div id="app-scroll-root" className="min-h-screen overflow-x-hidden overflow-y-auto">
      <Homepage />
      <About />
      <TechnologiesTools />
      <Projects/>
      <FindMe/>
    </div>
  );
}

export default App;
