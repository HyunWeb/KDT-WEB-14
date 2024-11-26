import React, { useCallback } from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function UseCallback2({ postId }) {
  const [post, setPost] = useState();

  // [before]

  // const getPost = async () => {
  //   const res = await axios.get(
  //     `https://jsonplaceholder.typicode.com/posts/${postId}`
  //   );
  //   setPost(res.data);
  // };

  // [after]
  const getPost = useCallback(async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    console.log(res);
    setPost(res.data);
  }, [postId]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div>
      <h1> UseCallback2</h1>
      {post && post.id ? post.title : "로딩중..."}
    </div>
  );
}
