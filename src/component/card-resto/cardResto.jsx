import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

export default class cardResto extends Component {
  render() {
    const { id, nama, lokasi, gambar } = this.props;
    return (
      <div>
        <Card style={{ marginTop: 30 }}>
          <CardImg top width="100%" src={gambar} alt="Card image cap" />
          <CardBody>
            <CardTitle>{nama}</CardTitle>
            <CardText>{lokasi}</CardText>
            <Button>click</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
