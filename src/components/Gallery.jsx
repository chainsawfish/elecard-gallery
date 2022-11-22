import Image from "./Image";
import style from "./Gallery.module.css"
import {AppContext} from "../App";
import {useContext} from "react";

const Gallery = ({ images }) => {
  const {currentPage, numberOfImagesOnPage} = useContext(AppContext)

  const isOnCurrentPage = (index) => {
      return (
          index >= (currentPage-1) * numberOfImagesOnPage &&
          index <= currentPage * numberOfImagesOnPage
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
