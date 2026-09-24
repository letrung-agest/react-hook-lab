import { useLayoutEffect, useRef, useState, useEffect } from "react";

export default function UseLayoutEffectDemo() {
  const [count, setCount] = useState(0);
  const boxRef = useRef(null);

  // useLayoutEffect chạy TRƯỚC khi browser vẽ màn hình (blocking)
  useLayoutEffect(() => {
    console.log("useLayoutEffect: chạy TRƯỚC paint");
    if (boxRef.current) {
      boxRef.current.style.backgroundColor = count % 2 === 0 ? "lightblue" : "lightcoral";
    }
  }, [count]);

  // useEffect chạy SAU khi browser vẽ màn hình (non-blocking)
  useEffect(() => {
    console.log("useEffect: chạy SAU paint");
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          transition: "background-color 0.3s",
        }}
      />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p style={{ fontSize: "12px", color: "#666" }}>
        Check console: useLayoutEffect runs before paint, useEffect after.
      </p>
    </div>
  );
}
