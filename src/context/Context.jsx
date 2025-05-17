import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

const NewsContext = createContext();

export const useNewsContext = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
  const API_KEY = "741960d72c5241d29602bf1ad933b904";
  const BASE_URL = "https://newsapi.org/v2";

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${BASE_URL}/top-headlines`, {
        params: {
          apiKey: API_KEY,
          country: "us",
          page: currentPage,
          pageSize: 6,
          category,
          q: query,
        },
      });
      console.log(response.data.articles);
      setArticles(response.data.articles);
      setTotalResults(response.data.totalResults);
    } catch (err) {
      setError("Could not fetch the news, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [currentPage, category, query]);

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <NewsContext.Provider
      value={{
        articles,
        loading,
        error,
        fetchNews,
        currentPage,
        setCurrentPage,
        totalResults,
        category,
        changeCategory,
        setQuery,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
