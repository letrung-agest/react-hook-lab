import { useState, useDebugValue } from "react";

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  // useDebugValue dùng để debug custom hooks trong React DevTools
  useDebugValue(value.length > 0 ? `Input: "${value}"` : "Input is empty");

  return {
    value,
    onChange: (e) => setValue(e.target.value),
    reset: () => setValue(initialValue),
  };
}

export default function UseDebugValueDemo() {
  const input = useFormInput("");

  return (
    <div>
      <input
        type="text"
        value={input.value}
        onChange={input.onChange}
        placeholder="Type something..."
      />
      <button onClick={input.reset}>Reset</button>
      <p>Value: {input.value}</p>
      <p style={{ fontSize: "12px", color: "#666" }}>
        Open React DevTools → Components → inspect this component to see useFormInput debug value
      </p>
    </div>
  );
}
