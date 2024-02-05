import * as React from "react";
import "./navbar.css";
import { Button, Form, Stack } from "react-bootstrap";
export interface INavbarProps {}

export default class Navbar extends React.Component<INavbarProps> {
  public render() {
    return (
      <Stack direction="horizontal" className="navbar" gap={3}>
        <div className="p-2">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="gd.png" alt="" width="200" height="200" />
          </a>
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
