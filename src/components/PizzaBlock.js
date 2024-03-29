import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

const typeNames = ["тонкое", "традиционные"];

const PizzaBlock = ({ id, title, imageUrl, price, sizes, types }) => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) =>
    state.cart.items.filter((obj) => obj.id === id)
  );
  const addedCount = cartItem.reduce((sum, item) => sum + item.count, 0);
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const [typePrice, setTypePrice] = useState(0);
  const [sizePrice, setSizePrice] = useState(0);
  const [totalPlus, setTotalPlus] = useState(0);
  const [pizzaPrice, setPizzaPrice] = useState(price);

  useEffect(() => {
    const newPrice = price + sizePrice + typePrice;
    setTotalPlus(sizePrice + typePrice);
    setPizzaPrice(newPrice);
  }, [price, sizePrice, typePrice]);

  const onChangeType = (type) => {
    if (type === 0) {
      setTypePrice(0);
    } else if (type === 1) {
      setTypePrice(15);
    }
    setActiveType(type);
  };
  const onChangeSize = (size) => {
    if (size === 0) {
      setSizePrice(0);
    } else if (size === 1) {
      setSizePrice(30);
    } else if (size === 2) {
      setSizePrice(50);
    }
    setActiveSize(size);
  };
  const onClickAdd = () => {
    const item = {
      id,
      title,
      price: pizzaPrice,
      imageUrl,
      type: typeNames[activeType],
      size: activeSize,
    };
    dispatch(addItem(item));
  };

  return (
    <div>
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type, index) => (
              /*               <li>{type === 0 ? "тонкое" : "традиционное"}</li> */
              <li
                key={index}
                onClick={() => onChangeType(type)}
                className={activeType === type ? "active" : ""}
              >
                {typeNames[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, id) => (
              <li
                key={id}
                onClick={() => onChangeSize(id)}
                className={activeSize === id ? "active" : ""}
              >
                {size} см
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{pizzaPrice} руб</div>
          <button
            onClick={onClickAdd}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>{addedCount}</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
