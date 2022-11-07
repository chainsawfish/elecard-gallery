import React from "react";
import style from "./Image.module.css";

const Image = ({ imageUrl, fileSize, category, timeStamp }) => {
  return (
    <div className={style.imageContainer}>
      <img
        className={style.image}
        src="http://contest.elecard.ru/frontend_data/animals/animals-2939726__480.jpg"
        alt={imageUrl}
      />
      <div class={style.imageText}>
        <p>Some description for image</p>
      </div>
      <div class={style.imageCross}>✕</div>
    </div>
  );
};

export default Image;
