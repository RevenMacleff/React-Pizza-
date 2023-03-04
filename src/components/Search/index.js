import React from "react";
import styles from "./Search.module.scss";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        height="24"
        version="1.1"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(0 -1028.4)">
          <path
            d="m14.938 12.281-2.844 2.813 6.906 6.906 2.844-2.844-6.906-6.875z"
            fill="#95a5a6"
            transform="translate(0 1028.4)"
          />
          <path
            d="m15.562 1041.2c-0.473 1.3-1.472 2.4-2.75 2.9l2.188 2.3c1.16-0.7 2.137-1.7 2.812-2.9l-2.25-2.3z"
            fill="#7f8c8d"
          />
          <path
            d="m18 10a8 8 0 1 1 -16 0 8 8 0 1 1 16 0z"
            fill="#bdc3c7"
            transform="translate(0 1028.4)"
          />
          <path
            d="m15 10a5 5 0 1 1 -10 0 5 5 0 1 1 10 0z"
            fill="#ecf0f1"
            transform="translate(0 1028.4)"
          />
        </g>
      </svg>
      <input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы...."
      />
      {searchValue && (
        <svg
          onClick={() => {
            setSearchValue("");
          }}
          className={styles.close}
          height="32px"
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            fillRule="evenodd"
            id="Page-1"
            stroke="none"
            strokeWidth="1"
          >
            <g fill="#929292" id="icon-27-trash-can">
              <path
                d="M23,7 L21,7 L21,7 L21,5.0048815 C21,3.89761602 20.1041422,3 19.0026083,3 L13.9973917,3 C12.8942627,3 12,3.8938998 12,5.0048815 L12,7 L10,7 L6,7 L6,8 L8,8 L8,26.9931517 C8,28.6537881 9.33396149,30 11.0001262,30 L21.9998738,30 C23.6567977,30 25,28.6640085 25,26.9931517 L25,8 L27,8 L27,7 L23,7 L23,7 Z M12,10 L12,27 L13,27 L13,10 L12,10 L12,10 Z M16,10 L16,27 L17,27 L17,10 L16,10 L16,10 Z M20,10 L20,27 L21,27 L21,10 L20,10 L20,10 Z M14.0029293,4 C13.4490268,4 13,4.44266033 13,4.99895656 L13,7 L20,7 L20,4.99895656 C20,4.44724809 19.5621186,4 18.9970707,4 L14.0029293,4 L14.0029293,4 Z"
                id="trash-can"
              />
            </g>
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
