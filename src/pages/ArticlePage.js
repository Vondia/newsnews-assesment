import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LogoHome from "../components/LogoHome";

export default function ArticlePage() {
  const { id } = useParams();
  const [articleData, setArticleData] = useState();

  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles/${id}`
      );
      setArticleData(response.data);
    };
    fetchData();
  }, [id]);

  // console.log(articleData.title);

  return (
    <div>
      <div>
        <LogoHome />
      </div>
      {articleData ? (
        <div className="mt-5">
          <h2>{articleData.title}</h2>
          <div className="information">
            <p>By: {articleData.author}</p>
            <p> {articleData.date}</p>
            <img src={articleData.imgUrl} height="100px" alt="Nieuws plaatje" />
            <p className="mt-3">{articleData.content} </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
