import React from "react";
import { Link } from "react-router-dom";
import "../style/ArticleCard.scss";

export default function ArticleCard({ article }) {
  return !article ? (
    <p>Loading..</p>
  ) : (
    <div className="ArticleCard card mb-3">
      <img src={article.imgUrl} height="25px" alt="Nieuws plaatje" />
      <div>
        <h3>{article.title}</h3>
        <p>{article.author}</p>
        <p>
          Category:{" "}
          <Link to={`/ArticleCategoryPage/${article.categoryId}`}>
            <strong>{article.categoryId}</strong>
          </Link>
        </p>
      </div>
      <Link to={`/ArticlePage/${article.id}`}>
        <button className="ArticleCard-body">Read this article</button>
      </Link>
    </div>
  );
}
