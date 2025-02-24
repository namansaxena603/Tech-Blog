import React from "react";

const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-dark"
        style={{
          backgroundColor: "goldenrod",
        }}
      >
        <a
          href="/"
          className="navbar-brand mx-3"
          style={{ fontSize: "1.5rem" }}
        >
          <b>Tech-Blogger</b>
        </a>
      </nav>
    </div>
  );
};

export default Header;
