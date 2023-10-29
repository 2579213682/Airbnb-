import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumberAction, subNumberAction } from "../store/counter";
// import store from '../store'

export class about extends PureComponent {
  calcNumebr(num, isAdd) {
    if (isAdd) {
      console.log("加", num);
      this.props.addNumber(num);
    } else {
      console.log("减", num);
      this.props.subNumber(num);
    }
  }

  render() {
    const { counter, banners, recommends, userinfo } = this.props;
    return (
      <div>
        <div className="user">
          <h2>nickname:{userinfo.nickname}</h2>
        </div>
        <h2>About Page:{counter}</h2>
        <div>
          <button onClick={(e) => this.calcNumebr(6, true)}>+6</button>
          <button onClick={(e) => this.calcNumebr(10, false)}>-10</button>
          <button onClick={(e) => this.calcNumebr(15, true)}>+15</button>
          <button onClick={(e) => this.calcNumebr(20, false)}>-20</button>
        </div>
        <div className="banner">
          <h2>轮播图数据：</h2>
          <ul>
            {banners.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
        <div className="recommend">
          <h2>推荐数据：</h2>
          <ul>
            {recommends.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

// connect()返回值是一个高阶组件
// function mapStateToProps(state){
//   return{
//     counter:state.counter
//   }
// }

// function fn2(dispatch){
//   return{
//     addNumber(num){
//       dispatch(addNumberAction(num))
//     },
//     subNumber(num){
//       dispatch(subNumberAction(num))
//     }
//   }
// }
const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumberAction(num));
  },
  subNumber(num) {
    dispatch(subNumberAction(num));
  },
});

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.recommends,
  userinfo: state.user.userinfo,
});
export default connect(mapStateToProps, mapDispatchToProps)(about);
