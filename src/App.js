import React, { Component } from "react";
import './App.css';
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Employees from "./components/Employees/Employees";
import Wrapper from "./components/Wrapper/Wrapper";
import API from "./util/API";

class App extends Component {
  state = {
    search: "",
    employee: [],
    filter: []
  };

  componentDidMount() {
    API.getRandomEmployee()
    .then(res => this.setState({ employee: res.data.results, filter: res.data.results }))
    .catch(err => console.log(err));
    console.log(this.state.employee)
    console.log(this.state.filter)
  };

  handleInputChange = event => {
    this.setState({search: event.target.value});
  }

  handleSearch = event => {
    event.preventDefault();
    const filtered = this.state.employee.filter(employee => employee.name.first.includes(this.state.search)
    || employee.name.last.includes(this.state.search)
    || employee.phone.includes(this.state.search)
    || employee.email.includes(this.state.search));
    console.log(filtered)
    this.setState({ filter: filtered });
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <Search handleInputChange={this.handleInputChange} handleSearch={this.handleSearch} />
        <div className="table-div">
        <table className="table">
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        {this.state.filter.map(emp => (
          <Employees 
          key={emp.id.value}
          firstname={emp.name.first}
          lastname={emp.name.last}
          email={emp.email}
          phone={emp.phone}
          image={emp.picture.thumbnail}
          />
        ))}
        </table>
        </div>
      </Wrapper>
  );
  }
}

export default App;
