import { useState, useEffect, memo } from "react";

import { Button } from "..";

import "./style.css";

const ListItem = ({ todo, heandleRemove, heandleCompleted, headleChange }) => {
  const [todoReadOnly, setTodoReadOnly] = useState(true);
  const [todoValue, setTodoValue] = useState(todo.title);

  useEffect(() => {
    setTodoValue(todo.title);
  }, [todo.title]);

  const headleClick = (e) => {
    if (e.target.name === "remove") {
      heandleRemove(todo.id, { id: todo.id });
    } else {
      heandleCompleted(todo.id, { completed: !todo.completed });
    }
  };

  const headleChangeTodo = () => {
    if (todoValue.trim()) {
      headleChange(todo.id, { title: todoValue });
    } else {
      heandleRemove(todo.id, { id: todo.id });
    }
  };

  const editLi = () => {
    setTodoReadOnly((prevState) => !prevState);
  };

  const heandleValueChange = (e) => {
    setTodoValue(e.target.value);
  };

  return (
    <li className='li__todo__item'
      className={!todo.completed ? null : "todo__comp"}
      onDoubleClick={editLi}
    >
      <input
        className={
          !todo.completed ? "todo__input__text" : "todo__input__text todo__comp"
        }
        onBlur={headleChangeTodo}
        type="text"
        onChange={heandleValueChange}
        readOnly={todoReadOnly}
        value={todoValue}
      />
      <div>
        <Button name="create" onClick={headleClick}>
          Выполненно
        </Button>
      </div>
      <div>
        <Button name="remove" onClick={headleClick}>
          Удалить
        </Button>
      </div>
    </li>
  );
};

export default memo(ListItem);
