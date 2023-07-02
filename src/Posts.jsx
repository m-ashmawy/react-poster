// import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import PostsList from "./components/PostsList";

function Posts() {
  // const [posts, setPosts] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // ////////////////////////////////////////////////////////////////

  // const getDataBasePosts = () => {
  //   fetch("http://localhost:8080/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data.posts);
  //     });
  // };

  // useEffect(() => {
  //   getDataBasePosts();
  // }, []);

  // const onSubmitNewPost = (newPost) => {
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(newPost),
  //     headers: { "Content-Type": "application/json" },
  //   }).then(() => getDataBasePosts());
  // };

  // ////////////////////////////////////////////////////////////////

  // const hideModalHandler = () => {
  //   setShowModal(false);
  // };
  return (
    <>
      <main>
        <Outlet />
        <PostsList
        // showModal={showModal}
        // hideModalHandler={hideModalHandler}
        // posts={posts}
        // onSubmitNewPost={onSubmitNewPost}
        />
      </main>
    </>
  );
}

export default Posts;

export async function postsLoader() {
  const res = await fetch("http://localhost:8080/posts");
  const data = await res.json();
  return data.posts;
}
