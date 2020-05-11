import React from "react";
import TableRow from "../Table";
import data from "../../data/data.json";

function Table({searchTerm, sortBy}) {
  return (
    <div className="container">
    <table className = "table table-bordered table-striped table-dark">
      <caption>List of Employees</caption>
      <thead>
        <tr>    
          <th scope = "col" ></th>
          <th scope = "col" onClick = {() => this.setState({sortBy: "firstName"})} >First Name</th>
          <th scope = "col" onClick = {() => this.setState({sortBy: "lastName"})} >Last Name</th>
          <th scope = "col" onClick = {() => this.setState({sortBy: "email"})} >email</th>
          <th scope = "col" onClick = {() => this.setState({sortBy: "phone"})} >phone</th>
        </tr>
      </thead>
      <tbody>
        {
          data
          .sort((a, b) => {return a[{sortBy}] - b[{sortBy}]})
          .filter((employee) => {
            const { firstName, lastName, email, phone } = employee;

            return (firstName + lastName + email + phone).includes({searchTerm});

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