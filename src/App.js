// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
     <h1>HELLOWORLD</h1>
     <MyButton ></MyButton>
     <MyButton ></MyButton>
     <MyButton ></MyButton>
    </div>
  );
}
function MyButton (){
  const [count,setcount]= useState(0)//这啥意思
  
  function handleClick(){
    setcount(count+1)
  }
  return (
  <button onClick={handleClick}> Click {count} times</button>
  )
}

// class MyButton extends React.Component{
//   state={
//     count:0,
//   };
//   handleClick(){
//     const count = this.state.count;
//     this.setState({
//       count:count+1
//     })
//   };
//   render(){
//     return(
//       <button onClick={()=>this.handleClick()}>Click {this.state.count} times</button>
//     )
    
    
//   }
// }
export default App;
