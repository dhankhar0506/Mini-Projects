import React, { useRef, useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
   const ref = useRef(0)
   function handleAdd(){
    setCount(count+1)
    ref.current++
    console.log(ref)
   }

 
  return (
    <>
      <div className="counter-container">
        <button className="counter-button" onClick={handleAdd}>
          Add ➕
        </button>
        <span className="count">{count}</span>
        <button className="counter-button" onClick={()=>{count===0 ? setCount(count,alert("Operation Failed")) :setCount(count-1)}}>
          Sub ➖
        </button>
      </div>
    </>
  );
};

export default Counter;
