import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function HomePage({}) {
  const { data, loading, error } = useFetch(
    "http://localhost:1337/api/reviews/"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      {data.map(({ attributes: { rating, body, title }, id }) => (
        <div key={id} className="review-card">
          <div className="rating"> {rating}</div>
          <h2>{title}</h2>
          <small>console list</small>
          <p>{body.substring(0, 200)}...</p>

          <Link to={`/details/${id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
