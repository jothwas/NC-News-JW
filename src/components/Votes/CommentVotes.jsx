import * as api from "../../utils/api.js";
import { useState } from "react";
import { ArrowDownwardSharp, ArrowUpwardSharp } from "@mui/icons-material";

const CommentVotes = ({ comment_id, votes }) => {
  const [commentVotes, setCommentVotes] = useState(votes);

  const voteAction = (votecrement) => {
    setCommentVotes((currentVoteCount) => currentVoteCount + votecrement);
    api.patchCommentVotes(comment_id, votecrement);
  };

  return (
    <div className="comment-card-footer">
      <div className="comment-card-vote-count">
        <ArrowUpwardSharp className="up-arrow" onClick={() => voteAction(1)} />
        {commentVotes}
        <ArrowDownwardSharp
          className="down-arrow"
          onClick={() => voteAction(-1)}
        />
      </div>
    </div>
  );
};

export default CommentVotes;
