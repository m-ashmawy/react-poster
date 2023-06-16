/* eslint-disable react/prop-types */
// import ReactDom from "react-dom";
import classes from "./Modal.module.css";
function Modal(props) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.hideModalHandler}></div>
      <dialog className={classes.modal} open>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
