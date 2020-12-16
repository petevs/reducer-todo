import React from 'react'

export default function Todos(props) {

    const {todos} = props

    const todoList = todos.map(todo => {
        return (
            <h3 key={todo.id}>{todo.task}</h3>
        )
    })


    return (
        <div>
            {todoList}
        </div>
    )
}
