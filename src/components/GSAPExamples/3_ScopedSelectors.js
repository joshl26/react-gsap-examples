import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./3_ScopedSelectors.css";

function ScopedSelectors() {
  const app = useRef();
  const circle = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.to(".box", { rotation: 360 });
      // or refs
      gsap.to(circle.current, { rotation: 360 });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={app} className="App">
      <div className="box">selector</div>
      <div className="circle" ref={circle}>
        Ref
      </div>
    </div>
  );
}

export default ScopedSelectors;
