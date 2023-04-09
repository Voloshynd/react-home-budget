import React from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

const Overlay = (props) => {
  return createPortal(
    <div className="overlay" onClick={props.closeModal}>
      {props.children}
    </div>,
    modalRoot
  );
};

export default Overlay;
