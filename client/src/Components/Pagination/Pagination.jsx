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
      {/* <ul className={`${style.list_ul} ${style.prueba_1}`}> */}
      <ul className={style.list_ul}>
        {numberPage &&
          numberPage.map((e, index) => (
            <button
              onClick={() => paginado(e)}
              className={index === page - 1 ? style.active : style.disable_li}
            >
              {e}
            </button>
          ))}
      </ul>
      <ul className={style.prueba_1}>
        {numberPage &&
          numberPage.map((e, index) => {
            if (page < 7) {
              if (e <= 6) {
                return (
                  <button
                    onClick={() => paginado(e)}
                    className={
                      index === page - 1 ? style.active : style.disable_li
                    }
                  >
                    {e}
                  </button>
                );
              } else if (e === 7) {
                return (
                  <>
                    <span className={style.dot}>...</span>
                  </>
                );
              } else if (e === max) {
                return (
                  <button
                    onClick={() => paginado(e)}
                    className={
                      index === page - 1 ? style.active : style.disable_li
                    }
                  >
                    {e}
                  </button>
                );
              }
            } else if (page >= 7) {
              if (e === 1) {
                return (
                  <button
                    onClick={() => paginado(e)}
                    className={
                      index === page - 1 ? style.active : style.disable_li
                    }
                  >
                    {e}
                  </button>
                );
              } else if (e === 2) {
                return (
                  <>
                    <span className={style.dot}>...</span>
                  </>
                );
              } else if (e >= 7) {
                return (
                  <button
                    onClick={() => paginado(e)}
                    className={
                      index === page - 1 ? style.active : style.disable_li
                    }
                  >
                    {e}
                  </button>
                );
              }
            }
            return null;
          })}
      </ul>

      <button
        title="nextPage"
        onClick={nextPage}
        className={`${style.pagination_button} ${style.probando}`}
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
