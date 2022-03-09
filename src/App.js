import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/Articles/ArticlesList";
import SingleArticle from "./components/Articles/SingleArticle";
import ErrorPage from "./components/Errors/ErrorPage";
import Header from "./components/Header";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "grumpy19",
  });

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/topics/:topic" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
