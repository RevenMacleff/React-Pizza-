import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
/* import pizzas from "./pizzas.json"; */
/* Ctrl + F поик и замена текста */
import "./scss/app.scss";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></Header>
      <div className="content">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home searchValue={searchValue}></Home>}
            ></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
            {/* звездочка говорит нам о том, что если путь не найден, то перейти сюда */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
