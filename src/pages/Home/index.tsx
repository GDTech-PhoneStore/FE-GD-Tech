import * as React from "react";
import "./home.css";
import { Cards, Footers } from "../../components";
import Navbar from "../Navbar";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface IHomeProps {}

export default class Home extends React.Component<IHomeProps> {
  public render() {
    return (
      <Container fluid>
        <Row>
          <Navbar />
        </Row>
        <Row className="home justify-content-md-center">
          <div>&nbsp;</div>
          <Col xs="auto" md="auto">
            <Link to="/users/42">
              <Cards />
            </Link>
          </Col>
          <Col xs="auto" md="auto">
            <Cards />
          </Col>
          <Col xs="auto" md="auto">
            <Cards />
          </Col>
          <Col xs="auto" md="auto">
            <Cards />
          </Col>
          <div>&nbsp;</div>
        </Row>

        <Row>
          <Footers />
        </Row>
      </Container>
    );
  }
}
