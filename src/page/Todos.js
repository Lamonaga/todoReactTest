import { getFetchTodos, postFetchTodo } from "../asyncTodos/todos";
import { useDispatch, useSelector } from "react-redux";
import {Input, Button, Header, List} from '../components';
import { useEffect, useState } from "react";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(getFetchTodos());
  }, [])
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      dispatch(postFetchTodo(value, 1))
      console.log(todos);
    }

    setValue("");
  };
  return (
    <div className="inner__item">
      <Header />
      <form className="form" onSubmit={handleSubmit}>
        <Input
          className="input__body"
          onChange={handleChange}
          value={value}
          type="text"
          placeholder="Добавить дело"
        />
        <Button className="form__btn" type="submit">
          Добавить
        </Button>
      </form>
      <List/>
      
    </div>
  );
};

export default Todos;
