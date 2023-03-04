import React from "react";

import { useState } from "react";
import { useEffect } from "react";

import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaList from "../components/PizzaList";
import Pagination from "../components/Pagination";
const Home = ({ searchValue }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, SetSort] = useState({
    name: "популярности",
    sort: "rating",
  });
  const loading = isLoading;

  useEffect(() => {
    setIsLoading(false);
    const sortBy = sort.sort.replace(
      "-",
      ""
    ); /* говорим удалить из свойства минус */
    const order = sort.sort.includes("-")
      ? "asc"
      : "desc"; /* если в сортировке был минус, делай сортировку по возрастанию */
    const category =
      categoryId > 0
        ? `category=${categoryId}`
        : ""; /* если категория выбрана ВСЕ то ничего не меняй, оставляй все пиццы, в ином случае подставь нужную категорию, если id меньше нуля  */
    /*     const search = searchValue ? `&search=${searchValue}` : ""; */

    fetch(
      `https://63fdf3a4cd13ced3d7c30d38.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });

    window.scrollTo(0, 0); /* при первом рендере сделать скролл вверх */
  }, [categoryId, sort, currentPage]);
  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        ></Categories>
        <Sort value={sort} onSort={(i) => SetSort(i)}></Sort>
      </div>
      <h2 className="content__title">Все пиццы</h2>

      <PizzaList
        searchValue={searchValue}
        pizzas={items}
        loading={loading}
      ></PizzaList>
      <Pagination onChangePage={(n) => setCurrentPage(n)}></Pagination>
    </>
  );
};

export default Home;
