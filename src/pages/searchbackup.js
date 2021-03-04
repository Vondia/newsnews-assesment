import { React, useState } from "react";
import LogoHome from "../components/LogoHome";
import { Link } from "react-router-dom";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";

export default function HomePage() {
  // const [articleCard, setArticleCard] = useState([]);

  const [searchText, set_searchText] = useState("");

  const [searchState, setSearchState] = useState("idle");

  const [articleState, setArticleState] = useState([]);

  const search = async () => {
    console.log("Start searching for:", searchText);
    setSearchState("searching");
    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);

    // Option B: use the `axios` library like we did on Tuesday
    const response = await axios.get(
      `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles${queryParam}`
    );

    setSearchState("done");
    console.log("Success!", response);
    setArticleState(response.data.Search);
  };

  console.log(articleState);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(
  //       "https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles"
  //     );
  //     setArticleCard(response.data);
  //   }
  //   fetchData();
  // }, []);

  console.log(articleState);

  return (
    <div>
      <div>
        <LogoHome />
      </div>
      <div>
        <p>
          {searchState}
          <input
            value={searchText}
            onChange={(e) => set_searchText(e.target.value)}
          />
          <button onClick={search}>Search</button>
        </p>
      </div>
      <div>
        <h1>Read the latest article</h1>
      </div>
      <div>
        {!articleState ? (
          <h4>Loading</h4>
        ) : (
          articleState.map((Article, index) => (
            <ArticleCard
              key={index}
              title={Article.title}
              lastName={Article.author}
              categoryId={Article.categoryId}
            />
          ))
        )}
      </div>
      <br></br>
      <div>
        <Link to={"/SearchArticles"}>
          <button>Search Articles</button>
        </Link>
      </div>
    </div>
  );
}
