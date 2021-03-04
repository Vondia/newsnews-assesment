import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LogoHome from "../components/LogoHome";
import CommentSection from "../components/CommentSection";

export default function ArticlePage() {
  const { id } = useParams();
  const [articleData, setArticleData] = useState();
  const [comments, setComments] = useState();

  // console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles/${id}`
      );
      setArticleData(response.data);
    };

    async function fetchCommentData() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles/${id}/comments`
      );
      setComments(response.data);
    }
    fetchData();
    fetchCommentData();
  }, [id]);

  // console.log(articleData.title);

  const onCreateNewComment = (newCommentName, userComment) => {
    const newComment = {
      name: newCommentName,
      comment: userComment,
    };
    // console.log("new comment ready??", newComment);

    const updatedComments = [newComment, ...comments];
    setComments(updatedComments);
  };

  return (
    <div>
      <div>
        <LogoHome />
      </div>
      {articleData ? (
        <div className="mt-5">
          <h2>{articleData.title}</h2>
          <div className="information">
            <p>By: {articleData.author}</p>
            <p> {articleData.date}</p>
            <img src={articleData.imgUrl} height="100px" alt="Nieuws plaatje" />
            <p className="mt-3">{articleData.content} </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div>
        <h4>comments:</h4>
        {!comments ? (
          <h5>Loading</h5>
        ) : (
          comments.map((comments, index) => {
            return (
              <div key={index}>
                <p>name: {comments.name}</p>
                <p>comment: {comments.comment}</p>
              </div>
            );
          })
        )}
      </div>
      <CommentSection onCreateNewComment={onCreateNewComment} />
    </div>
  );
}
