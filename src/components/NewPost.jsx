/* eslint-disable react/prop-types */
// import { useState } from "react";
import Modal from "./Modal";
import { Link, Form, redirect } from "react-router-dom";
import classes from "./NewPost.module.css";

function NewPost() {
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredText, setEnteredText] = useState("");

  // const nameInputHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };
  // const textInputHandler = (event) => {
  //   setEnteredText(event.target.value);
  // };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   onSubmitNewPost({ author: enteredName, body: enteredText });
  //   hideModalHandler();
  // };
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="name">Your name</label>
          <input
            name="author"
            type="text"
            id="name"
            required
            // onChange={nameInputHandler}
            // value={enteredName}
          />
        </p>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
            name="body"
            id="body"
            required
            rows={5}
            style={{ resize: "none" }}
            // onChange={textInputHandler}
            // value={enteredText}
          />
        </p>
        <div className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button type="submit">Add</button>
        </div>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function newPostAction({ request }) {
  const formData = await request.formData();
  const newPost = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: { "Content-Type": "application/json" },
  });

  return redirect("/");
}
