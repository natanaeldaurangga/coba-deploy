import React, { useState, useContext } from 'react';
import '../style/TodoWrap.css';
import { TodoContext } from '../context/TodoContext';

//Import Component
import InputFrom from './InputForm';
import TodoBar from './TodoBar';

const TodoWrap = () => {

    const passObj = useContext(TodoContext);
    const [todolist, setTodolist] = passObj.tdl;
    const [filterTodo, setFilterTodo] = passObj.filterTodo;

    const filterObj = {
        'All':(done) => {
            return done | true;
        },
        'Done': (done) => {
            return done;
        },
        'Not Done':(done) => {
            return done ^ true;
        }
    }

    return (
        <div className="todoWrap">
            <h1>Todo List</h1>
            <InputFrom />
            <div className="barWrap">
                {
                    todolist.filter(todo => filterObj[filterTodo](todo.done)).map(filteredtodo => (
                        <TodoBar  todotext={filteredtodo.val} isDone={filteredtodo.done} />
                    ))
                }
                
            </div>
        </div>
    );

}

export default TodoWrap;


//npm git remote add origin