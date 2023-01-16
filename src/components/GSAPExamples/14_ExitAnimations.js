import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";

const ExitAnimations = () => {
  const app = useRef();
  const [active, setActive] = useState(true);
  const [ctx] = useState(gsap.context(() => {}, app));
  useLayoutEffect(() => {
    ctx.add("remove", () => {
      gsap.to(ctx.selector(".box"), {
        opacity: 0,
        onComplete: () => setActive(false),
      });
    });
    return () => ctx.revert();
  }, [ctx]);

  return (
    <div className="app" ref={app}>
      {/* <button className="button" onClick={() => active && remove()}> */}
      <button className="button" onClick={() => active && ctx.remove()}>
        {active ? "Remove Box" : "Done"}
      </button>
      {active ? <div className="box">Box</div> : null}
    </div>
  );
};

export default ExitAnimations;
