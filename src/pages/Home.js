import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaList from "../components/PizzaList";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId, setCurrentPage } from "../redux//slices/filterSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  ); /* берем из фильтра categoryId и sort */
  /* filter берем из store, categoryId из initialState */
  const sortType = sort.sort;
  const onClickCategory = (id) => {
    dispatch(setCategoryId(id)); /* дай нам функцию, которая меняет наш стейт */
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  /*   const [currentPage, setCurrentPage] = useState(1); */
  const loading = isLoading;

  useEffect(() => {
    setIsLoading(true);
    const sortBy = sortType.replace(
      "-",
      ""
    ); /* говорим удалить из свойства минус */
    const order = sortType.includes("-")
      ? "asc"
      : "desc"; /* если в сортировке был минус, делай сортировку по возрастанию */
    const category =
      categoryId > 0
        ? `category=${categoryId}`
        : ""; /* если категория выбрана ВСЕ то ничего не меняй, оставляй все пиццы, в ином случае подставь нужную категорию, если id меньше нуля  */
    /*     const search = searchValue ? `search=${searchValue}` : "";  поиск бек*/
    axios
      .get(
        `https://63fdf3a4cd13ced3d7c30d38.mockapi.io/items?page=${currentPage}&limit=9&${category}&sortBy=${sortBy}&order=${order}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0); /* при первом рендере сделать скролл вверх */
  }, [categoryId, sortType, currentPage]);
  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={onClickCategory}
        ></Categories>
        <Sort></Sort>
      </div>
      <h2 className="content__title">Все пиццы</h2>

      <PizzaList
        searchValue={searchValue}
        pizzas={items}
        loading={loading}
      ></PizzaList>
      <Pagination
        currentPage={currentPage}
        onChangePage={onChangePage}
      ></Pagination>
    </>
  );
};

export default Home;
