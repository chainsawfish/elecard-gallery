import React, {useState} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import constants from "../module/constants";
import style from "./TreeNode.module.css";
import getCleanName from "../module/getCleanName";
import getDate from "../module/getDate";

const TreeNode = ({image}) => {
    const [sign, setSign] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let imageUrl = image.image

    return (
        <>
            <h4 className={style.imageNodeName} onClick={(e) => {
                setSign(!sign)
                e.stopPropagation()
            }}>{constants.isOpened(sign)} {getCleanName(imageUrl)}:</h4>
        <div className="treeImages" style={constants.changeDisplayStyle(sign)}>
            <div className={style.imageContainer}  >
                <img alt={imageUrl}
                     src={constants.IMG_URL + imageUrl}
                     onClick={handleOpen}
                />
                <div className={style.imageText}>
                    <p><b>category:</b> {image.category}</p>
                    <p><b>name:</b> {getCleanName(imageUrl)}</p>
                    <p><b>size:</b> {Number(Math.ceil(image.filesize / 1024))} KB</p>
                    <p><b>date:</b> {getDate(image.timestamp)}</p>
                </div>

                <Modal open={open} onClose={handleClose}>
                    <Box sx={constants.modalStyle}>
                        <img src={constants.IMG_URL + imageUrl} alt={imageUrl}/>
                    </Box>
                </Modal>
            </div>

        </div>
        </>
    );
};

export default TreeNode;