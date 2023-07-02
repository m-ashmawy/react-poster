/* eslint-disable react/prop-types */
// import { createPortal } from "react-dom";
// import Modal from "./Modal";
// import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";
function PostsList() {
  const posts = useLoaderData();
  return (
    <>
      {/* {showModal &&
        createPortal(
          <Modal hideModalHandler={hideModalHandler}>
            <NewPost
              hideModalHandler={hideModalHandler}
              onSubmitNewPost={onSubmitNewPost}
            />
          </Modal>,
          document.getElementById("modal-root")
        )} */}

      {posts.length ? (
        <ul className={classes["posts-list"]}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <h2 style={{ textAlign: "center" }}>No posts yet!</h2>
      )}
    </>
  );
}

export default PostsList;
