const todoReducer = (state, action) => {

    switch(action.type) {
        case('ADD_TODO'):
            console.log('adding todo')
            return state
        default:
            return state
    }
}

export default todoReducer