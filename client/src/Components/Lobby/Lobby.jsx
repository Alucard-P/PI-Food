import { Link } from "react-router-dom";
import style from "./Lobby.module.css";
const Lobby = () => {
  return (
    <>
      <div className={style.lobby_entorno}>
        <div className={style.lobby_container}>
          <p className={style.lobby_text}>Welcome </p>
          {/* <h1 className={style.color}>Alucard Restaurant </h1>
          <h2 className={style.color}>------------- </h2> */}
          <Link to={"/home"}>
            <button className={style.lobby_button}>Book Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Lobby;
