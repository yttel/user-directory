import React from 'react';
import Search from "./components/Search";
// import noImg from "./data/images/noImg200x200.png";
import TableRow from "./components/TableRow";
import data from "./data/data.json";

import './App.css';

class App extends React.Component {
  // Setting the component's initial state
  state = {
    searchTerm: "",
    sortBy: "lastName"
  };
  
  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  componentDidUpdate() {
    console.log(this.state.searchTerm);    
    console.log(this.state.sortBy);
  };
  
  render() {
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleInputChange={this.handleInputChange}/>
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
                .sort((a, b) => {return a[this.state.sortBy] - b[this.state.sortBy]})
                .filter((employee) => {
                  const { firstName, lastName, email, phone } = employee;

                  const thisEmployee = firstName + lastName + email + phone;

                  return thisEmployee.includes(this.state.searchTerm);

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
      </div>
    )
  }
}

export default App;
