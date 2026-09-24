import { useState } from "react";

export default function ObjectState() {
  const [person, setPerson] = useState({ name: "Alice", age: 25 });

  const handleWrong = () => {
    person.age++;
    setPerson(person);
    console.log("Wrong: mutate directly, React won't detect");
  };

  const handleCorrect = () => {
    setPerson({ ...person, age: person.age + 1 });
    console.log("Correct: spread syntax creates new object");
  };

  return (
    <div>
      <h3>Phase 4: Updating Objects in State</h3>
      <p>Name: {person.name}, Age: {person.age}</p>
      <button onClick={handleWrong}>Wrong Way</button>
      <button onClick={handleCorrect}>Correct Way</button>
    </div>
  );
}
