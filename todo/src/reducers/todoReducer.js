export const initialState = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ];


// const addTodo = (e, item) => {
// e.preventDefault();
// const newTodo = {
//     task: item,
//     id: Date.now(),
//     completed: false
// }
// setTodos([
//     ...todos,
//     newTodo
//     ])
// }


export const todoReducer = (state, action) => {

    switch(action.type) {
        case('ADD_TODO'):
            console.log([...state, {task: action.payload}])
            return [...state,
                 {task: action.payload,
                id: Date.now(),
            completed: false}]
        default:
            return state
    }
}