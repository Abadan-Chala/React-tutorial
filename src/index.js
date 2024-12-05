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



            
// Here are the main concepts in React.js:

### 1. **Components**
   - **Function Components**: Stateless components defined as JavaScript functions.
   - **Class Components**: Stateful components defined using ES6 classes.

### 2. **JSX (JavaScript XML)**
   - A syntax extension for JavaScript that looks similar to HTML. It allows you to write markup directly in your JavaScript code.

### 3. **Props (Properties)**
   - An object that holds the values of attributes passed from a parent component to a child component. Props are read-only.

### 4. **State**
   - A built-in object that allows components to create and manage their own data. State changes trigger re-renders of the component.

### 5. **Lifecycle Methods**
   - Special methods in class components that allow you to run code at specific points in a component's life (e.g., `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).

### 6. **Hooks**
   - Functions that let you use state and other React features in function components. Common hooks include:
     - `useState`: To manage state.
     - `useEffect`: To perform side effects (like fetching data).
     - `useContext`: To access context values.

### 7. **Context API**
   - A way to share values between components without having to pass props through every level of the component tree. Useful for global state management.

### 8. **Event Handling**
   - Handling user interactions using event handlers such as `onClick`, `onChange`, etc. Events in React are named using camelCase.

### 9. **Conditional Rendering**
   - Rendering components or elements based on certain conditions, often using JavaScript operators like `if`, `&&`, or the ternary operator.

### 10. **Lists and Keys**
   - Rendering lists of elements using the `map()` function. Each element should have a unique "key" prop to help React identify which items have changed.

### 11. **Forms**
   - Managing form inputs in React using controlled components (where form data is handled by the component's state) and uncontrolled components (where form data is handled by the DOM).

### 12. **React Router**
   - A library for managing navigation and rendering different components based on the URL. It allows for single-page application (SPA) routing.

### 13. **Higher-Order Components (HOCs)**
   - Functions that take a component and return a new component. They are used for reusing component logic.

### 14. **Error Boundaries**
   - Components that catch JavaScript errors in their child component tree and display a fallback UI instead of crashing the whole app.

### 15. **Code Splitting**
   - A technique for breaking up a large bundle of JavaScript into smaller chunks that can be loaded on demand, improving performance.

### Summary
These concepts form the foundation of React.js and are essential for building interactive and efficient user interfaces. Understanding these concepts will help you effectively develop applications using React.
