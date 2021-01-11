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
    employee: []
  };

  componentDidMount() {
    API.getRandomEmployee()
    .then(res => this.setState({ employee: res.data.results }))
    .catch(err => console.log(err));
    console.log(this.state.employee)
  };


  render() {
    return (
      <Wrapper>
        <Header />
        <Search />
        {this.state.employee.map(emp => (
          <Employees 
          key={emp.id.value}
          firstname={emp.name.first}
          lastname={emp.name.last}
          email={emp.email}
          phone={emp.phone}
          dob={emp.dob.date}
          image={emp.picture.medium}
          />
        ))}
      </Wrapper>
  );
  }
}

export default App;
