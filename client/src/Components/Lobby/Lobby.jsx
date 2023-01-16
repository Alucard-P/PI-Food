import { Link } from "react-router-dom";
import style from "./Lobby.module.css";
const Lobby = () => {
  return (
    <>
      <div className={style.entorno}>
        <div className={style.flexbox}>
          <h2 className={style.color}>Welcome to </h2>
          <h1 className={style.color}>Alucard Restaurant </h1>
          <h2 className={style.color}>------------- </h2>
          <Link to={"/home"}>
            <button className={style.button}>Book Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Lobby;
