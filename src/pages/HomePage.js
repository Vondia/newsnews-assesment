import React from "react";
import LogoHome from "../components/LogoHome";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <div>
        <LogoHome />
      </div>
      <div>
        <h1>Read the latest article</h1>
      </div>
      <div>
        <Link to={"/SearchArticles"}>
          <button>Search Articles</button>
        </Link>
      </div>
    </div>
  );
}
