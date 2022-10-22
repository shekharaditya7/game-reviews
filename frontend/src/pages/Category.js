import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      data {
        attributes {
          name
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
      }
    }
  }
`;

export default function Category({}) {
  const { id } = useParams();
  const { data, error, loading } = useQuery(CATEGORY, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="category">
      {data?.category.data.attributes.reviews.data.map(
        ({ attributes: { rating, title, body, categories }, id }) => (
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
