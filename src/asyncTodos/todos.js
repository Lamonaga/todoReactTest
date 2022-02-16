import { addTodo, getManyTodosAction, completedTodo, removeTodo } from "../store/todoReducer";

import axios from "axios";

export const getFetchTodos = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => dispatch(getManyTodosAction(response.data)));
  };
};

export const postFetchTodo = (title, userId) => {
  return (dispatch) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        userId,
        completed: true,
      })
      .then((res) => {
        dispatch(addTodo(res.data));
      });
  };
};

export const patchFetchTodo = (id, params) => {
  return (dispatch) => {
    axios
      .patch(`https://jsonplaceholder.typicode.com/todos/${id}`, params)
      .then((res) => {
        dispatch(completedTodo(res.data));
      });
  };
};

export const removeFetchTodo = (id, params) => {
  return (dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`, params)
      .then(() => {
        dispatch(removeTodo(params.id));
      });
  };
};