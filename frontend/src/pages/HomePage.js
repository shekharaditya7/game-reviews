import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import useFetch from "../hooks/useFetch";

const REVIEWS = gql`
  query GetReviews {
    reviews {
      data {
        attributes {
          title
          body
          rating
          categories {
            data {
              attributes {
                name
              }
              id
            }
          }
        }
        id
      }
    }
  }
`;

export default function HomePage({}) {
  //   const { data, loading, error } = useFetch(
  //     "http://localhost:1337/api/reviews/"
  //   );

  const { data, loading, error } = useQuery(REVIEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      {data.reviews.data.map(
        ({ attributes: { rating, body, title, categories }, id }) => (
          <div key={id} className="review-card">
            <div className="rating"> {rating}</div>
            <h2>{title}</h2>
            {categories.data?.map(({ attributes: { name }, id }) => (
              <small key={id}>{name}</small>
            ))}
            <p>{body.substring(0, 200)}...</p>

            <Link to={`/details/${id}`}>Read More</Link>
          </div>
        )
      )}
    </div>
  );
}
