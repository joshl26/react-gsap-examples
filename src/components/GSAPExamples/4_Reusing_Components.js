import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const Box = ({ children, className, anim }) => {
  return (
    <div className={"box " + className} data-animate={anim}>
      {children}
    </div>
  );
};

const ReusingComponents = () => {
  const app = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Target the two specific elements we have asigned the animate class
      gsap.to("[data-animate='rotate']", {
        rotation: 360,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });

      gsap.to("[data-animate='move']", {
        x: 100,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      });

      gsap.set(".dont-animate", {
        backgroundColor: "red",
      });
    }, app); // <- Scope!

    return () => ctx.revert();
  }, []);

  return (
    <div className="app" ref={app}>
      <Box anim="rotate">Box</Box>
      <Box className="dont-animate">Don't Animate Me</Box>
      <Box anim="move">Box</Box>
    </div>
  );
};

export default ReusingComponents;
