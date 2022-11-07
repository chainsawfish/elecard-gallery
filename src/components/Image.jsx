import React from "react";
import style from "./Image.module.css";
import constants from "../module/constants";

const Image = ({ imageUrl, fileSize, category, timeStamp }) => {
  return (
    <div className={style.imageContainer}>
      <img
        className={style.image}
        src={constants.IMG_URL + imageUrl}
        alt={imageUrl}
      />
      <div className={style.imageText}>
        <p>{imageUrl}</p>
      </div>
      <div className={style.imageCross}>✕</div>
    </div>
  );
};

export default Image;
