import React, { useState } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import CommentsDisabledIcon from "@mui/icons-material/CommentsDisabled";
import SendIcon from "@mui/icons-material/Send";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import VerifiedIcon from "@mui/icons-material/Verified";
const Cards = () => {
  const blogs = [
    {
      title: "Exploring the Wonders of React",
      content:
        "React is a powerful library for building dynamic user interfaces. In this blog, we'll explore the basics and advanced concepts of React...",
      author: "Jane Doe",
      date: "December 10, 2024",
      link: "https://exploringreact.com/",
      image: "./images/react.png",
    },
    {
      title: "Mastering JavaScript",
      content:
        "JavaScript is the backbone of modern web development. This blog covers essential tips and tricks to master JavaScript...",
      author: "John Smith",
      date: "December 8, 2024",
      link: "https://masteringjs.io/",
      image: "./images/js.jpg",
    },
    {
      title: "Web Development Trends 2024",
      content:
        "Stay ahead of the curve by learning about the latest trends and technologies in web development for 2024...",
      author: "Alice Johnson",
      date: "December 5, 2024",
      link: "https://blog.thecolourmoon.com/website-development-trends-for-2024/",
      image: "./images/web dev.png",
    },
    {
      title: "CSS in 2024: What's New?",
      content:
        "CSS continues to evolve, bringing new features and improvements. Discover the latest updates in CSS that will shape the web development landscape...",
      author: "Emily Brown",
      date: "December 3, 2024",
      link: "https://developer.chrome.com/blog/new-in-web-ui-io-2024",
      image: "./images/css.webp",
    },
    {
      title: "The Rise of TypeScript",
      content:
        "TypeScript has become increasingly popular among developers. Learn why you should consider using TypeScript in your projects...",
      author: "Michael Green",
      date: "December 1, 2024",
      link: "https://medium.com/@developeranku/the-rise-of-typescript-why-its-a-game-changer-for-javascript-developers-7b9d89697bfb",
      image: "./images/typescript.png",
    },
    {
      title: "Building Responsive Layouts with Bootstrap",
      content:
        "Bootstrap offers a unique approach to building responsive layouts. This blog covers the basics and advanced techniques of using Bootstrap...",
      author: "Laura White",
      date: "November 29, 2024",
      link: "https://www.educative.io/blog/responsive-web-design-with-bootstrap",
      image: "./images/bootstrap.avif",
    },
    {
      title: "AI and Machine Learning in 2024",
      content:
        "Discover the latest advancements in AI and machine learning. This blog covers the new techniques and trends that are shaping the industry...",
      author: "Sophia Lee",
      date: "November 27, 2024",
      link: "https://www.dataversity.net/ai-and-machine-learning-trends-in-2024/",
      image: "./images/AI.jpg",
    },
    {
      title: "Cloud Computing in 2024",
      content:
        "Explore how cloud computing is evolving in 2024. Learn about the latest trends and technologies that are making the cloud more efficient and powerful...",
      author: "David Kim",
      date: "November 25, 2024",
      link: "https://cloudcomputingtrends.com/",
      image: "./images/cloud.jpg",
    },
    {
      title: "The Future of Mobile Development",
      content:
        "Stay ahead in the world of mobile development by learning about the future trends and technologies...",
      author: "Linda Martinez",
      date: "November 22, 2024",
      link: "https://futuramo.com/blog/future-of-mobile-app-development-trends-to-watch-in-2025-and-beyond/",
      image: "./images/mobile.jpg",
    },
    {
      title: "Introduction to Quantum Computing",
      content:
        "Quantum computing is poised to revolutionize the tech industry. This blog provides an introduction to the principles and potential applications of quantum computing...",
      author: "Tom Harris",
      date: "November 20, 2024",
      link: "https://www.educative.io/blog/introduction-to-quantum-computing",
      image: "./images/quantum.jpg",
    },
  ];

  const initialComments =
    JSON.parse(localStorage.getItem("comments")) || blogs.map(() => []);
  const [comments, setComments] = useState(initialComments);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCommentSubmit = (index, e) => {
    e.preventDefault();
    const newComment = {
      name: e.target.name.value,
      comment: e.target.comment.value,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    const newComments = [...comments];
    newComments[index].push(newComment);
    setComments(newComments);
    localStorage.setItem("comments", JSON.stringify(newComments));
    e.target.reset();
  };
  const toggleExpanded = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const shareOnWhatsApp = (url) => {
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      url
    )}`;
    window.open(shareUrl, "_blank");
  };

  const shareOnTwitter = (url) => {
    const shareUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank");
  };

  const shareOnInstagram = (url) => {
    alert("Instagram sharing is only available via mobile app.");
  };

  const shareOnTelegram = (url) => {
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-dark">Our Latest Blog Posts</h2>
      <div className="row ">
        {blogs.map((blog, index) => (
          <div key={index} className="col-md-6 mb-5 ">
            <div className="card h-100 shadow bg-white rounded">
              <img
                src={blog.image}
                className="card-img-top"
                alt={blog.title}
                style={{ height: "18rem" }}
              />
              <div className="card-body text-left">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content}</p>
                <p className="card-text">
                  <small className="text-muted">By: {blog.author}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">Posted on: {blog.date}</small>
                </p>
                <a
                  href={blog.link}
                  target="__blank"
                  className="btn btn-secondary mb-3"
                  style={{ borderRadius: "50px", backgroundColor: "goldenrod" }}
                >
                  Read More
                </a>
                <hr />
                <span
                  onClick={() => toggleExpanded(index)}
                  style={{
                    cursor: "pointer",
                    color: "gray",
                    padding: "5px",
                  }}
                >
                  {expandedCard === index ? (
                    <CommentsDisabledIcon sx={{ color: "gray" }} />
                  ) : (
                    <CommentIcon sx={{ color: "goldenrod" }} />
                  )}
                  Comments
                </span>
                <span
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <WhatsAppIcon
                    sx={{
                      float: "right",
                      marginBottom: "10px",
                      color: "limeGreen",
                    }}
                    onClick={() => shareOnWhatsApp(blog.link)}
                  />
                  <XIcon
                    sx={{ float: "right", marginRight: "10px" }}
                    onClick={() => shareOnTwitter(blog.link)}
                  />
                  <TelegramIcon
                    sx={{
                      float: "right",
                      marginRight: "10px",
                      color: "#0088CC",
                    }}
                    onClick={() => shareOnTelegram(blog.link)}
                  />
                  <InstagramIcon
                    sx={{
                      float: "right",
                      marginRight: "10px",
                      color: "#E1306C",
                    }}
                    onClick={() => shareOnInstagram(blog.link)}
                  />
                </span>
                {expandedCard === index && (
                  <>
                    <div>
                      {comments[index].map((comment, commentIndex) => (
                        <div key={commentIndex} className="mb-2 my-2">
                          <strong className="text-secondary">
                            {comment.name}
                          </strong>
                          <sup>
                            <VerifiedIcon
                              sx={{ fontSize: "1rem", color: "goldenrod" }}
                            />
                          </sup>
                          <h6>
                            <p>{comment.comment}</p>
                          </h6>
                          <sup>
                            <small className="text-muted">
                              {comment.date} at {comment.time}
                            </small>
                          </sup>
                          <hr />
                        </div>
                      ))}
                    </div>
                    <form onSubmit={(e) => handleCommentSubmit(index, e)}>
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <textarea
                          className="form-control"
                          name="comment"
                          placeholder="Add Your Comment..."
                          rows="3"
                          required
                        ></textarea>
                      </div>
                      <button type="submit" className="btn">
                        <SendIcon sx={{ color: "goldenrod" }} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cards;
