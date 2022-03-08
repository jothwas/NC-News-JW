import { AddCircleOutline } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../utils/api.js";
import ErrorComponent from "../Errors/ErrorComponent.jsx";
import ArticleCard from "./ArticleCard.jsx";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchAllArticles({ topic })
      .then((apiArticles) => {
        setArticles(apiArticles);
        setIsLoading(false);
      })
      .catch((err) => setError({ err }));
  }, [topic]);

  if (isLoading)
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );

  if (error) {
    return <ErrorComponent message={error} />;
  }

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
      {topic ? <h4 className="article-topic-header">topic/{topic}</h4> : null}
      <main className="article-list-layout">
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </main>
    </div>
  );
};

export default ArticlesList;
