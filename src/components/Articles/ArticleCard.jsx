import formatDate from "../../utils/date-format";
import {
  AccessTimeOutlined,
  ArrowDownwardSharp,
  ArrowUpwardSharp,
  ModeCommentOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const {
    article_id,
    title,
    body,
    topic,
    author,
    created_at,
    comment_count,
    votes,
  } = article;

  return (
    <div>
      <div className="article-card-container">
        <Link to={`/topics/${topic}`}>
          <p className="article-card-header">topic/{topic}</p>
        </Link>
        <p className="article-card-header">posted by/{author}</p>
        <p className="article-card-header">
          <AccessTimeOutlined className="clock" />
          {formatDate(created_at)}
        </p>
        <article>
          <Link
            to={`/articles/${article_id}`}
            style={{ textDecoration: "none" }}
          >
            <h3 className="article-list-card-title">{title}</h3>
          </Link>
          <main className="article-card-body">{`${body.slice(0, 75)}...`}</main>
          <Link to={`/articles/${article_id}`}>
            <button className="article-card-read-button article-card-read-button1">
              read more
            </button>
          </Link>
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
