import React from "react";

function Todolist(props) {
  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <i className="fa-solid fa-pen-to-square" onClick={()=>{
          props.editItem(props.index)
        }}></i>

        <i
          className="fa-sharp fa-solid fa-trash icon-delete"
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        ></i>
      </span>
    </li>
  );
}

export default Todolist;
