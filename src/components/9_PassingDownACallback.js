import gsap from "gsap";
import { useLayoutEffect, useRef, useState, useCallback } from "react";

const Box = ({ children, addAnimation, index }) => {
  const el = useRef();

  useLayoutEffect(() => {
    console.log("Box effect");
    const ctx = gsap.context(() => {
      const animation = gsap.to(el.current, { x: -100 });
      addAnimation(animation, index);
    });

    return () => ctx.revert();
  }, [addAnimation, index]);

  return (
    <div className="box" ref={el}>
      {children}
    </div>
  );
}

const Circle = ({ children, addAnimation, index, rotation }) => {
  const el = useRef();

  useLayoutEffect(() => {
    console.log("Circle effect");
    const ctx = gsap.context(() => {
      const animation = gsap.to(el.current, { rotate: rotation, x: 100 });
      addAnimation(animation, index);
    });

    return () => ctx.revert();
  }, [addAnimation, index, rotation]);

  return (
    <div className="circle" ref={el}>
      {children}
    </div>
  );
}

const PassingDownACallback = () => {
  const [reversed, setReversed] = useState(false);
  const [tl, setTl] = useState();

  useLayoutEffect(() => {
    console.log("App effect");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      setTl(tl);
    });
    return () => ctx.revert();
  }, []);

  const addAnimation = useCallback(
    (animation, index) => {
      tl && tl.add(animation, index * 0.1);
    },
    [tl]
  );

  useLayoutEffect(() => {
    console.log("Reverse effect");
    tl && tl.reversed(reversed);
  }, [reversed, tl]);

  return (
    <div className="app">
      <button onClick={() => setReversed(!reversed)}>Toggle</button>
      <Box addAnimation={addAnimation} index={0}>
        Box
      </Box>
      <Circle addAnimation={addAnimation} index={1} rotation="360">
        Circle
      </Circle>
    </div>
  );
}

export default PassingDownACallback;
