import React from "react";
import ReactDOM from 'react-dom/client';



const myElement = (
  <>
<h1>React Practice</h1>
  <table>
  <h1>My Profile</h1>
    <tr>
      <th>My Name</th>
    </tr>
    <tr>
      <td>Abadan</td>
    </tr>
    <tr>
      <td>chala</td>
    </tr>
  </table>
  <h1>My favourite Languages</h1>
  <ul>
    <li>HTML</li>
    <li>BOOTSTRAP</li>
    <li>REACT</li>
  </ul>
  </>
  
);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(myElement);
