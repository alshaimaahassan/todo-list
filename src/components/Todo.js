import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm'
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    let [edit, setEdit] = useState({
        id: null,
        value: ""
    })
    let submitUpdate = value => {
        if (edit.id !== null) {
            updateTodo(edit.id, value);
            setEdit({
                id: null,
                value: ''
            });
        }
    }
    
if(edit.id){
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
}

    return (
        <div>


            {todos?.map((todo, index) => (
                <div className={todo.isComplete ?  "m-2 bg-violet-900 flex flex-row justify-between p-1 text-white rounded-sm line-through" : "m-2 bg-violet-950 flex flex-row justify-between p-1 text-white rounded-sm"} key={index}>
                    <div onClick={() => completeTodo(todo.id)} className= " ">
                        {todo.text}
                    </div>
                    <div className= "flex flex-row p-1">
                        <FaTrashCan onClick={()=>{removeTodo(todo.id)}}
                        className='delete-icon m-1'/>
                        <FaEdit onClick={()=>{setEdit({id: todo.id, value: todo.text})}}
                        className='edit-icon m-1' />
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Todo