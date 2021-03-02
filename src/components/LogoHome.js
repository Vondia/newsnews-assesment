import React from "react";
import { Link } from "react-router-dom";

export default function LogoHome() {
  return (
    <div>
      <Link to={"/"}>
        <h2>
          new <bold>NEWS</bold>()
        </h2>
      </Link>
    </div>
  );
}
