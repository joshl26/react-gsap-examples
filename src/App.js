import "./App.css";

import AnimatingOnInteraction from "./components/1_AnimatingOnInteraction";
import TargetElementsWithRef from "./components/2_TargetingElementsWithRefs";
import ScopedSelectors from "./components/3_ScopedSelectors";
import ReusingComponents from "./components/4_Reusing_Components";
import CreatingControllingTimelines from "./components/5_CreatingControllingTimelines";
import ControllingWhenReactCreatesAnimation from "./components/6_ControllingWhenReactCreatesAnimation";
import ReactingToChangeInState from "./components/7_ReactingToChangesInState";

function App() {
  return (
    <section>
      <div>
        <h1>React GSAP Examples</h1>
        <div className="spacer" />
      </div>
      <div>
        <AnimatingOnInteraction />
        <div className="spacer" />
      </div>
      <TargetElementsWithRef />
      <div className="spacer" />
      <ScopedSelectors />
      <div className="spacer" />
      <ReusingComponents />
      <div className="spacer" />
      <CreatingControllingTimelines />
      <div className="spacer" />
      <ControllingWhenReactCreatesAnimation />
      <div className="spacer" />
      <ReactingToChangeInState />
    </section>
  );
}

export default App;
