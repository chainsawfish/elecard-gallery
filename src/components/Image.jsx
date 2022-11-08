import React from "react";
import style from "./Image.module.css";
import constants from "../module/constants";
import getDate from "../module/getDate";

const Image = ({ imageUrl, fileSize, category, timeStamp, deleteHandler }) => {
  let cleanName = imageUrl
    .split("/")
    .pop()
    .replace(/[-_.,0-9]/g, "")
    .replace("jpg", "");

  return (
    <div className={style.imageContainer}>
      <img
        className={style.image}
        src={constants.IMG_URL + imageUrl}
        alt={imageUrl}
      />
      <div className={style.imageText}>
        <p>{cleanName}</p>
        <p>{getDate(timeStamp)}</p>
      </div>
      <div className={style.imageCross} onClick={() => deleteHandler(imageUrl)}>
        ✕
      </div>
    </div>
  );
};

export default Image;
