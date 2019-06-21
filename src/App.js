import React, { Component, Fragment } from 'react';
// 1 引入一个可以接收store的函数---connect
import { connect } from "react-redux";

// 导入action类型
// import { NUM_ADD } from "./store/actionTypes";
// import { NUM_SUB } from "./store/actionTypes";

// 导入action
import { num_fruit_add,num_fruit_sub,num_fruit_init } from "./store/actionCreators";

class PlusButton extends Component {
  render(){

    return(
      <button onClick={this.props.num_add}>+</button>
    )
  }
}
class SubButton extends Component {
  
  render(){
    
    return(
      <button onClick={this.props.num_sub}>-</button>
    )
  }
}

class App extends Component {
  componentDidMount(){
    // 页面初次渲染完毕就会执行
    this.props.num_fruit_init();
  }
  render() {
    return (
      <Fragment>
        {/* 3 将num改成属性的方式来使用  */}
        <div> 水果：{this.props.num}</div>
        <hr />
        <div>
          <PlusButton {...this.props}></PlusButton>
          <SubButton {...this.props}></SubButton>
        </div>
      </Fragment>
    );
  }
}

// 2 将app改成连接函数的方式
// connect 第一个参数 是实现store中的数据 和 组件中的属性的映射
const mapStateToProps = (state) => {
  return {
    num: state.fruitReducer.num
  }
}
// 3.1 定义对象负责处理所有app中的action
const mapDispatch = (dispatch)=>{
  return{
    num_add:()=>{
      // 3.3 开始派发action
      // 给 src/store/actionTypes/index.js 里的函数传一个形参
      // 方便函数传参,点击一次增加多少.
      dispatch(num_fruit_add(10));
    },
    num_sub:()=>{
      // 开始派发action 
      // 减 同理,此处未处理默认还是1
      dispatch(num_fruit_sub());
    },
    // 数量的初始化方法
    num_fruit_init:()=>{
      dispatch(num_fruit_init());
    }
  }
}
// 3.2 把上述该对象放入到connect函数的第2个参数中
export default connect(mapStateToProps, mapDispatch)(App);
