"use client";
import { useState } from "react";
export default function Home() {
  const [num, setNum] = useState(0);
  const onClick = () => {
    setNum(num + 1);
  };
  return (
    <div>
      <>
        <div>{num}</div>
        <button onClick={onClick}>还是喜欢敲代码</button>
      </>
    </div>
  );
}
