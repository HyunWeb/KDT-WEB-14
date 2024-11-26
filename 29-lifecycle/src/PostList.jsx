import React from "react";
import "./PostList.css";

export default function PostList({ posts }) {
  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <h2>
              <span>No.{item.id} - </span>
              {item.title}
            </h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
