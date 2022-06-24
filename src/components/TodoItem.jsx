import React from 'react'
import { BiCheckCircle, BiTrash } from "react-icons/bi"

export default function TodoItem(props) {
    const { todo, hapusTodo, completeTodo } = props
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}>
        {props.todo.text}
        <div className="iconsContainer">
        <BiTrash 
            className="icon"
            onClick={() => hapusTodo(todo.id)} 
        />
        <BiCheckCircle
            className="icon" 
            onClick={() => completeTodo(todo.id)}
        />
        </div>
    </div>
  )
}
