import React, { useState, useEffect, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const InputFrom = () => {

    const passObj = useContext(TodoContext);
    const [search, setSearch] = passObj.src;
    const onUpdate = passObj.update;
    const getSearch = passObj.getSrc;
    const [filterTodo, setFilterTodo] = passObj.filterTodo;

    const selectFilter = e => {
        setFilterTodo(e.target.value);
    }

    

    return (
        <form className="inputForm">
            <div className="inputWrap">
                <div className="addTodo">
                    <input type="text" onChange={onUpdate} value={search} />
                    <button onClick={getSearch} > + </button>
                </div>
                <select onChange={selectFilter}  name="filter" id="select-filter">
                    <option value="All">All</option>
                    <option value="Done">Done</option>
                    <option value="Not Done">Not Done</option>
                </select>
            </div>
        </form>
    );
}

export default InputFrom;
