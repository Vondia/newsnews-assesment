import { React, useState, useEffect } from "react";
import LogoHome from "../components/LogoHome";
import { useHistory, useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
// import ArticleCategoryPage from "./ArticleCategoryPage";

export default function HomePage() {
  // const [articleCard, setArticleCard] = useState([]);

  const history = useHistory();

  const { searchtext } = useParams;

  const [searchText, set_searchText] = useState(searchtext);

  const [searchState, setSearchState] = useState({ status: "idle" });

  // const [articleState, setArticleState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (!searchtext || searchtext === "") {
        setSearchState({ status: "idle" });
        return;
      }
      setSearchState({ status: "searching" });

      const queryParam = encodeURIComponent(searchtext);

      const data = await fetch(
        `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles${queryParam}`
      ).then((r) => r.json());

      setSearchState({ status: "done", data: data.Search });
    }

    fetchData();
  }, [searchtext]);

  const navigateToSearch = (e) => {
    e.preventDefault();
    const routeParam = encodeURIComponent(searchText);
    history.push(`/SearchArticlesPage/${routeParam}`);
  };

  return (
    <div>
      <div>
        <LogoHome />
      </div>
      <div>
        <form onSubmit={navigateToSearch}>
          <input
            value={searchText}
            onChange={(e) => set_searchText(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        {searchState.status === "idle" && (
          <p>Type in a search term and click "Search" to start...</p>
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
                      title={article.title}
                      author={article.author}
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
