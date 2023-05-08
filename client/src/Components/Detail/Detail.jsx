import style from "./Detail.module.css";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, resetDetail } from "../../redux/actions";
import NavBar from "../NavBar/NavBar";
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
    <>
      <NavBar />
      <div className={style.detail_container_All}>
        <div className={style.detail_container}>
          <div className={style.detail_recipe}>
            <button className={style.detail_button} onClick={onClick}>
              Go Home
            </button>
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
              className={style.detail_text}
              dangerouslySetInnerHTML={{ __html: detail.summary }}
            />
          </div>
          <div className={style.detail_container_img}>
            <img
              className={style.detail_img}
              src={detail.image ? detail.image : "https://cutt.ly/b2FeLSa"}
              alt={detail.name}
            />
          </div>
        </div>
        <div className={style.detail_container_step}>
          <span className={style.detail_step_title}>
            <b>Steps: </b>
          </span>
          <p
            className={style.detail_step_text}
            dangerouslySetInnerHTML={{
              __html: detail.stepByStep
                ? detail.stepByStep
                : "This recipe has no preparation steps",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Detail;
