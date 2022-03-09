import * as api from "../../utils/api.js";
import { useState } from "react";
import { ArrowDownwardSharp, ArrowUpwardSharp } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const CommentVotes = ({ comment_id, votes }) => {
  const [commentVotes, setCommentVotes] = useState(votes);
  const [voteCheck, setVoteCheck] = useState(0);

  const voteAction = (votecrement) => {
    api.patchCommentVotes(comment_id, votecrement);
    setCommentVotes((currentVoteCount) => currentVoteCount + votecrement);
    setVoteCheck((zero) => zero + votecrement);
  };

  return (
    <div className="comment-card-footer">
      <div className="comment-card-vote-count">
        <IconButton onClick={() => voteAction(1)} disabled={voteCheck === 1}>
          <ArrowUpwardSharp
            className={`up-arrow ${
              voteCheck === 1 ? `orange-highlight` : null
            }`}
          />
        </IconButton>
        {commentVotes}
        <IconButton onClick={() => voteAction(-1)} disabled={voteCheck === -1}>
          <ArrowDownwardSharp
            className={`down-arrow ${
              voteCheck === -1 ? `orange-highlight` : null
            }`}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default CommentVotes;
