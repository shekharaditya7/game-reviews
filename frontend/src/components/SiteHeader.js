import React from "react";
import { Link } from "react-router-dom";

export default function SiteHeader({}) {
  return (
    <div className="site-header">
      <Link to="/"> Game Reviews </Link>
    </div>
  );
}
