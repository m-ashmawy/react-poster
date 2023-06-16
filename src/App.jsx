import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";
function App() {
  const [showModal, setShowModal] = useState(false);
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
        <PostsList showModal={showModal} hideModalHandler={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
