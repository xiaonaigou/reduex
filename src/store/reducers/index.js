// 1. 引入合并组件
import { combineReducers } from "redux";
// 2. 引入要合并的对象
import fruitReducer from "./fruitReducer";
import animalReducer from "./animalReducer";

// 3. 合并后导出---以对象形式丢出去
export default combineReducers({ fruitReducer,animalReducer })