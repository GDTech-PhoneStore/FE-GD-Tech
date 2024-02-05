import * as React from "react";

export interface IGroupCardProps {
}

export default class GroupCard extends React.PureComponent<IGroupCardProps> {
  public render() {
    return (
      <div className={`group`}>
        <div className="overlap-group">
          {/* <img className="unsplash" alt="Unsplash" src={unsplash} />
          <div className="iphone-x-pro">{text}</div> */}
          <div className="text-wrapper">Rp. 20.000</div>
          <div className="div">250 Terjual</div>
        </div>
      </div>
    );
  }
}
