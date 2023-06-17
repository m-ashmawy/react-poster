import { useEffect, useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  ////////////////////////////////////////////////////////////////

  const getDataBasePosts = () => {
    console.log("fetching");
    fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
    console.log("finished fetching");
  };

  useEffect(() => {
    getDataBasePosts();
  }, []);

  const onSubmitNewPost = (newPost) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: { "Content-Type": "application/json" },
    }).then(() => getDataBasePosts());
  };

  ////////////////////////////////////////////////////////////////
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
