// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function DataFetchOne() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [post, setPost] = useState({});

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts/1")
//       .then((response) => {
//         setLoading(false);
//         setPost(response.data);
//         setError("");
//       })
//       .catch((error) => {
//         setLoading(false);
//         setPost({});
//         setError("Error Loading Data..");
//       });
//   }, []);

//   return (
//     <div>
//       {loading ? "Loading..." : post.title}
//       {error ? error : null}
//     </div>
//   );
// }

// export default DataFetchOne;

import axios from "axios";
import React, { useState, useEffect } from "react";
import "./post.css";

function DataFetchOne() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setLoading(false);
        setPosts(res.data);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("Oops something went wrong.Please try again..");
        setPosts([]);
      });
  }, []);
  return (
    <div className="posts">
      {loading ? (
        "Loading...Please Wait"
      ) : (
        <ol>
          {posts.map((item) => (
            <li style={{ fontSize: "30px" }} key={item.id}>
              <span style={{ fontSize: "10px" }}>{item.title}</span>
            </li>
          ))}
        </ol>
      )}
      {error ? error : null}
    </div>
  );
}

export default DataFetchOne;
