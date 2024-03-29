// import "./App.scss";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchArticlesPage from "./pages/SearchArticlesPage";
import ArticleCategoryPage from "./pages/ArticleCategoryPage";
import ArticlePage from "./pages/ArticlePage";
// import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/ArticlePage/:id" component={ArticlePage}></Route>
        <Route
          path="/searchArticlesPage/:searchtext?"
          component={SearchArticlesPage}
        ></Route>
        <Route
          path="/ArticleCategoryPage/:categoryId"
          component={ArticleCategoryPage}
        ></Route>
        <Route path="/" component={HomePage} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
