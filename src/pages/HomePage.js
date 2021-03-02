import { React, useEffect, useState } from "react";
import LogoHome from "../components/LogoHome";
import { Link } from "react-router-dom";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";

export default function HomePage() {
  const [articleCard, setArticleCard] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles"
      );
      setArticleCard(response.data);
    }
    fetchData();
  }, []);

  console.log(articleCard);

  // function compare_unixTimeStamp(article_a, article_b) {
  //   return article_a.compare_unixTimeStamp.localecompare(
  //     article_b.compare_unixTimeStamp
  //   );
  // }
  // // const compareFunction = sort_by === "unixTimeStamp" ? compare_unixTimeStamp : compare_name;

  // const articlesSorted = [...articleCard].sort(compare_unixTimeStamp);

  // console.log(articlesSorted);

  return (
    <div>
      <div>
        <LogoHome />
      </div>
      <div>
        <h1>Read the latest article</h1>
      </div>
      <div>
        {!articleCard ? (
          <h4>Loading</h4>
        ) : (
          articleCard.map((Article, index) => (
            <ArticleCard
              key={index}
              title={Article.title}
              lastName={Article.author}
              categoryId={Article.categoryId}
              // img={Article.imgUrl}
            />
          ))
        )}
      </div>
      <div>
        <Link to={"/SearchArticles"}>
          <button>Search Articles</button>
        </Link>
      </div>
    </div>
  );
}
