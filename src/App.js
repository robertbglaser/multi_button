import React, {useState} from 'react';
import './App.css';

function App() {
  const [selectValue, setSelectValue]= useState(15)

  

  const getButtonsUsingForLoop = (num) => {
    const array = []

    for(var i = 1; i <= num; i++){
      var item=0
      item = i;
      array.push(<div> 
        <button 
        key={item} onClick={() => console.log('button click heard button #', ) }>{item}</button>
      <br/> </div>)
    }

    return array
  }
  return (
    <div className="App">
     <select onChange={(e) =>{setSelectValue(e.target.value)}} defaultValue={selectValue}> 
      <option value='5'>5</option>
      <option value='10'>10</option>
      <option value='15'>15</option>  
      
      </select>


      {getButtonsUsingForLoop(selectValue)}


      
    
    </div>
  );
}

export default App;
