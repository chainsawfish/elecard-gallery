import { useState } from "react";
import Image from "./Image";

const Gallery = ({ imagesArray }) => {
  const [images, setImages] = useState(imagesArray);

  const deleteHandler = (img) => {
    setImages(imagesArray.filter((el) => el.image !== img));
  };

  return images.map((el, index) => {
    return (
      !(localStorage.getItem(el.image) === "hidden") && (
        <Image
          imageUrl={el.image}
          key={index}
          fileSize={el.filesize}
          category={el.category}
          timeStamp={el.timestamp}
          onClick={deleteHandler}
        />
      )
    );
  });
};
export default Gallery;
