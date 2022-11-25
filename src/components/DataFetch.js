import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetch() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`/api/option-chain-indices?symbol=BANKNIFTY`, {
  //       headers: {
  //         "access-control-allow-headers": "application/json",
  //         "access-control-allow-methods": "GET,POST",
  //         "access-control-allow-origin": "nseindia.com",
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setPosts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
  useEffect(() => {
    axios
      .get("/api/option-chain-indices?symbol=BANKNIFTY")
      .then((res) => {
        //console.log(res);
        setPosts(res.data.filtered.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {console.log(posts)}
      <ul>
        {posts.map((post) => (
          <p key={post.strikePrice}>
            {post.strikePrice},{post.expiryDate}
          </p>
        ))}
      </ul>
    </div>
  );
}

export default DataFetch;
