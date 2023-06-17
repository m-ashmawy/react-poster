/* eslint-disable react/prop-types */
import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ hideModalHandler, onSubmitNewPost }) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredText, setEnteredText] = useState("");

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const textInputHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onSubmitNewPost({ author: enteredName, body: enteredText, id: Date.now() });
    hideModalHandler();
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={nameInputHandler}
          value={enteredName}
        />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={5}
          style={{ resize: "none" }}
          onChange={textInputHandler}
          value={enteredText}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={hideModalHandler}>
          Cancel
        </button>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default NewPost;
