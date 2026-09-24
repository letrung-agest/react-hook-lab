import { useDeferredValue, useState, useMemo } from "react";

function SlowList({ items }) {
  console.log("SlowList rendering with", items.length, "items");
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>
          {item} - {Math.random().toString(36).substring(7)}
        </li>
      ))}
    </ul>
  );
}

export default function UseDeferredValueDemo() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  const items = useMemo(() => {
    const filtered = [];
    for (let i = 0; i < 100; i++) {
      if (i.toString().includes(deferredText)) {
        filtered.push(i);
      }
    }
    return filtered;
  }, [deferredText]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Filter items..."
      />
      <p>Input: {text}</p>
      <p>Deferred: {deferredText}</p>
      <SlowList items={items} />
      <p style={{ fontSize: "12px", color: "#666" }}>
        useDeferredValue delays updating the list so input feels responsive.
      </p>
    </div>
  );
}
