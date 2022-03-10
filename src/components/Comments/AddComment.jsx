import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { UserContext } from "../../contexts/UserContext";
import * as api from "../../utils/api.js";

const AddComment = ({ article_id, setComments }) => {
  const { loggedInUser } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCommentDetails = {
      author: loggedInUser.username,
      body: newComment,
      votes: 0,
    };

    setComments((currentComments) => {
      return [newCommentDetails, ...currentComments];
    });

    api
      .postComment(article_id, loggedInUser.username, newComment)
      .then(() => {
        setNewComment("");
      })
      .catch(() => {
        setComments((currentComments) => {
          const copiedComments = [...currentComments];
          return copiedComments.filter((comment, index) => index !== 0);
        });
        alert("Error: please submit your comment again");
      });
  };

  return (
    <div className="comment-form-container">
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="leave a comment"
          name="commentInput"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
          style={{
            height: "60px",
            borderStyle: "solid",
            borderColor: "rgb(252, 47, 0)",
            borderWidth: "0.25px",
          }}
        />
        <button
          className="article-card-read-button article-card-read-button1 article-card-post-comment"
          type="submit"
        >
          post your comment
        </button>
      </Form>
    </div>
  );
};

export default AddComment;
