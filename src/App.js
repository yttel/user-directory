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
    const value = event.target.value.toLowerCase();
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
      </div>
    )
  }
}

export default App;
