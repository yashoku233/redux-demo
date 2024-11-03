import { configureStore } from "@reduxjs/toolkit";
import countReduce from './count'
import todoListReducer, {TodoItemType} from './todoList'

export type StateType = {
    count: number,
    todoList: TodoItemType[]
}


export default configureStore({
    reducer:{
        count: countReduce,

        todoList: todoListReducer
    }
})