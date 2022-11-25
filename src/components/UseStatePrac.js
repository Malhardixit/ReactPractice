// import React, { useState } from "react";

// function UseStatePrac() {
//   const initialCount = 0;
//   const [count, setCount] = useState(initialCount);
//   return (
//     <div>
//       Count: {count}
//       <button onClick={() => setCount(count + 1)}> Increment </button>
//       <button onClick={() => setCount(count - 1)}> Decrement </button>
//       <button onClick={() => setCount(initialCount)}> Reset </button>
//     </div>
//   );
// }

// export default UseStatePrac;

import React, { useState } from "react";

function UseStatePrac() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  console.log(name);
  return (
    <form>
      <input
        type="text"
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      {name.firstName}
      <input
        type="text"
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      {name.lastName}
    </form>
  );
}

export default UseStatePrac;
