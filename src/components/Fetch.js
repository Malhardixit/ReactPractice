import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetch() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFrmBtnClick, setIdFrmBtnClick] = useState(1);

  const handleClick = () => {
    setIdFrmBtnClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFrmBtnClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFrmBtnClick]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetch;
