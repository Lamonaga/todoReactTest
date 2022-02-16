import "./App.css";

import Home from "./page/Home";
import Todos from "./page/Todos";

import { Route, Routes, NavLink } from "react-router-dom";
import { Button } from "./components";

function App() {
  return (
    <div className="container">
      <div className="link_auth">
        <NavLink to="/home">
          <Button>Home</Button>
        </NavLink>
        <NavLink to="/todos">
          <button className="btn_auth">Todos</button>
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
