import { useState, useLayoutEffect } from "react";
import gsap from "gsap";

const ExitAnimationsFromArray = () => {
  const [items, setItems] = useState(() => [
    { id: 0, color: "blue" },
    { id: 1, color: "red" },
    { id: 2, color: "purple" },
  ]);
  const [ctx] = useState(() => gsap.context(() => {}));

  const removeItem = (value) => {
    setItems((prev) => prev.filter((item) => item !== value));
  };

  useLayoutEffect(() => {
    ctx.add("remove", (item, target) => {
      gsap.to(target, {
        opacity: 0,
        onComplete: () => removeItem(item),
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="app boxes">
      {items.map((item) => (
        <div
          className={`box ${item.color}`}
          key={item.id}
          onClick={(e) => ctx.remove(item, e.currentTarget)}
        >
          Click Me
        </div>
      ))}
    </div>
  );
};

export default ExitAnimationsFromArray;
