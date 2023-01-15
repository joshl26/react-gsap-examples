import { useLayoutEffect, useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";

const FadeIn = forwardRef(({ children, stagger = 0, x = 0 }, ref) => {
  const el = useRef();
  const animation = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animation.current = gsap.from(el.current.children, {
        opacity: 0,
        stagger,
        x,
      });
    });
    return () => ctx.revert();
  }, [stagger, x]);

  useEffect(() => {
    // forward the animation instance
    if (typeof ref === "function") {
      ref(animation.current);
    } else if (ref) {
      ref.current = animation.current;
    }
  }, [ref]);

  return <span ref={el}>{children}</span>;
});

const ReuseableAnimations = () => {
  const animation = useRef();

  const toggle = () => {
    animation.current.reversed(!animation.current.reversed());
  };

  return (
    <div className="app">
      <div>
        <button onClick={toggle}>Toggle</button>
      </div>
      <FadeIn stagger={0.1} x={100} ref={animation}>
        <div className="box">Box 1</div>
        <div className="box">Box 2</div>
      </FadeIn>
    </div>
  );
};

export default ReuseableAnimations;
