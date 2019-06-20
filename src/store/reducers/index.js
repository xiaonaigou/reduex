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
    return state;
}