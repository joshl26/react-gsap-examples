import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
console.clear();

const ControllingWhenReactCreatesAnimation = () => {
  const app = useRef();

  const [count, setCount] = useState(0);
  const [delayedCount, setDelayedCount] = useState(0);

  // only runs on first render
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box-1", { rotation: "+=360" });
    }, app);
    return () => ctx.revert();
  }, []);

  // runs on first render and every time delayedCount changes
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box-2", { rotation: "+=360" });
    }, app);
    return () => ctx.revert();
  }, [delayedCount]);

  // runs on every render
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box-3", { rotation: "+=360" });
    }, app);
    return () => ctx.revert();
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedCount(count);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="app" ref={app}>
      <div>
        <button onClick={() => setCount(count + 1)}>
          Click to trigger a render
        </button>
      </div>
      <p>Count: {count}</p>
      <p>Delayed Count: {delayedCount}</p>
      <p>Renders: {1 + delayedCount + count}</p>
      <div className="flex-row">
        <div className="box box-1 purple">First render</div>
        <div className="box box-2 blue">
          First render & delayed count change
        </div>
        <div className="box box-3 red">Every render</div>
      </div>
    </div>
  );
};

export default ControllingWhenReactCreatesAnimation;
