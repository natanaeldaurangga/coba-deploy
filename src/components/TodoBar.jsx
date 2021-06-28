import React,{ useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoBar = ({ todotext, isDone }) => {

    const passObj = useContext(TodoContext);

    const [todolist, setTodolist] = passObj.tdl;

    const [check, setCheck] = useState(false);

    const [disappear, setDisappear] = useState(false);

    const onDone = () => {
        Array.from(todolist).forEach(todo => {
            if(todo.val === todotext){
                todo.done = true;
            } // jika todo.val sama dengan todo.done maka done akan true
        });
        setCheck(true);
    }

    const onDelete = () => {
        setTodolist(Array.from(todolist).filter(obj => obj.val !== todotext));
    }

    const remove = () => {
        setDisappear(true);
    }

    const grc = () =>{//generate random color
        let r = Math.floor(Math.random() * 250);
        let g = Math.floor(Math.random() * 250);
        let b = Math.floor(Math.random() * 250);
        return `rgb(${r}, ${g}, ${b})`;
    }

    return (
        <div
            // style={{
            //     backgroundImage: `linear-gradient(to right, ${grc()}, ${grc()})`
            //     // backgroundImage:`linear-gradient(to right, ${grc}, ${grc})`
            // }}
            className={`todobar ${disappear && 'remove'}`} onAnimationEnd={onDelete}
        >
            <div className={`divtext ${check && 'done' || isDone  && 'done'}`}><h4>{todotext}</h4></div>
            <div className="button-div">
                <button onClick={onDone}>✔️</button>
                <button onClick={remove}>🗑️</button>
            </div>
        </div>
    );
}

export default TodoBar;
