import React from "react";
import useFetch from "../hooks/useFetch";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

const REVIEW = gql`
  query GetReview($id: ID!) {
    review(id: $id) {
      data {
        attributes {
          title
          rating
          body
        }
      }
    }
  }
`;

export default function ReviewDetails({}) {
  const { id } = useParams();
  // const { data, loading, error } = useFetch(
  //   `http://localhost:1337/api/reviews/${id}`
  // );
  const { data, loading, error } = useQuery(REVIEW, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="review-details">
      <div className="review-card">
        <div className="rating"> {data.review.data.attributes.rating}</div>
        <h2>{data.review.data.attributes.title}</h2>
        <small>console list</small>
        <p>{data.review.data.attributes.body}</p>
      </div>
    </div>
  );
}
