import React from "react";

const Todolist = (props) => {

    

    return (
        <>
        <div className="nothing">
        <i className="fa-solid fa-xmark" onClick={() => {
            props.onSelect(props.id);
        }}
        ></i>
        <li> {props.text} </li>
        </div>
        
        </>
    );
};

export default Todolist;