import AnimatingOnInteraction from "./1_AnimatingOnInteraction";
import TargetElementsWithRef from "./2_TargetingElementsWithRefs";
import ScopedSelectors from "./3_ScopedSelectors";
import ReusingComponents from "./4_Reusing_Components";
import CreatingControllingTimelines from "./5_CreatingControllingTimelines";
import ControllingWhenReactCreatesAnimation from "./6_ControllingWhenReactCreatesAnimation";
import ReactingToChangeInState from "./7_ReactingToChangesInState";
import PassingDownATimelineProp from "./8_PassingDownATimelineProp";
import PassingDownACallback from "./9_PassingDownACallback";
import ReactContext from "./10_ReactContext";
import ImperativeCommunication from "./11_ImperativeComunication";
import ReuseableAnimations from "./12_ReuseableAnimations";
import ExitAnimations from "./14_ExitAnimations";
import ExitAnimationsFromArray from "./14_ExitAnimationsFromArray";


const GSAPExamples = () => {
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
      {/* <ExitAnimationsUsingFlip /> */}
    </section>
  );
};

export default GSAPExamples;
