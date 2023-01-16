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
    <nav className={style.container}>
      {/* <h1>soy el componente Pagination</h1> */}
      <button title="firstPage" onClick={firstPage} className={style.button}>
        {"<<"}
      </button>
      <button
        title="previusPage"
        onClick={previusPage}
        className={style.button}
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
              {/* <button onClick={() => paginado(e)}>{e}</button> */}
            </li>
          ))}
      </ul>
      <button
        title="nextPage"
        onClick={nextPage}
        className={style.button}
        disabled={page === max}
      >
        {">"}
      </button>
      <button title="lastPage" onClick={lastPage} className={style.button}>
        {">>"}
      </button>
    </nav>
  );
};

export default Pagination;
