import * as React from "react";
import "./images.css"
export interface IImagesProps {}

export default class Images extends React.Component<IImagesProps> {
  public render() {
    return (
      <div className="image">
        <img
          className="unsplash"
          alt="Unsplash"
          src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    );
  }
}
