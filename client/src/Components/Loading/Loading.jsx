import style from "./Loading.module.css";
import imageLoading from "../../Images/pizza-icegif.gif";

const Loading = () => {
  return (
    <div className={style.Loading}>
      <img src={imageLoading} alt="Loading..." />
    </div>
  );
};

export default Loading;
