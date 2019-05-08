import React, { Component } from "react";
import Header from "../../component/header/header";
import CardFood from "../../component/card-food/cardFood";

export default class dashResto extends Component {
  render() {
    return (
      <div>
        <Header />
        <CardFood />
      </div>
    );
  }
}
