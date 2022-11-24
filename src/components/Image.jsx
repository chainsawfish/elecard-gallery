import React, { useContext } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { motion, AnimatePresence } from "framer-motion";

import style from "./Image.module.css";
import constants from "../module/constants";
import getDate from "../module/getDate";
import getCleanName from "../module/getCleanName";
import { AppContext } from "../App";

const Image = ({ imageUrl, fileSize, category, timeStamp }) => {
  const { deleteHandler } = useContext(AppContext);
  const [isVisible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleVisibility = () => setVisible(!isVisible);

  // создание анимации закрытия картинки c помощью framer motion
  const animateVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, scale: 0, rotate: 90 },
  };
  return (
    <AnimatePresence>
      <motion.div
        animate={isVisible ? "open" : "closed"}
        variants={animateVariants}
        transition={{ ease: "linear" }}
      >
        <div className={style.imageContainer}>
          <div className={style.image} style={{backgroundImage: `url(${constants.IMG_URL + imageUrl})`}}
            onClick={handleOpen}>
          </div>
          <div className={style.imageText}>
            <p><b>category:</b> {category}</p>
            <p><b>name:</b> {getCleanName(imageUrl)}</p>
            <p><b>size:</b> {Number(Math.ceil(fileSize / 1024))} KB</p>
            <p><b>date:</b> {getDate(timeStamp)}</p>
          </div>
          <div
            className={style.imageCross}
            onClick={() => {
              handleVisibility();
              setTimeout(() => deleteHandler(imageUrl), 250);
            }}
          >
            <span>✕</span>
          </div>
          <Modal open={open} onClose={handleClose}>
            <Box sx={constants.modalStyle}>
              <img src={constants.IMG_URL + imageUrl} alt={imageUrl} />
            </Box>
          </Modal>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Image;
