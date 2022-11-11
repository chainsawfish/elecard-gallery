import React, { useContext } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import style from "./Image.module.css";
import constants from "../module/constants";
import getDate from "../module/getDate";
import { AppContext } from "../App";

const Image = ({ imageUrl, fileSize, category, timeStamp }) => {
  const { deleteHandler } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        onClick={handleOpen}
      />
      <div className={style.imageText}>
        <strong>{category}:</strong>
        <p>{cleanName}</p>
        <p>{Number(Math.ceil(fileSize / 1024))} KB</p>
        <p>{getDate(timeStamp)}</p>
      </div>
      <div className={style.imageCross} onClick={() => deleteHandler(imageUrl)}>
        ✕
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={constants.modalStyle}>
          <img src={constants.IMG_URL + imageUrl} alt={imageUrl} />
        </Box>
      </Modal>
    </div>
  );
};

export default Image;
