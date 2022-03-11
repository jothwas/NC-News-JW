import {
  AddCircleOutline,
  ArrowDropDownSharp,
  ArrowDropUpSharp,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import {
  createSearchParams,
  useParams,
  useSearchParams,
} from "react-router-dom";
import * as api from "../../utils/api.js";
import ErrorComponent from "../Errors/ErrorComponent.jsx";
import LoadingComp from "../Loading/LoadingComp.jsx";
import ArticleCard from "./ArticleCard.jsx";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({ order: "desc" });
  const { topic } = useParams();

  const appendSearchParams = (obj) => {
    const currentSps = createSearchParams(searchParams);
    Object.entries(obj).forEach(([key, value]) => {
      currentSps.set(key, value);
    });
    return currentSps;
  };

  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  useEffect(() => {
    setFetchError(null);
    setIsLoading(true);
    api
      .fetchAllArticles({ sort_by, order, topic })
      .then((apiArticles) => {
        setArticles(apiArticles);
        setIsLoading(false);
      })
      .catch((err) => {
        setFetchError({ err });
      });
  }, [topic, sort_by, order]);

  if (fetchError) {
    return <ErrorComponent error={fetchError} />;
  }

  if (isLoading) return <LoadingComp />;

  return (
    <div>
      <header className="article-query-container">
        <h5
          className="article-query-links"
          onClick={() => {
            setSearchParams({ sort_by: "comment_count" });
          }}
        >
          most talked about
        </h5>
        <h5
          className="article-query-links"
          onClick={() => {
            setSearchParams({ sort_by: "created_at" });
          }}
        >
          newest
        </h5>
        <h5
          className="article-query-links"
          onClick={() => {
            setSearchParams({ sort_by: "votes" });
          }}
        >
          hottest
        </h5>
        <h5 className="article-query-links">
          <AddCircleOutline className="plus" />
          create new article
        </h5>
        <div
          className="order-articles-icon"
          onClick={() => {
            setSearchParams(
              appendSearchParams({ order: order === "desc" ? "asc" : "desc" })
            );
          }}
        >
          order articles
          {order === "asc" ? <ArrowDropUpSharp /> : <ArrowDropDownSharp />}
        </div>
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
