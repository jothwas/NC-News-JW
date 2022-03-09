import formatDate from "../../utils/date-format";
import { AccessTimeOutlined } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import * as api from "../../utils/api.js";
import ErrorComponent from "../Errors/ErrorComponent";
import { UserContext } from "../../contexts/UserContext";
import CommentsCard from "../Comments/CommentsCard";
import ArticleVotes from "../Votes/ArticleVotes";

const SingleArticle = () => {
  const { article_id } = useParams();
  const { loggedInUser } = useContext(UserContext);
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setFetchError(null);
    setIsLoading(true);
    api
      .fetchIndividualArticle(article_id)
      .then((apiArticle) => {
        setArticle(apiArticle);
        setIsLoading(false);
      })
      .catch((err) => setFetchError({ err }));
    setIsLoading(true);
    api
      .fetchArticleComments(article_id)
      .then((apiComments) => {
        setComments(apiComments);
        setIsLoading(false);
      })
      .catch((err) => setFetchError({ err }));
  }, [article_id]);

  if (fetchError) {
    return <ErrorComponent error={fetchError} />;
  }

  if (isLoading)
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );

  const { title, topic, author, body, comment_count, created_at, votes } =
    article;

  return (
    <div>
      <div className="article-list-layout">
        <div className="article-individual-card-container">
          <div className={loggedInUser.username === author ? "" : "hidden"}>
            <button className="article-card-read-button article-card-read-button1 article-card-edit-delete-spacing">
              edit
            </button>
            <button className="article-card-read-button article-card-read-button1 article-card-edit-delete-spacing">
              delete
            </button>
          </div>
          <Link to={`/topics/${topic}`}>
            <p className="article-card-header">topic/{topic}</p>
          </Link>
          <p className="article-card-header">posted by/{author}</p>
          <p className="article-card-header">
            <AccessTimeOutlined className="clock" />
            {formatDate(created_at)}
          </p>
          <article>
            <h3 className="article-card-title">{title}</h3>
            <main className="article-card-body">{body}</main>
          </article>
          <ArticleVotes
            article_id={article_id}
            votes={votes}
            comment_count={comment_count}
          />
        </div>
        <main>
          {comments.map((comment) => {
            return <CommentsCard comment={comment} key={comment.comment_id} />;
          })}
        </main>
      </div>
    </div>
  );
};

export default SingleArticle;
