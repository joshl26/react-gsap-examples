import "./App.css";

import AnimatingOnInteraction from "./components/1_AnimatingOnInteraction";
import TargetElementsWithRef from "./components/2_TargetingElementsWithRefs";
import ScopedSelectors from "./components/3_ScopedSelectors";
import ReusingComponents from "./components/4_Reusing_Components";
import CreatingControllingTimelines from "./components/5_CreatingControllingTimelines";

function App() {
  return (
    <div className="App">
      <h1>React GSAP Examples</h1>
      <div className="spacer" />
      <AnimatingOnInteraction />
      <div className="spacer" />
      <TargetElementsWithRef />
      <div className="spacer" />
      <ScopedSelectors />
      <div className="spacer" />
      <ReusingComponents />
      <div className="spacer" />
      <CreatingControllingTimelines />
    </div>
  );
}

export default App;
