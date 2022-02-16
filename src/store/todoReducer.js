const defaultState = {
  todos: [],
};

export const GET_MANY_TODOS = "GET_MANY_TODOS";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_MANY_TODOS:
      return { ...state, todos: action.payload };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      const findedIndex = state.todos.findIndex(
        (todo) => todo.id == action.payload.id
      );

      if (findedIndex !== -1) {
        const newArray = [...state.todos];

        newArray[findedIndex] = action.payload;

        return {
          ...state,
          todos: newArray,
        };
      }

      return state;
    default:
      return state;
  }
};

export const getManyTodosAction = (payload) => ({
  type: GET_MANY_TODOS,
  payload,
});

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const removeTodo = (payload) => ({
  type: REMOVE_TODO,
  payload,
});

export const completedTodo = (payload) => ({
  type: UPDATE_TODO,
  payload,
});
