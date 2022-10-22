import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

export default function ReviewDetails({}) {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:1337/api/reviews/${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="review-details">
      <div className="review-card">
        <div className="rating"> {data.attributes.rating}</div>
        <h2>{data.attributes.title}</h2>
        <small>console list</small>
        <p>{data.attributes.body}</p>
      </div>
    </div>
  );
}
