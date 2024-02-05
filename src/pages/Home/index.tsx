import * as React from "react";
import "./home.css";
import { Cards, Footers } from "../../components";
import Navbar from "../Navbar";
import { Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface IHomeProps {}

export default class Home extends React.Component<IHomeProps> {
  public render() {
    return (
      <Container fluid>
        <Row>
          <Navbar />
        </Row>
        <Row className="home">
          <br />
          <Stack
            direction="horizontal"
            className="align-items-center justify-content-center"
            gap={3}
          >
            <div className="p-2">
              <Link to="/users/42">
                <Cards />
              </Link>
            </div>
            <div className="p-2">
              <Cards />
            </div>
            <div className="p-2">
              <Cards />
            </div>
            <div className="p-2">
              <Cards />
            </div>
          </Stack>

          <Stack
            direction="horizontal"
            className="align-items-center justify-content-center"
            gap={3}
          >
            <div className="p-2">
              <Cards />
            </div>
            <div className="p-2">
              <Cards />
            </div>
            <div className="p-2">
              <Cards />
            </div>
            <div className="p-2">
              <Cards />
            </div>
          </Stack>
          <br />
        </Row>
        <Row>
          <Footers />
        </Row>
      </Container>
    );
  }
}
