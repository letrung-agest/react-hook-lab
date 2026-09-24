import { useRef, useState } from "react";

export default function UseRefDemo() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const [, forceRender] = useState(0);

  renderCount.current += 1;

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Click Focus input" />
      <button onClick={focusInput}>Focus input</button>
      <p>Render count: {renderCount.current}</p>
      <button onClick={() => forceRender((value) => value + 1)}>
        Force render
      </button>
    </div>
  );
}
