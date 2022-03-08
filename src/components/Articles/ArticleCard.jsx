import formatDate from "../../utils/date-format";
import {
  AccessTimeOutlined,
  ArrowDownwardSharp,
  ArrowUpwardSharp,
  ModeCommentOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const { title, body, topic, author, created_at, comment_count, votes } =
    article;

  return (
    <div>
      <div className="article-card-container">
        <Link to={`/articles/${topic}`}>
          <p className="article-card-header">topic/{topic}</p>
        </Link>
        <p className="article-card-header">posted by/{author}</p>
        <p className="article-card-header">
          <AccessTimeOutlined className="clock" />
          {formatDate(created_at)}
        </p>
        <article>
          <h3 className="article-card-title">{title}</h3>
          <main className="article-card-body">{`${body.slice(0, 75)}...`}</main>
          <button className="article-card-read-button article-card-read-button1">
            read more
          </button>
        </article>
        <div className="article-card-footer">
          <div className="article-card-vote-count">
            <ArrowUpwardSharp className="up-arrow" />
            {votes}
            <ArrowDownwardSharp className="down-arrow" />
          </div>
          <div className="article-comments">
            <ModeCommentOutlined className="comment-icon" />
            {`${comment_count} comments`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
