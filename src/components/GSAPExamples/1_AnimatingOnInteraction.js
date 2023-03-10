import { gsap } from "gsap";
import classes from "./1_AnimatingOnInteraction.module.css";

function AnimatingOnInteraction() {
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  };

  return (
    <div className="App">
      <h2>Animating on Interaction</h2>
      <div
        className={classes.box}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        Hover Me
      </div>
    </div>
  );
}

export default AnimatingOnInteraction;
