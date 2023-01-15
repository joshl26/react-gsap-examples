import "./App.css";
import { useLayoutEffect, useRef } from "react";

import AnimatingOnInteraction from "./components/AnimatingOnInteraction";

function App() {
  const comp = useRef(); // create a ref for the root level element (we'll use it later)

  useLayoutEffect(() => {
    // -- ANIMATION CODE HERE --

    return () => {
      // cleanup code (optional)
    };
  }, []); // <- empty dependency Array so it doesn't re-run on every render!

  return (
    <div className="app">
      <h1>React GSAP Examples</h1>
      <AnimatingOnInteraction />
    </div>
  );
}

export default App;
