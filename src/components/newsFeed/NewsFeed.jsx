import { useNewsContext } from "../../context/Context";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Loader from "../loader/Loader";
import NewsCard from "../newsCard/NewsCard";
import Pagination from "../pagination/Pagination";

import "./NewsFeed.css";

export default function NewsFeed() {
  const {
    articles,
    loading,
    error,
    currentPage,
    setCurrentPage,
    totalResults,
  } = useNewsContext();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  return (
    <div className="news-feed">
      {articles.length === 0 ? (
        <p className="no-news-message">no news found, please try again later</p>
      ) : (
        <>
          <div className="news-grid">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalResults={totalResults}
          />
        </>
      )}
    </div>
  );
}
