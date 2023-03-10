import { useState } from "react";
import style from "./Pagination.module.css";

const Pagination = ({ page, setPage, max, paginado }) => {
  const [input, setInput] = useState(1);
  const numberPage = [];

  const nextPage = () => {
    setInput(input + 1);
    setPage(page + 1);
  };
  const previusPage = () => {
    setInput(input - 1);
    setPage(page - 1);
  };

  const firstPage = () => {
    setInput(1);
    setPage(1);
  };

  const lastPage = () => {
    setInput(max);
    setPage(max);
  };
  for (let i = 0; i < max; i++) {
    numberPage.push(i + 1);
  }
  return (
    <nav className={style.pagination_container}>
      <button
        title="firstPage"
        onClick={firstPage}
        className={style.pagination_button}
      >
        {"<<"}
      </button>
      <button
        title="previusPage"
        onClick={previusPage}
        className={style.pagination_button}
        disabled={page === 1 || page < 1}
      >
        {"<"}
      </button>
      <ul className={style.list_ul}>
        {numberPage &&
          numberPage.map((e, index) => (
            <li
              key={e}
              className={index === page - 1 ? style.active : style.disable_li}
            >
              <a onClick={() => paginado(e)}>{e}</a>
            </li>
          ))}
      </ul>
      <button
        title="nextPage"
        onClick={nextPage}
        className={style.pagination_button}
        disabled={page === max}
      >
        {">"}
      </button>
      <button
        title="lastPage"
        onClick={lastPage}
        className={style.pagination_button}
      >
        {">>"}
      </button>
    </nav>
  );
};

export default Pagination;
