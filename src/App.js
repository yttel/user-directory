import React from 'react';
import Search from "./components/Search";
import Table from "./components/Table";
// import TableRow from "./components/TableRow";
// import data from "./data/data.json";

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

  handleSortBy = (event) => {  
    console.table(`event.target.id: ${event.target.id}`);
    const id = event.target.id;

    this.setState({
      sortBy: id
    });
  }
  
  render() {
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleInputChange={this.handleInputChange}/>
        <Table searchTerm={this.state.searchTerm} sortBy={this.state.sortBy} handleSortBy={this.handleSortBy}/>

        {/* <div className="container">
          <table className = "table table-bordered table-striped table-dark">
            <caption>List of Employees</caption>
            <thead>
              <tr>    
                <th scope = "col" ></th>
                <th scope = "col" id="firstName" onClick = {this.handleSortBy} >First Name</th>
                <th scope = "col" id="lastName" onClick = {this.handleSortBy} >Last Name</th>
                <th scope = "col" id="email" onClick = {this.handleSortBy} >email</th>
                <th scope = "col" id="phone" onClick = {this.handleSortBy} >phone</th>
              </tr>
            </thead>
            <tbody>
              {
                data
                .sort((a, b) => {return a[this.state.sortBy] - b[this.state.sortBy]})
                .filter((employee) => {
                  const { firstName, lastName, email, phone } = employee;

                  return (firstName + lastName + email + phone).includes(this.state.searchTerm);

                })
                .map((filteredEmp, index) => {
                  return (
                    <TableRow {...filteredEmp} key={`employeeList${index}`} />
                  )
                })
              } 
            </tbody>
          </table>
        </div> */}
      </div>
    )
  }
}

export default App;
