import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import * as api from "../../utils/api.js";

const DeleteComment = ({
  comment_id,
  author,
  body,
  votes,
  setComments,
  addCommentId,
}) => {
  const { loggedInUser } = useContext(UserContext);
  const [deletedComment] = useState({
    author,
    body,
    votes,
  });

  const deleteCommentClicker = () => {
    setComments((currentComments) => {
      return [...currentComments].filter(
        (comment) => comment.comment_id !== comment_id
      );
    });
    api.deleteComment(comment_id ? comment_id : addCommentId).catch(() => {
      setComments((currentComments) => {
        return [deletedComment, ...currentComments];
      });
      alert(
        "Error: comment not deleted. Please check your connection and click to delete comment again"
      );
    });
  };

  return (
    <button
      className="article-card-read-button article-card-read-button1"
      hidden={author === loggedInUser.username ? null : true}
      onClick={deleteCommentClicker}
    >
      delete comment
    </button>
  );
};

export default DeleteComment;
