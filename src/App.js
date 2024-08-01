import "./App.css";
import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/Todolist";


function App() {
  const [status, setStatus] = useState(true);  
  const [edit, setEdit] = useState();
  const [listTodo, setlistTodo] = useState([]);
  const [Uid, setUid] = useState();

  const addlist = (inputText) => {
    if (inputText !== undefined && inputText !== "") {
      setlistTodo([...listTodo, inputText]);      
    }
  };
  
  const deleteListItem = (key) => {
    let newlistTodo = [...listTodo];
    newlistTodo.splice(key, 1);
    setlistTodo([...newlistTodo]);
  };

  const HandleEdit = (key) => {
    const findItem = listTodo.find((item, ind) => ind === key);
    setEdit(findItem);
    setStatus(false); 
    setUid(key);
  };

  const handleUpdate = (inputText) =>{
   listTodo.splice(Uid,1,inputText);  
   setStatus(true);
  } 

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addlist={addlist} edit={edit} status={status} handleUpdate={handleUpdate} />
        <h1 className="app-heading">TODO-List</h1>
        <hr></hr>
        {listTodo.map((listItem, i) => {
          return (
            <Todolist
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
              editItem={HandleEdit}
            ></Todolist>
          );
        })}
      </div>
    </div>
  );
}

export default App;
