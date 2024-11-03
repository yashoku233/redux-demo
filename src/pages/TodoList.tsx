import React, {FC} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo, removeTodo, toggleCompleted} from '../store/todoList'
import type {StateType} from '../store/index'
import type {TodoItemType} from '../store/todoList'

const TodoList : FC = () => {
    const TodoList = useSelector<StateType>(state => state.todoList) as TodoItemType[]
    return  <>/
        <p>TodoList demo</p>
        {TodoList.map(todo => {
           const {id,title,completed} = todo
           return <li key = {id} 
           style={{ textDecoration : completed ? 'line-through' : ''}}
           >
            <span>{title}</span>
            &nbsp;
            <button onClick={() => t}>删除</button>
           </li> 
        })}
    </>
}

export default TodoList