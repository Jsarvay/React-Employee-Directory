import React, { Component } from "react";
import './App.css';
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Employees from "./components/Employees/Employees";
import Wrapper from "./components/Wrapper/Wrapper";
import API from "./util/API";

class App extends Component {
  state = {
    search: " ",
    employee: []
  };

  componentDidMount() {
    API.getRandomEmployee()
    .then(res => this.setState({ employee: res.data.results }))
    .catch(err => console.log(err));
    console.log(this.state.employee)
  };

  handleInputChange = event => {
    this.setState({search: event.target.value});
  }

  handleSearch = event => {
    event.preventDefault();
    const filtered = this.state.employee.filter(employee => employee.name.first === this.state.search);
    console.log(filtered)
    this.setState({ employee: filtered });
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
            <th>Date of Birth</th>
          </tr>
        {this.state.employee.map(emp => (
          <Employees 
          key={emp.id.value}
          firstname={emp.name.first}
          lastname={emp.name.last}
          email={emp.email}
          phone={emp.phone}
          dob={emp.dob.date}
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
