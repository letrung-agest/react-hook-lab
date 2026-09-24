import { useState, useRef, useEffect } from "react";

export default function TrackingChanges() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);
  const [log, setLog] = useState([]);

  useEffect(() => {
    if (count !== prevCountRef.current) {
      setLog((prev) => [...prev, `${prevCountRef.current} → ${count}`]);
      prevCountRef.current = count;
    }
  }, [count]);

  return (
    <div>
      <h3>Phase 8: Tracking Changes</h3>
      <p>Count: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <h4>Change Log:</h4>
      <ul>
        {log.map((entry, i) => <li key={i}>{entry}</li>)}
      </ul>
      <button onClick={() => setLog([])}>Clear</button>
    </div>
  );
}
