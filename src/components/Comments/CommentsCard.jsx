import { AccessTimeOutlined } from "@mui/icons-material";
import formatDate from "../../utils/date-format";
import CommentVotes from "../Votes/CommentVotes";
import DeleteComment from "./DeleteComment";

const CommentsCard = ({ comment, setComments }) => {
  const { comment_id, author, body, created_at, votes } = comment;

  return (
    <div>
      <div className="comment-card-container">
        <p className="comment-card-header">posted by/{author}</p>
        <p className="comment-card-header">
          <AccessTimeOutlined className="clock" />
          {formatDate(created_at)}
        </p>
        <article>
          <main className="comment-card-body">{body}</main>
        </article>
        <CommentVotes comment_id={comment_id} votes={votes} author={author} />
        <DeleteComment
          comment_id={comment_id}
          author={author}
          body={body}
          votes={votes}
          setComments={setComments}
        />
      </div>
    </div>
  );
};

export default CommentsCard;
