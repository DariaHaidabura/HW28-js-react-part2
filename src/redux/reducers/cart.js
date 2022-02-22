const initialState = {
  todos : [],
  totalCount: 0,
  isLoaded: false
}

const cart = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_CART' :
      return {
        todos: [...state.todos, action.payload],
        totalCount: state.totalCount + 1
      }
    case 'REMOVE_CART' : 
    return {
      todos: state.todos.filter((todo) => action.payload.id !== todo.id),
      totalCount: state.totalCount + 1
    }
    case 'ADD_FAV' : 
    return {
      todos: action.payload.todos,
      totalCount: action.payload.todos.length,
      isLoaded: true
    }
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };
      
    default: 
    return state;
  }
}

export default cart;