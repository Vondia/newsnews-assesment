import { React, useEffect, useState } from "react";
import LogoHome from "../components/LogoHome";
import { useParams } from "react-router-dom";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";

export default function ArticleCategoryPage() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState([]);
  console.log(categoryId);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/categories/${categoryId}/articles`
      );
      setCategory(response.data);
    }

    fetchData();
  }, [categoryId]);

  return (
    <div>
      <div>
        <LogoHome />
      </div>
      <h2>{categoryId} articles</h2>
      <div>
        {!category ? (
          <h4>Loading</h4>
        ) : (
          <div>
            {category.map((article, index) => {
              return (
                <ArticleCard
                  key={index}
                  article={article}
                  // title={article.title}
                  // author={article.author}
                  // img={article.imgUrl}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
