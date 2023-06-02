import style from "./Error.module.css";

const Error = () => {
  return (
    <div className={style.error_container}>
      <div className={style.error_prueba}>
        <p className={style.p_max}>404</p>
        <p className={style.p_max_2}>Page not found</p>
        <p>Oops...The link you clicked may be broken or the page</p>
        <p>may have been removed.We´re sorry </p>
      </div>
    </div>
  );
};

export default Error;
