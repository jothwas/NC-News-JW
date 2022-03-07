import { AddCircleOutline } from "@mui/icons-material";

const ArticlesList = () => {
  return (
    <div>
      <header className="article-query-container">
        <h5 className="article-query-links">most talked about</h5>
        <h5 className="article-query-links">newest</h5>
        <h5 className="article-query-links">hottest</h5>
        <h5 className="article-query-links">
          <AddCircleOutline className="plus" />
          create new article
        </h5>
      </header>
    </div>
  );
};

export default ArticlesList;
