import React, { Component } from "react";
import './App.css';
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Employees from "./components/Employees/Employees";
import Wrapper from "./components/Wrapper/Wrapper";
import API from "./util/API";

class App extends Component {
  state = {
    employee: []
  };


  render() {
    return (
      <Wrapper>
        <Header />
        <Search />
        <Employees />
      </Wrapper>
  );
  }
}

export default App;
