import { React, useEffect, useState } from "react";
import LogoHome from "../components/LogoHome";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
// import ArticleCard from "../components/ArticleCard";
import CommentSection from "../components/CommentSection";

export default function ArticleCategoryPage() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState([]);
  const [comments, setComments] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/categories/${categoryId}/articles`
      );
      setCategory(response.data);
    }
    async function fetchCommentData() {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/articles-comments-data/db"
      );
      setComments(response.data.comments);
    }

    fetchData([categoryId]);
    fetchCommentData();
  }, [categoryId]);

  console.log(`"Comment check:" ${comments}`);

  const onSubmitForm = (newCommentName) => {
    const newComment = {
      id: comments.length + 1,
      name: newCommentName,
      comment: "",
    };
    console.log(`"new comment ready?", ${newComment}`);
  };

  return (
    <div>
      <div>
        <LogoHome />
      </div>
      <h2>{category.categoryId} articles</h2>
      <div>
        {!category ? (
          <h4>Loading</h4>
        ) : (
          category.map((category) => {
            console.log(categoryId);
            return (
              <div>
                <Link to={`/ArticleCategoryPage/${categoryId}`}>
                  <h3>{category.categoryId} articles</h3>
                </Link>
              </div>
            );
          })
        )}
      </div>
      <CommentSection onSubmitForm={onSubmitForm} />
    </div>
  );
}
