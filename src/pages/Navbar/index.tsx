import * as React from "react";
import "./navbar.css";
import { Button, Col, Form, Image, Stack } from "react-bootstrap";
export interface INavbarProps {}

export default class Navbar extends React.Component<INavbarProps> {
  public render() {
    return (
      <Stack direction="horizontal" className="navbar" gap={3}>
        <div className="p-2">
          <Col xs={6} md={4}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image src="gd.png" fluid />
            </a>
          </Col>
        </div>
        <div className="p-2 ms-auto">
          <Form.Control type="text" placeholder="Search" />
        </div>
        <div className="p-2">
          <Button type="submit" variant="outline-secondary">
            Search
          </Button>
        </div>
      </Stack>
    );
  }
}
