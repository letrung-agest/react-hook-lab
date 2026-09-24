import { useCallback, useRef, useState } from "react";
import Product from "./Product";

export default function UseCallbackTab() {
  const [count, setCount] = useState(0);
  const previousRef = useRef(null);

  const handleClick = useCallback(() => {
    console.log("handleClick called");
    console.log("count:", count);
  }, []);

  console.log(
    "same reference:",
    previousRef.current === handleClick
  );

  previousRef.current = handleClick;

  return (
    <div className="hook-tab">
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      {/* <button onClick={handleClick}>
        Click
      </button> */}
      <hr />
      <Product />
    </div>
  );
}