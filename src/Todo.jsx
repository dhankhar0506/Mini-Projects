import React from "react";
import "./Todo.css";
import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  function addActivity() {
    
    
    if(input !=""){
      setList((list) => {
        const updatelist = [...list, input];
        setInput("");
        console.log(updatelist);
        return updatelist;
      });

    }else{
      alert("add your input")
    }
  }
  function removeTodo(i){
   const updatedata= list.filter((elem,id)=>{
    return i !=id
   })
   setList(updatedata)

  }

  return (
    <>
      <div className="container">
        <div className="header">Todo-List</div>
        <input
          className="input"
          type="text"
          placeholder="Enter Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="add-button" onClick={addActivity}>
          Add
        </button>
        <p className="heading"> Here is Our List 😃</p>
        <ul className="items-list">
          { list!=[] && list.map((item, i) => {
            return (
              <>
                <li key={i}>
                  {item}
                  <button  className="button" onClick={()=>removeTodo(i)}>❌</button>
                </li>
              </>
            );
          })}
        </ul>
        {
          list.length>=1 && <button className="button" onClick={()=>setList([])}>Remove All </button>
        }
      </div>
    </>
  );
};

export default Todo;
