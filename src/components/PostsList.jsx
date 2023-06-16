/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
function PostsList({ showModal, hideModalHandler }) {
  return (
    <>
      {showModal &&
        createPortal(
          <Modal hideModalHandler={hideModalHandler}>
            <NewPost />
          </Modal>,
          document.getElementById("modal-root")
        )}

      <ul className={classes["posts-list"]}>
        <Post author="Mohamed" body="my name is Mohamed" />
        <Post author="Max" body="my name is max" />
      </ul>
    </>
  );
}

export default PostsList;
