import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

console.clear();

const Box = ({ children }) => {
  return <div className="box">{children}</div>;
};

const Circle = ({ children }) => {
  return <div className="circle">{children}</div>;
};

const CreatingControllingTimelines = () => {
  const [reversed, setReversed] = useState(false);
  const app = useRef();
  // store the timeline in a ref.
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // add a box and circle animation to our timeline and play on first render
      console.log("creating timeline");
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap
        .timeline()
        .to(".box", {
          rotation: 360,
        })
        .to(".circle", {
          x: 100,
        });
    }, app);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // toggle the direction of our timeline
    console.log("toggling reverse to", reversed);
    tl.current.reversed(reversed);
  }, [reversed]);

  return (
    <div className="app" ref={app}>
      <div>
        <button onClick={() => setReversed(!reversed)}>Toggle</button>
      </div>
      <Box>box</Box>
      <Circle>circle</Circle>
    </div>
  );
};

export default CreatingControllingTimelines;
