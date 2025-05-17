import "./NewsCard.css";

import defaultImage from "../../assets/defaultImage.jpg";

export default function NewsCard({ article }) {
  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className="news-card">
      <img
        src={article.urlToImage || defaultImage}
        alt=""
        className="news-image"
        onError={handleImageError}
      />
      <div className="news-content">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <a href={article.url}>Read more</a>
      </div>
    </div>
  );
}
