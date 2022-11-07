import React from "react";
import style from "./Image.module.css";
import constants from "../module/constants";

const Image = ({ imageUrl, fileSize, category, timeStamp }) => {
  const hideImage = (img) => {
    localStorage.setItem(img, "hidden");
  };
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
      <div className={style.imageCross} onClick={() => hideImage(imageUrl)}>
        ✕
      </div>
    </div>
  );
};

export default Image;
