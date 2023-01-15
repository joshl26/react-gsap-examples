import "./App.css";

import AnimatingOnInteraction from "./components/1_AnimatingOnInteraction";
import TargetElementsWithRef from "./components/2_TargetingElementsWithRefs";
import ScopedSelectors from "./components/3_ScopedSelectors";
import ReusingComponents from "./components/4_Reusing_Components";
import CreatingControllingTimelines from "./components/5_CreatingControllingTimelines";
import ControllingWhenReactCreatesAnimation from "./components/6_ControllingWhenReactCreatesAnimation";
import ReactingToChangeInState from "./components/7_ReactingToChangesInState";
import PassingDownATimelineProp from "./components/8_PassingDownATimelineProp";
import PassingDownACallback from "./components/9_PassingDownACallback";
import ReactContext from "./components/10_ReactContext";
import ImperativeCommunication from "./components/11_ImperativeComunication";
import ReuseableAnimations from "./components/12_ReuseableAnimations";
import ExitAnimations from "./components/14_ExitAnimations";
import ExitAnimationsFromArray from "./components/14_ExitAnimationsFromArray";
import ExitAnimationsUsingFlip from "./components/14_ExitAnimationsUsingFlip";

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
      <div className="spacer" />
      <PassingDownATimelineProp />
      <div className="spacer" />
      <PassingDownACallback />
      <div className="spacer" />
      <ReactContext />
      <div className="spacer" />
      <ImperativeCommunication />
      <div className="spacer" />
      <ReuseableAnimations />
      <div className="spacer" />
      <ExitAnimations />
      <div className="spacer" />
      <ExitAnimationsFromArray />
      <div className="spacer" />
      <ExitAnimationsUsingFlip />
    </section>
  );
}

export default App;
