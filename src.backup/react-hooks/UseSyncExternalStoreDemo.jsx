import { useSyncExternalStore } from "react";

// Tạo một simple external store (không phải React state)
const store = {
  count: 0,
  listeners: [],

  increment() {
    this.count++;
    this.listeners.forEach((listener) => listener());
  },

  subscribe(listener) {
    this.listeners.push(listener);
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  },

  getCount() {
    return this.count;
  },
};

export default function UseSyncExternalStoreDemo() {
  // useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
  const count = useSyncExternalStore(
    (listener) => store.subscribe(listener),
    () => store.getCount(),
    () => 0 // server snapshot (optional)
  );

  const handleClick = () => {
    store.increment();
  };

  return (
    <div>
      <p>Count from external store: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <p style={{ fontSize: "12px", color: "#666" }}>
        useSyncExternalStore syncs React with external state management libraries.
      </p>
    </div>
  );
}
