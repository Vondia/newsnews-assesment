import { React, useState, useEffect } from "react";
import LogoHome from "../components/LogoHome";
import { useHistory, useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import axios from "axios";
// import ArticleCategoryPage from "./ArticleCategoryPage";

export default function SearchArticlesPage() {
  // const [articleCard, setArticleCard] = useState([]);

  const history = useHistory();
  const { searchtext } = useParams;
  const [searchText, setSearchText] = useState(searchtext);
  const [searchState, setSearchState] = useState({ status: "idle" });
  const [articleCard, setArticleCard] = useState([]);

  // const [articleState, setArticleState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (!searchtext || searchtext === "") {
        setSearchState({ status: "idle" });
        return;
      }
      setSearchState({ status: "searching" });

      // encoding the string so special characters dont mess up the url
      const queryParam = encodeURIComponent(searchtext);

      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles${queryParam}`
      );

      setSearchState("done");
      console.log("Success!", response);
      setSearchState(response.data);
    }

    fetchData();
  }, [searchtext]);

  const navigateToSearch = (e) => {
    e.preventDefault();
    const routeParam = encodeURIComponent(searchText);
    history.push(`/SearchArticlesPage/${routeParam}`);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles"
      );

      setArticleCard(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <LogoHome />
      </div>
      <div>
        <form onSubmit={navigateToSearch}>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {searchState.status === "idle" && (
          <div>
            {!articleCard ? (
              <h4>Loading</h4>
            ) : (
              articleCard.map((article, index) => (
                <ArticleCard
                  key={index}
                  article={article}
                  // title={article.title}
                  // author={article.author}
                  // img={article.imgUrl}
                />
              ))
            )}
          </div>
        )}
        {searchState.status === "searching" && <p>Searching...</p>}
        {searchState.status === "done" && (
          <div>
            {searchState.data && searchState.data.length > 0 ? (
              <>
                <h2>Search results</h2>
                <div>
                  {searchState.data.map((article) => (
                    <ArticleCard
                      key={article.index}
                      article={article}
                      // title={article.title}
                      // author={article.author}
                      // img={article.imgUrl}
                    />
                  ))}
                </div>
              </>
            ) : (
              <h2>No results!</h2>
            )}
          </div>
        )}
      </div>
      );
    </div>
  );
}
