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
