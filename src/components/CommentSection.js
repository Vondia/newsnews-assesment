import { useState } from "react";

export default function CommentSection() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const onSubmitForm = (event) => {
    event.preventDefault();

    // const onSubmitForm = (newCommentName) => {
    //     const newComment = {
    //       id: comments.length + 1,
    //       name: newCommentName,
    //       comment: "",
    //     };
    //     console.log(`"new comment ready?", ${newComment}`);
    //   };

    if (!name || !comment) {
      window.alert("Please enter your name and comment.");
    } else {
      setName("");
      setComment("");
    }
  };

  return (
    <div style={{ marginTop: 40, border: "1px solid white", padding: 20 }}>
      <form onSubmit={onSubmitForm}>
        Name:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />{" "}
        <div className="CommentSection">
          <label>comment</label>
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
