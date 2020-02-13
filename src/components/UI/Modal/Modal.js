import React from "react";
import "./Modal.css";
import Ax from "../../../hoc/Ax";
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => (
  <Ax>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className="Modal"
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </Ax>
);

export default Modal;
