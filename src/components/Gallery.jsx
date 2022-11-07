import Image from "./Image";

const Gallery = ({ images }) => {
  const isHidden = (img) => {
    if (localStorage.hasOwnProperty(img));
    return;
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
        />
      )
    );
  });
};
export default Gallery;
