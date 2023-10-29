// import axios from "axios";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchHomeMultidataAction } from "../store/actionCreators";

export class category extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultidata();
  }
  render() {
    return (
      <div>
        <h2>Category Page</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultidata() {
    dispatch(fetchHomeMultidataAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(category);
