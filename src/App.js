import React, { Component, Fragment } from 'react';
// 1 引入一个可以接收store的函数---connect
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* 3 将num改成属性的方式来使用  */}
        <div> 数字：{this.props.num}</div>
        <hr />
        <div>
          <button onClick={this.props.num_add}>+</button>
          {/* 减法 */}
          <button onClick={this.props.num_sub}>-</button>
        </div>
      </Fragment>
    );
  }
}

// 2 将app改成连接函数的方式
// connect 第一个参数 是实现store中的数据 和 组件中的属性的映射
const mapStateToProps = (state) => {
  return {
    num: state.num
  }
}
// 3.1 定义对象负责处理所有app中的action
const mapDispatch = (dispatch)=>{
  return{
    num_add:()=>{
      // console.log(334);
      const action = {
        type:"num_add",
        value:1
      }
      // 3.3 开始派发action
      dispatch(action);
    },
    num_sub:()=>{
      const action = {
        type:"num_sub",
        value:1
      }
      dispatch(action);
    }
  }
}
// 3.2 把上述该对象放入到connect函数的第2个参数中
export default connect(mapStateToProps, mapDispatch)(App);
