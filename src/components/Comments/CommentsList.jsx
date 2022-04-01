import { useEffect, useState } from "react";
import * as api from "../../utils/api.js";
import ErrorComponent from "../Errors/ErrorComponent.jsx";
import LoadingComp from "../Loading/LoadingComp.jsx";
import CommentsCard from "./CommentsCard";

const CommentsList = ({ article_id, comments, setComments, addCommentId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchArticleComments(article_id)
      .then((apiComments) => {
        setComments(apiComments);
        setIsLoading(false);
      })
      .catch((err) => setFetchError({ err }));
  }, [article_id, setComments]);

  if (fetchError) {
    return <ErrorComponent error={fetchError} />;
  }

  if (isLoading) return <LoadingComp />;

  return (
    <div>
      {comments.map((comment, index) => {
        return (
          <CommentsCard
            comment={comment}
            setComments={setComments}
            key={`${comment.author} - ${index}`}
            addCommentId={addCommentId}
          />
        );
      })}
    </div>
  );
};

export default CommentsList;
