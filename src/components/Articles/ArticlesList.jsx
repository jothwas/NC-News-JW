import { AddCircleOutline } from "@mui/icons-material";
import { useEffect, useState } from "react";
import * as api from "../../utils/api.js";
import ArticleCard from "./ArticleCard.jsx";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchAllArticles().then((apiArticles) => {
      setArticles(apiArticles);
    });
    setIsLoading(false);
  }, []);

  if (isLoading)
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );

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
      <main className="article-list-layout">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </main>
    </div>
  );
};

export default ArticlesList;
