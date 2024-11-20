import React, { useState } from "react";
import Select from "./Select";
import Result from "./Result";
import Input from "./Input";

export default function ExAll() {
  const [data, setData] = useState({
    fruit: "apple",
    background: "black",
    color: "white",
    content: "text",
  });
  return (
    <div>
      <Select setData={setData} />
      <Input setData={setData} />
      <Result data={data} />
    </div>
  );
}
