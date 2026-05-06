import { Homepage } from "./components/Homepage";
import { About } from "./components/About";
import { TechnologiesTools } from "./components/TechnologiesTools";
import { Projects } from "./components/Projects";
import { FindMe} from "./components/FindMe";
import { AIAssistant } from "./components/AIAssistant";
import "./index.css";

function App() {
  return (
    <div id="app-scroll-root" className="min-h-screen overflow-x-hidden overflow-y-auto">
      <Homepage />
      <About />
      <TechnologiesTools />
      <Projects/>
      <FindMe/>
      <AIAssistant />
    </div>
  );
}

export default App;
