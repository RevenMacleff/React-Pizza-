const Categories = ({ value, onClickCategory }) => {
  /*   const [active, setActive] = useState(0); */
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const elements = categories.map((categoryName, id) => {
    return (
      <li
        key={id}
        onClick={() => onClickCategory(id)}
        className={value === id ? "active" : ""}
      >
        {categoryName}
      </li>
    );
  });

  return (
    <div>
      <div className="categories">
        <ul>{elements}</ul>
      </div>
    </div>
  );
};

export default Categories;
