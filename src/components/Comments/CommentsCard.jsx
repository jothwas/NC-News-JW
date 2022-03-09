import {
  AccessTimeOutlined,
  ArrowDownwardSharp,
  ArrowUpwardSharp,
} from "@mui/icons-material";
import formatDate from "../../utils/date-format";

const CommentsCard = ({ comment }) => {
  const { author, body, created_at, votes } = comment;
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
        <div className="comment-card-footer">
          <div className="comment-card-vote-count">
            <ArrowUpwardSharp className="comment-up-arrow" />
            {votes}
            <ArrowDownwardSharp className="comment-down-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsCard;
