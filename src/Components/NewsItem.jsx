import React from "react";
import downloadImage from "../assets/download.jpeg"; // Adjust the path as necessary

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src ? src : downloadImage} // Ensure correct image path
        style={{ height: "200px", width: "100%" }} // Adjust width to fit card
        className="card-img-top"
        alt="News Thumbnail" // Provide meaningful alt text
      />
      <div className="card-body">
        <h5 className="card-title">{title && title.length > 50 ? title.slice(0, 50) + "..." : title}</h5> {/* Check if title exists and limit characters */}
        <p className="card-text">
          {description ? (description.length > 90 ? description.slice(0, 90) + "..." : description) : "Want to know more? Read More"} {/* Check if description exists and limit characters */}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
