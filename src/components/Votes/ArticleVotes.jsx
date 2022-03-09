import * as api from "../../utils/api.js";
import { useState } from "react";
import {
  ArrowDownwardSharp,
  ArrowUpwardSharp,
  ModeCommentOutlined,
} from "@mui/icons-material";

const ArticleVotes = ({ article_id, votes, comment_count }) => {
  const [articleVotes, setArticleVotes] = useState(votes);

  const voteAction = (votecrement) => {
    setArticleVotes((currentVoteCount) => currentVoteCount + votecrement);
    api.patchArticleVotes(article_id, votecrement);
  };

  return (
    <div className="article-card-footer">
      <div className="article-card-vote-count">
        <ArrowUpwardSharp className="up-arrow" onClick={() => voteAction(1)} />
        {articleVotes}
        <ArrowDownwardSharp
          className="down-arrow"
          onClick={() => voteAction(-1)}
        />
      </div>
      <div className="article-comments">
        <ModeCommentOutlined className="comment-icon" />
        {`${comment_count} comments`}
      </div>
    </div>
  );
};

export default ArticleVotes;
