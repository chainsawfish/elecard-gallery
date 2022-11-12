import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import constants from "../module/constants";
const TreeNode = ({ imageUrl, sign }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const changeDisplayStyle = (value) => {
    return value ? { display: "block" } : { display: "none" };
  };
  return (
    !(localStorage.getItem(imageUrl) === "hidden") && (
      <div className="treeImages" style={changeDisplayStyle(sign)}>
        <img
          src={constants.IMG_URL + imageUrl}
          alt={imageUrl}
          onClick={handleOpen}
        />
        <Modal open={open} onClose={handleClose}>
          <Box sx={constants.modalStyle}>
            <img src={constants.IMG_URL + imageUrl} alt={imageUrl} />
          </Box>
        </Modal>
      </div>
    )
  );
};

export default TreeNode;
