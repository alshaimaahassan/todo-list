import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

////////add todo
function TodoList() {
    let [todos, setTodos] = useState([])
    let addTodo = todo =>{
        //handel text
        if(!todo.text || /^s*$/.test(todo.text)){
            return 
        }
        let newTodos = [todo, ...todos]
        setTodos(newTodos)
    }
//////edit todo
let updateTodo = (todoId, newValue)=>{
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return
    }
    setTodos(prev =>prev.map(item => (item.id === todoId ? newValue : item)))
}
///////remove todo
    const removeTodo = id =>{
        let removeArr = [...todos].filter(todo=>todo.id !==id)
        setTodos(removeArr)
    }

///////
    let completeTodo = id =>{
        
        let updatedTodos = todos.map(todo =>{
            
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)

    }
    return (
    <div className="bg-violet-950  h-screen flex flex-col justify-center items-center ">
        <div className= "bg-violet-600 rounded-sm p-3 ">
        <h1 className= "text-white text-lg"  >What's the plan for Today?</h1>
        <TodoForm onSubmit ={addTodo} />
        <Todo 
        todos = {todos} 
        completeTodo = {completeTodo} 
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        />

    </div>
    </div>
    )
}

export default TodoList