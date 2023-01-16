import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";

const TargetElementsWithRef = () => {
  const boxRef = useRef();

  useLayoutEffect(() => {
    // Refs allow you to access DOM nodes
    console.log(boxRef); // { current: div.box }
    // then we can animate them like so...
    gsap.to(boxRef.current, {
      rotation: "+=360",
    });
  });

  return (
    <div className="App">
      <h2>Targeting Elements with Refs</h2>
      <div className="box" ref={boxRef}>
        Hello
      </div>
    </div>
  );
};

export default TargetElementsWithRef;
