import { useState } from "react";

function Form({ userId }) {
  const [text, setText] = useState("");
  return (
    <div>
      <p>User ID: {userId}</p>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type..." />
      <p>Input: {text}</p>
    </div>
  );
}

export default function KeyReset() {
  const [userId, setUserId] = useState(1);

  return (
    <div>
      <h3>Phase 7: Resetting State with Key</h3>
      <button onClick={() => setUserId(userId === 1 ? 2 : 1)}>Switch User</button>
      <p>Current User: {userId}</p>

      <h4>Without key (state keeps):</h4>
      <Form userId={userId} />

      <h4>With key (state resets):</h4>
      <Form key={userId} userId={userId} />
    </div>
  );
}
