import React, { PureComponent } from "react";

export class HomeRanking extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rankingData: [{}],
    };
  }
  render() {
    return (
      <div>
        <h2>ranking nav</h2>
        <h2>榜单数据</h2>
        <ul>
          <li>榜单数据1</li>
          <li>榜单数据2</li>
          <li>榜单数据3</li>
          <li>榜单数据4</li>
          <li>榜单数据5</li>
        </ul>
      </div>
    );
  }
}

export default HomeRanking;
