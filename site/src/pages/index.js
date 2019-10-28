import React from "react";
import { Link } from "gatsby";

const Home = props => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: '3rem'
      }}
    >
      <Link to="/blog">Go to Blogs</Link>
    </div>
  );
};

export default Home;
