import * as React from "react";
import "./card.css";
import { Button, Card } from "react-bootstrap";
export interface ICardsProps {}

// const Holder = ({ message }: AppProps) => <div>{message}</div>;

export default class Cards extends React.Component<ICardsProps> {
  public render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card.Body>
          <Card.Title>Iphone X Pro</Card.Title>
          <Card.Text>Rp. 20.000</Card.Text>
          <div className="text-wrapper-2">250 Terjual</div>
        </Card.Body>
      </Card>
    );
  }
}
