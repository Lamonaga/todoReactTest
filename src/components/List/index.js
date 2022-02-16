import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { patchFetchTodo, removeFetchTodo } from "../../asyncTodos/todos";

import { ListItem, Pagination, Loader } from "..";

import "./list.css";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const [currenPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(12);

  const lastTodoIndex = currenPage * todosPerPage;
  const firstTodoIndex = lastTodoIndex - todosPerPage;
  const currentTodo = todos.slice(firstTodoIndex, lastTodoIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  /**
   * @typedef TodoType
   * @type {object}
   * @property {number} id
   * @property {string} title
   * @property {boolean} completed
   */

  /**
   * @param {number} id
   * @param {TodoType} params
   */

   const heandleRemove = (id, params) => {
    dispatch(removeFetchTodo(id, params));
  };

  const heandleCompleted = (id, params) => {
    dispatch(patchFetchTodo(id, params));
  };

  const headleChange = (id, params) => {
    dispatch(patchFetchTodo(id, params));
  };

  if (currentTodo < 1) {
    return <Loader />;
  }

  return (
    <div className="list__item">
      <ul className="list">
        {currentTodo.map((item) => (
          <ListItem
            headleChange={headleChange}
            heandleRemove={heandleRemove}
            heandleCompleted={heandleCompleted}
            key={item.id}
            todo={item}
          />
        ))}
      </ul>
      <Pagination
        paginate={paginate}
        todosPerPage={todosPerPage}
        totalTodos={todos.length}
      />
    </div>
  );
};

export default List;
