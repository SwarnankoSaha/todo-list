import { useState } from "react";
import './App.css';
import Todolist from "./Todolist";

function App() {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  };

  const listOfItems = () =>{
     setItems((oldItems) =>{
      return [...oldItems, inputList];
     });
     setInputList("");
  };

  const deleteItems = (id) =>{
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrelem, index) => {
        return index !== id;
      })
    })
  };

  return (
    <>
    <div className="container">
      <h1>TODO LIST</h1>
      <input type="text" placeholder='ADD ANYTHING'value={inputList} onChange={itemEvent}/>
      <button onClick={listOfItems}> + </button>
      <ol>
        {/* <li>{inputList}</li> */}

        {Items.map( (itemval,index) => {
          return <Todolist 
          key = {index} 
          id = {index} 
          onSelect = {deleteItems} 
          text={itemval}/>
        })}
      </ol>
    </div>
    </>
  );
}

export default App;
