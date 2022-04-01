import formatDate from "../../utils/date-format";
import { AccessTimeOutlined } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import * as api from "../../utils/api.js";
import ErrorComponent from "../Errors/ErrorComponent";
import { UserContext } from "../../contexts/UserContext";
import CommentsCard from "../Comments/CommentsCard";
import ArticleVotes from "../Votes/ArticleVotes";
import AddComment from "../Comments/AddComment";
import LoadingComp from "../Loading/LoadingComp";

const SingleArticle = () => {
  const { article_id } = useParams();
  const { loggedInUser } = useContext(UserContext);
  let navigate = useNavigate();

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [comments, setComments] = useState([]);
  const [addCommentVis, setAddCommentVis] = useState(false);

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

  const deleteArticleClicker = () => {
    api
      .deleteArticle(article_id)
      .then(() => {
        alert("Article deleted: now being redirected to Home...");
        navigate("/");
      })
      .catch(() => {
        alert(
          "Error: article not deleted. Please check your connection and click to delete article again."
        );
      });
  };

  if (fetchError) {
    return <ErrorComponent error={fetchError} />;
  }

  if (isLoading) return <LoadingComp />;

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
            <button
              className="article-card-read-button article-card-read-button1 article-card-edit-delete-spacing"
              onClick={() => {
                deleteArticleClicker();
              }}
            >
              delete
            </button>
          </div>
          <Link to={`/topics/${topic}`}>
            <p className="article-card-header">topic/{topic}</p>
          </Link>
          <p className="article-card-header-no-hover">posted by/{author}</p>
          <p className="article-card-header-no-hover">
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
            author={author}
          />
          <div className="add-comment-container">
            <button
              type="submit"
              className="article-card-read-button article-card-read-button1 article-card-add-comment"
              onClick={() => {
                setAddCommentVis(!addCommentVis);
              }}
            >
              add a comment
            </button>
            <div style={{ display: addCommentVis ? "" : "none" }}>
              <AddComment article_id={article_id} setComments={setComments} />
            </div>
          </div>
        </div>
        <main>
          {comments.map((comment, index) => {
            return (
              <CommentsCard
                comment={comment}
                setComments={setComments}
                key={`${comment.author} - ${index}`}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default SingleArticle;
