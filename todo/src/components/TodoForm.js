import React from 'react'

export default function TodoForm() {
    return (
        <div>
            <form>
                <input 
                    type='text' 
                    placeholder='Enter todo' 
                />
                <button>Add Todo</button>
            </form>
        </div>
    )
}
