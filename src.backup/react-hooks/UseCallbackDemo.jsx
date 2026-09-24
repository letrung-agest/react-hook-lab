import { useCallback, useState } from "react";

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const handleLog = useCallback(() => {
    console.log("Current count:", count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((value) => value + 1)}>+1</button>
      <button onClick={handleLog}>Log count</button>
    </div>
  );
}
