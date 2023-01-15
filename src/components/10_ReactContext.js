import gsap from "gsap";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  createContext,
} from "react";

const SelectedContext = createContext();

function Box({ children, id }) {
  const el = useRef();
  const { selected } = useContext(SelectedContext);
  const ctx = gsap.context(() => {});

  useEffect(() => {
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    ctx.add(() => {
      gsap.to(el.current, {
        x: selected === id ? 200 : 0,
      });
    });
  }, [selected, id, ctx]);

  return (
    <div className="box" ref={el}>
      {children}
    </div>
  );
}

function Boxes() {
  return (
    <div className="boxes">
      <Box id="1">Box 1</Box>
      <Box id="2">Box 2</Box>
      <Box id="3">Box 3</Box>
    </div>
  );
}

function Menu() {
  const { selected, setSelected } = useContext(SelectedContext);

  const onChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="menu">
      <label>
        <input
          onChange={onChange}
          checked={selected === "1"}
          type="radio"
          value="1"
          name="selcted"
        />{" "}
        Box 1
      </label>
      <label>
        <input
          onChange={onChange}
          checked={selected === "2"}
          type="radio"
          value="2"
          name="selcted"
        />{" "}
        Box 2
      </label>
      <label>
        <input
          onChange={onChange}
          checked={selected === "3"}
          type="radio"
          value="3"
          name="selcted"
        />{" "}
        Box 3
      </label>
    </div>
  );
}

const ReactContext = () => {
  const [selected, setSelected] = useState("2");

  return (
    <div className="app">
      <SelectedContext.Provider value={{ selected, setSelected }}>
        <Menu />
        <Boxes />
      </SelectedContext.Provider>
    </div>
  );
};

export default ReactContext;
