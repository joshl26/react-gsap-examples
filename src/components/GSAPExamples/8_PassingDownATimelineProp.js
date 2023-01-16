import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

console.clear();

const Box = ({ children, timeline, index }) => {
  const el = useRef();
  // add 'left 100px' animation to timeline
  useLayoutEffect(() => {
    timeline && timeline.to(el.current, { x: -100 }, index * 0.1);
  }, [timeline, index]);

  return (
    <div className="box" ref={el}>
      {children}
    </div>
  );
};

const Circle = ({ children, timeline, index, rotation }) => {
  const el = useRef();

  useLayoutEffect(() => {
    // add 'right 100px, rotate 360deg' animation to timeline
    timeline &&
      timeline.to(el.current, { rotate: rotation, x: 100 }, index * 0.1);
  }, [timeline, rotation, index]);

  return (
    <div className="circle" ref={el}>
      {children}
    </div>
  );
}

const PassingDownATimelineProp = () => {
  const [reversed, setReversed] = useState(false);
  const [tl, setTl] = useState();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      setTl(tl);
    });
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    tl && tl.reversed(reversed);
  }, [reversed, tl]);

  return (
    <div className="app">
      <button onClick={() => setReversed(!reversed)}>Toggle</button>
      <Box timeline={tl} index={0}>
        Box
      </Box>
      <Circle timeline={tl} rotation={360} index={1}>
        Circle
      </Circle>
    </div>
  );
}

export default PassingDownATimelineProp;
