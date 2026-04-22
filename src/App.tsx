import { Homepage } from "./components/Homepage";
import { About } from "./components/About";
import { TechnologiesTools } from "./components/TechnologiesTools";
import "./index.css";

const Header = () => {
  return (
    <title>
      Portfolio - Caique R. Silva
    </title>
  )
}
function App() {
  return (
    <div id="app-scroll-root" className="min-h-screen overflow-x-hidden overflow-y-auto">
      <Header/>
      <Homepage />
      <About />
      <TechnologiesTools />
    </div>
  );
}

export default App;
