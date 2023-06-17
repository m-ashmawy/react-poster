import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

const initial_posts = [];
function App() {
  const [posts, setPosts] = useState(initial_posts);
  const [showModal, setShowModal] = useState(false);

  const onSubmitNewPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };
  const onCreatePost = () => {
    setShowModal(true);
  };
  const hideModalHandler = () => {
    setShowModal(false);
  };
  return (
    <>
      <MainHeader onCreatePost={onCreatePost} />
      <main>
        <PostsList
          showModal={showModal}
          hideModalHandler={hideModalHandler}
          posts={posts}
          onSubmitNewPost={onSubmitNewPost}
        />
      </main>
    </>
  );
}

export default App;
