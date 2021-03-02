import React from "react";
import { Link } from "react-router-dom";
import "../style/ArticleCard.scss";

export default function ArticleCard(props) {
  return (
    <div className="ArticleCard card mb-3">
      <div>
        <h3>{props.title}</h3>
        <p>{props.author}</p>
        <p>Category: {props.categoryId}</p>
      </div>
      <Link to={`/ArticlePage/${props.Id}`}>
        <button className="ArticleCard-body">Read this article</button>
      </Link>
      {/* <img src={props.imgUrl} alt="Nieuws plaatje" /> */}
    </div>
  );
}
