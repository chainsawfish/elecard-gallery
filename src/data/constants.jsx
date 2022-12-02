import React from "react";

const constants = {
  JSON_URL: "http://contest.elecard.ru/frontend_data/catalog.json",
  IMG_URL: "http://contest.elecard.ru/frontend_data/",
  numberOfImagesOnPage: 30,
  isOpened:  (value) => value ? <span>[-]</span> : <span>[+]</span>,
  changeDisplayStyle:  (value) => value ? {display: "block"} : {display: "none"},
  notClickable: (value) => value ? {"pointer-events": "auto"} : {"pointer-events": "none"},
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "fit-content",
    bgcolor: "",
    border: "0px solid #000",
  },
};

export default constants;
