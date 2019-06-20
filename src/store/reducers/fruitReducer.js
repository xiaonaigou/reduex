// 导入action类型
import { NUM_ADD,NUM_SUB } from "../actionTypes";

// 1. 初始数据
// defaultState是定义的,和之前的state不一样
const defaultState = {
    num:10001
};

// 2. 暴露一个函数出去,会在函数中写很多小逻辑
export default (state = defaultState,action)=>{
    // state是组件中要使用的数据
    // action用来区分做什么事
    // 必须要返回一个state

    console.log(action);

    // 同级,使用switch更好
    switch (action.type) {
        case "NUM_ADD":
            {let newState = JSON.parse(JSON.stringify(state));
            newState.num += action.value;
    
            return newState;}
        case "NUM_SUB":
            {    let newState = JSON.parse(JSON.stringify(state));  // Identifier 'newState' has already been declared --- newState已经有了
            newState.num -= action.value;
            return newState;}
            
        default:
            break;
    }

    return state;
}