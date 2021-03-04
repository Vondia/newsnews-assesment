import React from "react";
import { Link } from "react-router-dom";
import "../style/ArticleCard.scss";

export default function ArticleCard(props) {
  return (
    <div className="ArticleCard card mb-3">
      <img src={props.imgUrl} height="25px" alt="Nieuws plaatje" />
      <div>
        <h3>{props.title}</h3>
        <p>{props.author}</p>
        <p>
          Category:{" "}
          <Link to={`/ArticleCategoryPage/${props.categoryId}`}>
            <strong>{props.categoryId}</strong>
          </Link>
        </p>
      </div>
      <Link to={`/ArticlePage/${props.id}`}>
        <button className="ArticleCard-body">Read this article</button>
      </Link>
    </div>
  );
}
