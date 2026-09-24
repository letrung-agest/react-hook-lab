import { useState } from "react";

export default function UpdatingBasedOnPrevious() {
  const [count, setCount] = useState(0);

  const handleWrong = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log("Wrong way: called twice but count only increases by 1");
  };

  const handleCorrect = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    console.log("Correct way: called twice, count increases by 2");
  };

  return (
    <div>
      <h3>Phase 3: Updating Based on Previous State</h3>
      <p>Count: {count}</p>
      <button onClick={handleWrong}>Wrong Way (set twice)</button>
      <button onClick={handleCorrect}>Correct Way (prev callback)</button>
    </div>
  );
}
