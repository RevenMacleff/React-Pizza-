import React from "react";
/* import pizzas from "../pizzas.json"; */

import PizzaBlock from "./PizzaBlock";
import Skeleton from "./PizzaBlock/Skeleton";

const PizzaList = ({ pizzas, loading, searchValue }) => {
  const items = pizzas
/*     .filter((obj) => {
      if (
        obj.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    })  *//*  ВАРИАНТ ПОИСКА ДЛЯ СТАТИКИ БЕЗ БЕКЕНДА */
    .map((pizzaItem) => {
      return <PizzaBlock {...pizzaItem} key={pizzaItem.id}></PizzaBlock>;
    });
  const skeletons = [...new Array(9)].map((_, index) => (
    <Skeleton key={index}></Skeleton>
  ));
  const elements = loading ? skeletons : items;
  return <div className="content__items">{elements}</div>;
};

export default PizzaList;
