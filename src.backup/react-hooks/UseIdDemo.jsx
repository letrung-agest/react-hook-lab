import { useId } from "react";

function MyForm() {
  const emailId = useId();
  const passwordId = useId();

  return (
    <form>
      <div>
        <label htmlFor={emailId}>Email:</label>
        <input id={emailId} type="email" placeholder="your@email.com" />
      </div>
      <div>
        <label htmlFor={passwordId}>Password:</label>
        <input id={passwordId} type="password" placeholder="Enter password" />
      </div>
      <button type="button" onClick={() => console.log({ emailId, passwordId })}>
        Show IDs in Console
      </button>
    </form>
  );
}

export default function UseIdDemo() {
  return (
    <div>
      <MyForm />
      <MyForm />
      <p style={{ fontSize: "12px", color: "#666" }}>
        useId generates unique IDs for accessibility. Each instance gets different IDs.
      </p>
    </div>
  );
}
