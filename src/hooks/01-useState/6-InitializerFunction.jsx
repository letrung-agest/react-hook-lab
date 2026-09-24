import { useState } from "react";

function expensiveInit() {
  console.log("expensiveInit() called!");
  return { todos: ["Learn React", "Build App"], count: 0 };
}

function WrongWay({ reRender }) {
  const [state, setState] = useState(expensiveInit());
  return <div>Todos: {state.todos.length} (expensiveInit called on every render)</div>;
}

function RightWay({ reRender }) {
  const [state, setState] = useState(() => expensiveInit());
  return <div>Todos: {state.todos.length} (expensiveInit called only once)</div>;
}

export default function InitializerFunction() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Phase 6: Initializer Function</h3>
      <button onClick={() => setCount(count + 1)}>Force Re-render</button>
      <p>Re-render count: {count} (check console)</p>
      <h4>Wrong Way:</h4>
      <WrongWay reRender={count} />
      <h4>Right Way:</h4>
      <RightWay reRender={count} />
    </div>
  );
}
