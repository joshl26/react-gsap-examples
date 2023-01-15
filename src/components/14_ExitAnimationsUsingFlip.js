import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { gsap } from "gsap";

// import Flip from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/Flip.min.js";

let count = 0;

gsap.registerPlugin(Flip);
gsap.config({ trialWarn: false });

const wrapColor = gsap.utils.wrap(["blue", "red", "purple", "orange"]);

function createItem() {
  return { id: ++count, color: wrapColor(count), status: "entered" };
}

const ExitAnimationsUsingFlip = () => {
  const el = useRef();
  const q = gsap.utils.selector(el);

  const removeItems = useCallback(
    (exitingItems) => {
      if (!exitingItems.length) return;

      setLayout((prev) => ({
        state: Flip.getState(q(".box, .button")),
        items: prev.items.filter((item) => !exitingItems.includes(item)),
      }));
    },
    [q]
  );

  const [layout, setLayout] = useState(() => ({
    items: [createItem(), createItem(), createItem(), createItem()].reverse(),
  }));
  const [ctx] = useState(() => gsap.context(() => {}));

  useEffect(() => {
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!layout.state) return;

    // get the items that are exiting in this batch
    const exiting = layout.items.filter((item) => item.status === "exiting");
    ctx.add(() => {
      // Flip.from returns a timeline
      const timeline = Flip.from(layout.state, {
        absolute: true,
        ease: "power1.inOut",
        targets: q(".box, .button"),
        scale: true,
        simple: true,
        onEnter: (elements) => {
          return gsap.fromTo(
            elements,
            {
              opacity: 0,
              scale: 0,
            },
            {
              opacity: 1,
              scale: 1,
              delay: 0.2,
              duration: 0.3,
            }
          );
        },
        onLeave: (elements) => {
          return gsap.to(elements, {
            opacity: 0,
            scale: 0,
          });
        },
      });

      // remove the exiting items from the DOM after the animation is done
      timeline.add(() => removeItems(exiting));
    });
  }, [ctx, layout, q, removeItems]);

  const addItem = () => {
    setLayout({
      state: Flip.getState(q(".box, .button")),
      items: [createItem(), ...layout.items],
    });
  };

  const shuffle = () => {
    setLayout({
      state: Flip.getState(q(".box, .button")),
      items: [...gsap.utils.shuffle(layout.items)],
    });
  };

  const remove = (item) => {
    // set the item as exiting which will add a CSS class for display: none;
    item.status = "exiting";

    setLayout({
      ...layout,
      state: Flip.getState(q(".box, .button")),
    });
  };

  return (
    <div className="app text-center" ref={el}>
      <div>
        <button className="button" onClick={addItem}>
          Add Box
        </button>
        <button className="button" onClick={shuffle}>
          Shuffle
        </button>
      </div>
      <div className="boxes">
        {layout.items.map((item) => (
          <div
            id={`box-${item.id}`}
            key={item.id}
            className={`box ${item.color} ${item.status}`}
            onClick={() => remove(item)}
          >
            Click Me
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExitAnimationsUsingFlip;
