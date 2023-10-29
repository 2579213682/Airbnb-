import React, { PureComponent } from "react";
import { withRouter } from "../hoc";

export class Detail extends PureComponent {
  render() {
    const { router } = this.props;
    // console.log(router);
    const { params } = router;
    return (
      <div>
        <h1>detail page</h1>
        <h1>id: {params.id}</h1>
      </div>
    );
  }
}

export default withRouter(Detail);
