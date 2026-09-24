import { useState } from "react";

export default function ArrayState() {
  const [items, setItems] = useState(["Apple", "Banana", "Cherry"]);

  const handleAdd = () => {
    setItems([...items, "Orange"]);
  };

  const handleRemove = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleUpdate = (index, newValue) => {
    const newItems = [...items];
    newItems[index] = newValue;
    setItems(newItems);
  };

  return (
    <div>
      <h3>Phase 5: Updating Arrays in State</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item}
            <button onClick={() => handleRemove(i)}>Delete</button>
            <button onClick={() => handleUpdate(i, "Updated-" + i)}>Edit</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add Orange</button>
    </div>
  );
}
