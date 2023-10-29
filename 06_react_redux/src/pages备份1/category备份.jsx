import axios from "axios";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  changeBannersAction,
  changeRecommendsAction,
} from "../store/actionCreators";

export class category extends PureComponent {
  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;

      this.props.changeBanners(banners);
      this.props.changeRecommend(recommends);
      console.log(banners, recommends);
    });
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
  changeBanners(banners) {
    dispatch(changeBannersAction(banners));
  },
  changeRecommend(recommends) {
    dispatch(changeRecommendsAction(recommends));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(category);
