import React, { useState, useEffect, createContext } from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {

    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [todolist, setTodolist] = useState([{
        val:'Code',
        done:false
    }]);
    const [filterTodo, setFilterTodo] = useState('All'); 

    useEffect(() => {
        if(query !== null && query !== ''){
            addTodo(query);
            setSearch('');
        }
    }, [query]);


    const updateSearch = e => {
        setSearch(e.target.value);
    }


    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch(null);
    }


    const addTodo = newtodo => {
        let contain = false;
        Array.from(todolist).forEach(obj => {
            if(obj.val === newtodo){
                contain = true;
            }
        });
        if(contain){
            alert('data sudah ada');
        }else{
            let newObj = {
                val:newtodo,
                done:false
            }
            setTodolist([...todolist, newObj]);
        }
    }


    const deleteTodo = oldtodo => {
        setTodolist(todolist.filter(e => e !== oldtodo));
    }


    return (
        <TodoContext.Provider 
            value={{
                src:[search, setSearch],
                quer:[query, setQuery],
                tdl:[todolist, setTodolist],
                add:addTodo,
                delete:deleteTodo,
                getSrc:getSearch,
                update:updateSearch,
                filterTodo:[filterTodo, setFilterTodo]
                
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

