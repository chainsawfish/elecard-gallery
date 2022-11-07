import Image from "./Image";

const Gallery = ({ images }) => {
  return images.map((el, index) => {
    return (
      <Image
        source={el.image}
        key={index}
        fileSize={el.filesize}
        category={el.category}
        timeStamp={el.timestamp}
      />
    );
  });
};

export default Gallery;
