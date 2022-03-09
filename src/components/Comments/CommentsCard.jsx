import { AccessTimeOutlined } from "@mui/icons-material";
import formatDate from "../../utils/date-format";
import CommentVotes from "../Votes/CommentVotes";

const CommentsCard = ({ comment }) => {
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
        <CommentVotes comment_id={comment_id} votes={votes} />
      </div>
    </div>
  );
};

export default CommentsCard;
