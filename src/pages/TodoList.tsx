import React, {FC} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo, removeTodo, toggleCompleted} from '../store/todoList'
import type {StateType} from '../store/index'
import type {TodoItemType} from '../store/todoList'

const TodoList : FC = () => {
    const TodoList = useSelector<StateType>(state => state.todoList) as TodoItemType[]

    function del (id: string) {
        
    }

    function toggle(id: string) {

    }

    return  <>/
        <p>TodoList demo</p>
        {TodoList.map(todo => {
           const {id,title,completed} = todo
           return <li key = {id} 
           style={{ textDecoration : completed ? 'line-through' : ''}}
           >
            <span onClick={() => toggle(id)}>{title}</span>
            &nbsp;
            <button onClick={() => del(id)}>删除</button>
           </li> 
        })}
    </>
}

export default TodoList