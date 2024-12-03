import { useState } from "react";
import React from "react";
import ReactDOM from 'react-dom/client';



// const myElement = (
//   <>
// <h1>React Practice</h1>
//   <table>
//   <h1>My Profile</h1>
//     <tr>
//       <th>My Name</th>
//     </tr>
//     <tr>
//       <td>Abadan</td>
//     </tr>
//     <tr>
//       <td>chala</td>
//     </tr>
//   </table>
//   <h1>My favourite Languages</h1>
//   <ul>
//     <li>HTML</li>
//     <li>BOOTSTRAP</li>
//     <li>REACT</li>
//   </ul>


  
//   </>
  
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(myElement);



// events
// function Football() {
//   const shoot = () => {
//     alert("Goal!");
//   }

//   return (
//     <button onClick={shoot}>Take the shot!</button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football />);// 




function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);