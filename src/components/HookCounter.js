// import React, { useState } from "react";

// function HookCounter() {
//   const initialcount = 0;
//   const [count, setCount] = useState(initialcount);

//   console.log(count);

//   const incrementFive = () => {
//     for (let i = 0; i < 5; i++) {
//       setCount((prevCount) => prevCount + 1);
//     }
//   };

//   return (
//     <div>
//       Count:{count}{" "}
//       <button onClick={() => setCount(initialcount)}>Reset</button>
//       <button onClick={() => setCount((val) => val + 1)}>Increment</button>
//       <button onClick={() => setCount((val) => val - 1)}>Decrement</button>
//       <button onClick={incrementFive}>IncrementFive</button>
//     </div>
//   );
// }

// export default HookCounter;

import React, { useState } from "react";
import "./styles.css";

function HookCounter() {
  const initialCount = 3;
  const [count, setCount] = useState(initialCount);

  console.log(
    `%c${count}`,
    "color:red; background-color:yellow; font-size:100px"
  );

  return (
    <div className="counter">
      <p>
        Count:
        <span className={count >= 10 || count <= 0 ? "red" : ""}>
          {count === 10 ? "Starting..." : count}
        </span>
      </p>
      <button onClick={() => setCount((val) => (val += 1))}>Increment</button>
      <button onClick={() => setCount((val) => (val -= 1))}>Decrement</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </div>
  );
}
export default HookCounter;
