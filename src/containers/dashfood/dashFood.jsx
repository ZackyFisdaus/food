import React, { Component } from "react";
import Header from "../../component/header/header";
import CardFood from "../../component/card-food/cardFood";

export default class dashFood extends Component {
  render() {
    return (
      <div>
        <Header name="food" />
        <CardFood />
      </div>
    );
  }
}
