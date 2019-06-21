import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// 1. 引入store
import store from "./store";
// 2. 引入redux和react的连接工具
// Provider 组件
import { Provider } from "react-redux";

// 3. 修改App结构
ReactDOM.render(<Provider store={store}> <App/></Provider>, document.getElementById('root'));

