import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
/* import pizzas from "./pizzas.json"; */
/* Ctrl + F поик и замена текста */
import "./scss/app.scss";

export const SearchContext = React.createContext("");
function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header></Header>
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
              {/* звездочка говорит нам о том, что если путь не найден, то перейти сюда */}
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
