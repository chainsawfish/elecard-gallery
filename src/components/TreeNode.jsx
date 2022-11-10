import { useState } from "react";
import constants from "../module/constants";

const TreeNode = ({ imageUrl, sign }) => {
  return sign ? (
    <h5 className="treeImages" style={{ display: "block" }}>
      {constants.IMG_URL + imageUrl}{" "}
    </h5>
  ) : (
    <h5 className="treeImages" style={{ display: "none" }}>
      {constants.IMG_URL + imageUrl}{" "}
    </h5>
  );
};

export default TreeNode;
