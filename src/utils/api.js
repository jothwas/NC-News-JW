import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://news-api-jw.herokuapp.com/api",
});

export const fetchAllArticles = ({ sort_by, order, topic, page, limit }) => {
  return newsApi
    .get("/articles", {
      params: {
        sort_by: sort_by,
        order: order,
        topic: topic,
        page: page,
        limit: limit,
      },
    })
    .then(({ data: { articles } }) => articles);
};

export const fetchIndividualArticle = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then(({ data: { article } }) => article);
};

export const fetchArticleComments = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => comments);
};

export const patchArticleVotes = (article_id, votes) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes: votes });
};

export const patchCommentVotes = (comment_id, votes) => {
  return newsApi.patch(`/comments/${comment_id}`, { inc_votes: votes });
};
