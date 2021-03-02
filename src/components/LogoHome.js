import React from "react";
import { Link } from "react-router-dom";

export default function LogoHome() {
  return (
    <div>
      <Link to={"/"}>
        <h2>
          new <strong>NEWS</strong>()
        </h2>
      </Link>
    </div>
  );
}
