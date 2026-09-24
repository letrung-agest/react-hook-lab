import { useTransition, useState } from "react";

export default function UseTransitionDemo() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // startTransition đánh dấu state update này là non-urgent
    // Nếu có urgent update (như user input), React sẽ pause cái này
    startTransition(() => {
      console.log("Starting transition...");
      setCount((c) => c + 1);
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick} disabled={isPending}>
        {isPending ? "Loading..." : "Increment (Transition)"}
      </button>
      <p style={{ fontSize: "12px", color: "#666" }}>
        useTransition marks updates as non-urgent. Urgent updates (like clicks) have priority.
      </p>
    </div>
  );
}
