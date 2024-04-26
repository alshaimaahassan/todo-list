import React from 'react'
import { useState, useEffect, useRef} from 'react'
import TodoList from './TodoList'

function TodoForm(props) {
    let [input, setInput] = useState(props.edit ?props.edit.value :'')
    // ////////focus]
    // const inputRef = useRef(null)
    // useEffect(()=>{
    //     inputRef.current.focus()
    // })
/////////////
    let handelChange = e =>{
        setInput(e.target.value)
    }
//////////
    let handelSubmit = e =>{
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        })
        setInput('')
    }
    return (
    <form className= " m-2 bg-violet-950 rounded-sm">
        {props.edit? (
        <><input type='text'
        placeholder='Update your item'
        value={input}
        name='text'
        className= " rounded-sm m-1 p-1"
        onChange={handelChange}
        // ref={inputRef}
        />
        
        <button className= " text-white" onClick={handelSubmit}>Update</button>
        </>
        ):(
        <><input type='text'
        placeholder='Add a todo'
        value={input}
        name='text'
        className= " rounded-sm m-1 p-1"
        onChange={handelChange}
        // ref={inputRef}
        />
        
        <button className=" text-white m-1"  onClick={handelSubmit}>Add todo</button>
        </>)}
    </form>
    )
}

export default TodoForm