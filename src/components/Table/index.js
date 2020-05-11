import React from "react";
import TableRow from "../TableRow";
import data from "../../data/data.json";

function Table({searchTerm, handleSortBy}) {
  return (
    <div className="container">
      <table className = "table table-bordered table-striped table-dark">
        <caption>List of Employees</caption>
        <thead>
          <tr>    
            <th scope = "col" ></th>
            <th scope = "col" id="firstName" onClick = {handleSortBy} >First Name</th>
            <th scope = "col" id="lastName" onClick = {handleSortBy} >Last Name</th>
            <th scope = "col" id="email" onClick = {handleSortBy} >email</th>
            <th scope = "col" id="phone" onClick = {handleSortBy} >phone</th>
          </tr>
        </thead>
        <tbody>
          {
            data
            .sort((a, b) => {return a.lastName - b.lastName})
            // .sort((a, b) => {return a[sortBy] - b[sortBy]})
            .filter((employee) => {
              const { firstName, lastName, email, phone } = employee;
              const thisEmployee = (firstName + lastName + email + phone).toLowerCase();

              return thisEmployee.includes(searchTerm);

            })
            .map((filteredEmp, index) => {
              return (
                <TableRow {...filteredEmp} key={`employeeList${index}`} />
              )
            })
          } 
        </tbody>
      </table>
    </div>
  )
}

export default Table;