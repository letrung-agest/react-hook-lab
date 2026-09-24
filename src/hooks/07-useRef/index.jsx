import { useRef, useState } from "react";

export default function UseRefTab() {
  const countRef = useRef(0);
  let x = 0;
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const handleClick = () => {
    countRef.current += 1;
    x += 1
    console.log(`REF value: ${countRef.current}`);
    console.log(`LET value: ${x}`);
    setCount(count + 1);
  }

  const handleIncreaseRef = () => {
    countRef.current += 1;
    console.log(`REF value: ${countRef.current}`);
  }

  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div className="hook-tab">
      <h2>useRef - Learning Path</h2>

      <p>Ref value: {countRef.current}</p>
      <p>State value: {count}</p>

      <button onClick={handleIncreaseRef}>
        Increase REF
      </button>

      <button onClick={handleClick}>
        Increase ALL
      </button>

      <br />
      <input
        ref={inputRef}
        type="text"
      ></input>
      <br />
      <button onClick={handleFocusInput}>Focus input</button>
    </div>
  );
}