import formatDate from "../../utils/date-format";
import { AccessTimeOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ArticleVotes from "../Votes/ArticleVotes";

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
        <ArticleVotes
          article_id={article_id}
          votes={votes}
          comment_count={comment_count}
        />
      </div>
    </div>
  );
};

export default ArticleCard;
