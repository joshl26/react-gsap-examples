import "./App.css";
import { useLayoutEffect, useRef } from "react";

import AnimatingOnInteraction from "./components/1_AnimatingOnInteraction";
import TargetElementsWithRef from "./components/2_TargetingElementsWithRefs";

function App() {
  const comp = useRef(); // create a ref for the root level element (we'll use it later)

  useLayoutEffect(() => {
    // -- ANIMATION CODE HERE --

    return () => {
      // cleanup code (optional)
    };
  }, []); // <- empty dependency Array so it doesn't re-run on every render!

  return (
    <div className="App">
      <h1>React GSAP Examples</h1>
      <div className="spacer" />
      <AnimatingOnInteraction />
      <div className="spacer" />
      <TargetElementsWithRef />
      <div className="spacer" />
    </div>
  );
}

export default App;
