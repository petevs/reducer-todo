import React, {useState, useEffect, useReducer} from 'react'
import todoReducer from '../reducers/todoReducer'

export default function TodoForm(props) {

    const {addTodo} = props

    const [newTodo, setNewTodo] = useState('')
    const [state, dispatch] = useReducer(todoReducer, '')
    
    const handleChanges = (e) => {
        setNewTodo(e.target.value)
    }

    useEffect(() => {
        console.log(newTodo)
    },[newTodo])

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(e, newTodo)
        setNewTodo('')
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    name='newTodo'
                    id='newTodo' 
                    type='text'
                    onChange={handleChanges}
                    value={newTodo} 
                    placeholder='Enter todo' 
                />
                <button onClick={() => dispatch({type: 'ADD_TODO', payload: {newTodo}})}>Add Todo</button>
            </form>
        </div>
    )
}
