import React from 'react';
import logo from './logo.svg';
import './App.css';

const data = 
[
  {
    "pic": "./data/images/susan.jpg",
    "firstName": "Susan",
    "lastName": "Smith",
    "email": "susieq420@hotmail.com", 
    "phone": 2025551234
  },{
    "pic": "https://loremflickr.com/100/100",
    "firstName": "Susan",
    "lastName": "Smith",
    "email": "susieq420@hotmail.com", 
    "phone": 2025551234
  }
];

function App() {
  return (
    <div>
      <table className = "table">
        <thead>
          <tr>    
            <th scope = "col"></th>
            <th scope = "col">First Name</th>
            <th scope = "col">Last Name</th>
            <th scope = "col">email</th>
            <th scope = "col">phone</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((employee) => {
              const { pic, firstName, lastName, email, phone } = employee;
              return (
                <tr>
                  <td><img src={pic} alt=""></img></td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                </tr>
              )
            })
          } 
        </tbody>
      </table>
    </div>
  )
}

export default App;
