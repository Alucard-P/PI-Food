import style from "./Detail.module.css";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, resetDetail } from "../../redux/actions";
import Loading from "../Loading/Loading";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getDetail(id));

    return () => {
      dispatch(resetDetail());
    };
  }, [id, dispatch]);
  let detail = useSelector((state) => state.recipeDetail);

  const onClick = (e) => {
    history.push("/home");
  };

  return !detail.name ? (
    <Loading />
  ) : (
    <div className={style.prueba}>
      <div className={style.detail_container}>
        <div className={style.detail_recipe}>
          <button className={style.detail_button} onClick={onClick}>
            Go Home
          </button>
          {console.log(detail)}
          <p>
            <b>Name:</b> {detail.name}
          </p>
          <p>
            <b>HealthScore:</b> {detail.healthScore}
          </p>
          <p>
            <b>Type of Diets:</b>{" "}
            {detail.typeofdiets && detail.typeofdiets.join(", ")}{" "}
          </p>
          <span>
            <b>Summary: </b>
          </span>
          <p
            className={style.text_filtro}
            dangerouslySetInnerHTML={{ __html: detail.summary }}
          />
        </div>
        <div className={style.detail_img}>
          <img
            className={style.image_detail}
            src={detail.image ? detail.image : "https://cutt.ly/b2FeLSa"}
            alt={detail.name}
          />
        </div>
      </div>
      <div className={style.step_container}>
        <span className={style.detail_step_title}>
          <b>Steps: </b>
        </span>
        <p
          className={style.detail_step}
          dangerouslySetInnerHTML={{
            __html: detail.stepByStep
              ? detail.stepByStep
              : "This recipe has no preparation steps",
          }}
        />
        {/* {console.log(detail.stepByStep)} */}
      </div>
    </div>
  );
};

export default Detail;
