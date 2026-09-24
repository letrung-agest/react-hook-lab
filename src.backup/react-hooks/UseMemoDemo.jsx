import { useMemo, useState } from "react";

export default function UseMemoDemo() {
  const [number, setNumber] = useState(10);
  const [text, setText] = useState("");

  const squared = useMemo(() => {
    console.log("Calculating squared...");
    return number * number;
  }, [number]);

  return (
    <div>
      <p>Number: {number}</p>
      <p>Squared: {squared}</p>
      <button onClick={() => setNumber((value) => value + 1)}>Change number</button>
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Change text"
      />
      <p>Text: {text}</p>
    </div>
  );
}
