// 1. 引入管理员
import reducer from "./reducers";
// 2. 引入仓库生成器
import { createStore } from "redux";

// 3. 把store和管理员一起暴露过去
export default createStore(reducer);