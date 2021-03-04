import { React, useEffect, useState } from "react";
import LogoHome from "../components/LogoHome";
import { useParams } from "react-router-dom";
import axios from "axios";
import ArticleCard from "../components/ArticleCard";
import CommentSection from "../components/CommentSection";

export default function ArticleCategoryPage() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState([]);
  const [comments, setComments] = useState(["All"]);
  console.log(categoryId);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/categories/${categoryId}/articles`
      );
      setCategory(response.data);
    }
    async function fetchCommentData() {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/articles-comments-data/comments"
      );
      setComments(response.data);
    }

    fetchData();
    fetchCommentData();
  }, [categoryId]);

  console.log(`"Comment check:" ${comments}`);

  const CommentByCategory = comments.filter((Object) => {
    if (comments === "All") {
      return Object;
    } else {
      return comments === Object.id;
    }
  });

  console.log(`"comment by category check:" ${CommentByCategory}`);

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
      <h2>{categoryId} articles</h2>
      <div>
        {!category ? (
          <h4>Loading</h4>
        ) : (
          <div>
            {category.map((category) => {
              return (
                <ArticleCard
                  key={category.id}
                  title={category.title}
                  author={category.author}
                  id={category.id}
                  categoryId={category.categoryId}
                />
              );
            })}
          </div>
        )}
      </div>
      <CommentSection onSubmitForm={onSubmitForm} />
    </div>
  );
}
