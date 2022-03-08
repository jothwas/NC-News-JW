import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/Articles/ArticlesList";
import ErrorPage from "./components/Errors/ErrorPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/:topic" element={<ArticlesList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
