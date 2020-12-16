import React from 'react'

export default function Todos(props) {

    const {todos} = props

    console.log(props)

    const todoList = todos.map(todo => {
        return (
            <h3>{todo.task}</h3>
        )
    })


    return (
        <div>
            {todoList}
        </div>
    )
}
