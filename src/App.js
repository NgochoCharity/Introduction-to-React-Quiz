import React from "react";
import {SRC , color, height} from './data';
import './App.css';

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

// comment this out after completion and uncomment code below it to proceed
// function Child() {
//   return <div>This is children content</div>;
// }

function changeParent(){
  
}
function Child() {
  return (
    <>
      <div>Child</div>
      <button onClick={changeParent}>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child />
      </div>
    </>
  );
}

// Comment out after completion
// function Parent() {
//   return (
//     <div>
//       <h3>Parent Component</h3>
//     </div>
//   );
// }
// Comment above code after completion

function App() {
  const [isHidden, setIsHidden] = React.useState(true);
function handleHide(){
  setIsHidden((isHidden) => !isHidden)
}


const names = users.map((userName) => (
  <li key={userName.id}>{userName.name}</li>
))
  return (
    
    <>
    <h1 style={{color:color}}>JSX is Cool!</h1>
    <img src={SRC} style = {{height:height}}className="App-logo" alt="logo" />
      <h3>User names</h3>
      <ul>{names}</ul>
      <button onClick ={handleHide}>{ isHidden ? ' Hide Element Below' : 'Show Element Below'}</button>

      <div>{isHidden ? "Toggle Challenge" : ""}</div>
      
      <Parent>
      <Child />
    </Parent>
    </>
  );
}


export default App;
