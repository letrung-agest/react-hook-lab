import { useState } from "react";

export default function MultipleStates() {
  const [name, setName] = useState("Alice");
  const [age, setAge] = useState(25);

  return (
    <div>
      <h3>Phase 2: Multiple State Variables</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Name: {name}</p>
      <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
      <p>Age: {age}</p>
    </div>
  );
}
