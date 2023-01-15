const { useLayoutEffect, useRef } = React;

function App() {
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
      <div className="circle" ref={circle}>Ref</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);