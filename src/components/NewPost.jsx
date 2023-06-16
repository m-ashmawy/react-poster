import classes from "./NewPost.module.css";

function NewPost() {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={5} style={{ resize: "none" }} />
      </p>
    </form>
  );
}

export default NewPost;
