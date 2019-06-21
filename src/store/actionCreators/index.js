import { NUM_ADD,NUM_SUB,NUM_FRUIT_INIT } from "../actionTypes";
// 引入异步请求
import axios from "axios";

// 1. 水果数量增加
export const num_fruit_add = (a) =>{
    return {
        type:NUM_ADD,
        value:a
    }
}

// 2. 水果数量减少
export const num_fruit_sub = () =>{
    return {
        type:NUM_SUB,
        value:1
    }
}

// 用到的数据都是异步请求回来的，不能写死
// 思考redux里数据如果动态
// 3. 异步action---负责将水果中的nums初始化
export const num_fruit_init = () =>{
    // 3.1 返回函数
    return (dispatch) =>{
        // 3.2 发送异步请求
        axios.get("https://easy-mock.com/mock/5cff5f447806440acf2c6856/baseList/")
        .then(res=>{
            // 3.3 获取数据和进行派发 dispatch
            const action = {
                type:NUM_FRUIT_INIT,
                value:res.data.nums
            }
            // 3.4 开始派发
            dispatch(action)
        })
    }
}