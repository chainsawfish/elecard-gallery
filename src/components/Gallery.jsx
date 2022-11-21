import Image from "./Image";

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((el, index) => {
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
      })}
    </div>
  );
};
export default Gallery;
