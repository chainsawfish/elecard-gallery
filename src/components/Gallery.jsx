import Image from "./Image";
import style from "./Gallery.module.css"
import {AppContext} from "../App";
import {useContext} from "react";
import constants from "../module/constants";

const Gallery = ({ images }) => {
  const {currentPage} = useContext(AppContext)

  const isOnCurrentPage = (index) => {
      return (
          index >= (currentPage-1) * constants.numberOfImagesOnPage &&
          index <= currentPage * constants.numberOfImagesOnPage
      );
  };
  return (
    <div className={style.gallery}>
      {images.map((el, index) => {
        return (
          isOnCurrentPage(index) && !(localStorage.getItem(el.image) === "hidden") && (
            <Image
              imageUrl={el.image}
              key={el.image}
              fileSize={el.filesize}
              category={el.category}
              timeStamp={el.timestamp}
            />
          )
        );
      })}
    </div>
  );
};
export default Gallery;
