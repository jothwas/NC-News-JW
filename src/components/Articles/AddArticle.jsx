import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import * as api from "../../utils/api.js";

const AddArticle = () => {
  let navigate = useNavigate();
  const { loggedInUser } = useContext(UserContext);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [newTopic, setNewTopic] = useState("coding");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newArticleDetails = {
      title: newTitle,
      author: loggedInUser.username,
      body: newBody,
      topic: newTopic,
    };

    api
      .postArticle(newArticleDetails)
      .then((article) => {
        const { article_id } = article;
        navigate(`/articles/${article_id}`);
      })
      .catch(() => {
        alert("Error: please submit your article again");
      });
  };

  return (
    <div className="article-list-layout">
      <div className="article-individual-card-container">
        <div className="add-article-form-container">
          <h3 className="post-article-card-title">add a new article</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Label className="post-article-form-field">title</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter your article title"
              name="titleInput"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
              style={{
                height: "60px",
                borderStyle: "solid",
                borderColor: "rgb(252, 47, 0)",
                borderWidth: "0.25px",
              }}
            />
            <Form.Label className="post-article-form-field">
              article content
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="enter your article content"
              name="bodyInput"
              value={newBody}
              onChange={(e) => setNewBody(e.target.value)}
              required
              style={{
                height: "60px",
                borderStyle: "solid",
                borderColor: "rgb(252, 47, 0)",
                borderWidth: "0.25px",
              }}
            />
            <Form.Label className="post-article-form-field">
              article topic
            </Form.Label>
            <Form.Select
              value={newTopic}
              onChange={(e) => setNewTopic(e.target.value)}
            >
              <option>coding</option>
              <option>football</option>
              <option>cooking</option>
            </Form.Select>
            <button
              className="article-card-read-button article-card-read-button1 article-card-post-comment"
              type="submit"
            >
              post your article
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddArticle;
