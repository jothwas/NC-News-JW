import * as api from "../../utils/api.js";
import { useContext, useState } from "react";
import {
  ArrowDownwardSharp,
  ArrowUpwardSharp,
  ModeCommentOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { UserContext } from "../../contexts/UserContext.jsx";

const ArticleVotes = ({ article_id, votes, comment_count, author }) => {
  const { loggedInUser } = useContext(UserContext);
  const [articleVotes, setArticleVotes] = useState(votes);
  const [voteCheck, setVoteCheck] = useState(0);

  const voteAction = (votecrement) => {
    api.patchArticleVotes(article_id, votecrement);
    setArticleVotes((currentVoteCount) => currentVoteCount + votecrement);
    setVoteCheck((zero) => zero + votecrement);
  };

  return (
    <div className="article-card-footer">
      <div className="article-card-vote-count">
        <IconButton
          onClick={() => voteAction(1)}
          disabled={voteCheck === 1 || loggedInUser.username === author}
        >
          <ArrowUpwardSharp
            className={`up-arrow ${
              voteCheck === 1
                ? `orange-highlight`
                : loggedInUser.username === author
                ? `greyed-out`
                : null
            }`}
            disabled={loggedInUser.username === author}
          />
        </IconButton>
        {articleVotes}
        <IconButton
          onClick={() => voteAction(-1)}
          disabled={voteCheck === -1 || loggedInUser.username === author}
        >
          <ArrowDownwardSharp
            className={`down-arrow ${
              voteCheck === -1
                ? `orange-highlight`
                : loggedInUser.username === author
                ? `greyed-out`
                : null
            }`}
            disabled={loggedInUser.username === author}
          />
        </IconButton>
      </div>
      <div className="article-comments">
        <ModeCommentOutlined className="comment-icon" />
        {`${comment_count} comments`}
      </div>
    </div>
  );
};

export default ArticleVotes;
