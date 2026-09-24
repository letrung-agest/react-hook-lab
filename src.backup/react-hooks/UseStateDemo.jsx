import { useState } from "react";

export default function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);

  const [persion, setPersion] = useState({
    name: "Trung le",
    artwork: {
      title: "No name",
      description: "None"
    }
  })

  const countFunc = () => {
    console.log("countFunc was call")
    setCount(count + 1);
  }

  //update function
  function handleClick() {
    console.log("age - 1")
    setAge(a => a + 1);
    console.log("age - 2")
    setAge(a => a + 1);
    console.log("age - 3")
    setAge(a => a + 1);
    console.log("age - done")

  }

  //Updating objects and arrays in state
  const handleNameChange = (e) => {
    setPersion({
      ...persion, name: e.target.value
    })
  }
  const handleTitleChange = (e) => {
    setPersion({
      ...persion,
      artwork: {
        ...persion.artwork, title: e.target.value
      }
    })
  }


  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => countFunc()}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <p>AGE: {age}</p>
      <button onClick={handleClick}>Increase Age</button>

      <br />
      <label>
        Name:
        <input
          value={persion.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={persion.artwork.title}
          onChange={handleTitleChange}
        />
      </label>

      <p>
        <i>{persion.artwork.title}</i>
        {' by '}
        {persion.name}
      </p>
    </div>
  );
}
