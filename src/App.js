import "./App.css";

import Home from "./page/Home";
import Todos from "./page/Todos";

import { Route, Routes, NavLink } from "react-router-dom";
import { Button } from "./components";

function App() {
  return (
    <div className="container">
      <div className="link_todo ">
        <NavLink to="/home">
          <Button className='btn_todo'>Home</Button>
        </NavLink>
        <NavLink to="/todos">
        <Button className='btn_todo'>Todo</Button>
        </NavLink>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
