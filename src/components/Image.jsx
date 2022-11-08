import React from "react";
import { useState } from "react";
import style from "./Image.module.css";
import constants from "../module/constants";
import getDate from "../module/getDate";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "",
  border: "0px solid #000",
};

const Image = ({ imageUrl, fileSize, category, timeStamp, deleteHandler }) => {
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
        <Box sx={modalStyle}>
          <img src={constants.IMG_URL + imageUrl} alt={imageUrl} />
        </Box>
      </Modal>
    </div>
  );
};

export default Image;
