import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ArticlesList from "./components/Articles/ArticlesList";
import ErrorComponent from "./components/Errors/ErrorComponent";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
