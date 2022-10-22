import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CATEGORIES = gql`
  query GetCategories {
    categories {
      data {
        attributes {
          name
        }
        id
      }
    }
  }
`;
export default function SiteHeader({}) {
  const { data, loading, error } = useQuery(CATEGORIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="site-header">
      <Link to="/" style={{ display: "block", marginBottom: "12px" }}>
        Game Reviews
      </Link>
      <nav className="categories">
        <span>Filter reviews by category</span>
        {data.categories?.data.map(({ id, attributes: { name } = {} } = {}) => (
          <Link key={id} to={`/category/${id}`}>
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
