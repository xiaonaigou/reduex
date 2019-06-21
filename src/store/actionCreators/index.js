import { NUM_ADD,NUM_SUB } from "../actionTypes";

// 1. 水果数量增加
export const num_fruit_add = () =>{
    return {
        type:NUM_ADD,
        value:1
    }
}

// 1. 水果数量减少
export const num_fruit_sub = () =>{
    return {
        type:NUM_SUB,
        value:1
    }
}