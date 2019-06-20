import React, { Component, Fragment } from 'react';



class App extends Component {
  state = {
    num: 100
  }
  handleNumAdd = () => {
    let { num } = this.state;
    num++;
    this.setState({ num });
  }
  handleNumsubstr = () => {
    let { num } = this.state;
    num--;
    this.setState({ num });
  }
  render() {
    return (
      <Fragment>
        <div> 数字：{this.state.num}</div>
        <hr />
        <div>
          <button onClick={this.handleNumAdd}>+</button>
          {/* 减法 */}
          <button onClick={this.handleNumsubstr}>-</button>
        </div>
      </Fragment>
    );
  }
}


export default App;
