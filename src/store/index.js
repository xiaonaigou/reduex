// 1. 引入管理员
import reducer from "./reducers";
// 2. 引入仓库生成器   4. 引入redux中间件连接器
import { createStore,applyMiddleware } from "redux";

// 5. 引入处理异步action的库
import reduxThunk from "redux-thunk";

// 3. 把store和管理员一起暴露过去
// 6. 在createStore的第二个参数中传递过去
export default createStore(reducer,applyMiddleware(reduxThunk));