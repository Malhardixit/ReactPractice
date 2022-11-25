import React, { useState, useEffect } from "react";

function HookCounterThree() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("UseEffect-Document updated");
    document.title = `You clicked ${count}times`;
  });

  return (
    <div className="App">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Button:{count}</button>``
    </div>
  );
}
export default HookCounterThree;
