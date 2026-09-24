import { useState } from "react";

export default function BasicState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Phase 1: Adding a State Variable</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
