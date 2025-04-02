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
          <b>
            <img
              src="./images/blog-icon.jpg"
              alt=""
              style={{ height: "3rem", width: "auto" }}
            />{" "}
            Tech-Blogger
          </b>
        </a>
      </nav>
    </div>
  );
};

export default Header;
