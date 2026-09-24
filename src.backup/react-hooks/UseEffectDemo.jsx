import { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Effect ran because count changed:", count);

    return () => {
      console.log("Cleanup before the next effect/unmount");
    };
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((value) => value + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((value) => value + 1)}>Change count</button>
      <p>Timer: {seconds}s</p>
    </div>
  );
}
