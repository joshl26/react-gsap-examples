import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fragment, useLayoutEffect } from "react";
import "./ScrollTriggerProgressBar.scss";

const ScrollTriggerProgressBar = () => {
  //Use useLayoutEffect for for registering gsap
  useLayoutEffect(() => {
    const trigger = gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      ease: "none",
      scrollTrigger: { scrub: 0.3 },
    });

    //Cleanup
    return () => {
      trigger.revert();
      ScrollTrigger.getById("progress").kill();
    };
  }, []);

  return (
    <Fragment>
      <progress max="100" value="0"></progress>
      <div className="container">
        <section>
          <p>Scroll to add some color to your life!🎨</p>
        </section>
        <section>
          <p>You're doing great, keep going😘</p>
        </section>
        <section>
          <p>Keep scrolling just a little more 🏃‍♀️</p>
        </section>
        <section>
          <p>
            Here you go!
            <br />
            Did you like it?🌈
          </p>
        </section>
      </div>
    </Fragment>
  );
};

export default ScrollTriggerProgressBar;
