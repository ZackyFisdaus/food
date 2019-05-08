import React, { Component } from "react";
import Header from "../../component/header/header";
import Dashboard from "../../component/dashboard/dashboard";

export default class home extends Component {
  render() {
    return (
      <div>
        <Header name="Home" />
        <Dashboard />
      </div>
    );
  }
}
