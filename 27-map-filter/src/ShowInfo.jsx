import React from "react";

export default function ShowInfo({ arr, setArr }) {
  const deleteValue = (id) => {
    const newArr = arr.filter((item) => item.id !== id);
    setArr(newArr);
  };
  return (
    <ul>
      {arr.map((item) => (
        <li key={item.id} onDoubleClick={() => deleteValue(item.id)}>
          {item.name} : {item.email}
        </li>
      ))}
    </ul>
  );
}
