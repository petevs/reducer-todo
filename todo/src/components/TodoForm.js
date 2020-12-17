import React, {useState, useReducer} from 'react'
import {todoReducer, initialState} from '../reducers/todoReducer'

export default function TodoForm() {

    const [newTodo, setNewTodo] = useState('')
    const [state, dispatch] = useReducer(todoReducer, initialState)
    
    const handleChanges = (e) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewTodo('')
    }

    const completed = (item) => {
        if(item) {
            return 'completed'
        }
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
                <button onClick={() => dispatch({type: 'ADD_TODO', payload: newTodo})}>Add Todo</button>
            </form>

            {state.map(item => {

                    return (
                        <h3 
                            key={item.id}
                            className={completed(item.completed)} 
                            onClick={() => dispatch({type: 'TOGGLE_EDITING', payload: item.id})}
                        >
                            {item.task}
                        </h3>
                        )
                }
            )}

            <button onClick={() => dispatch({type: 'CLEAR_COMPLETED',})}>Clear Completed Todos</button>
        </div>
    )
}
