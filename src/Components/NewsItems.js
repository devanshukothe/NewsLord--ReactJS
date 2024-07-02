import React, { Component } from "react";
import PropTypes from "prop-types";
const NewsItems = (props) => {
  let { title, description, imageUrl, newsUrl, publishedAt, author, source } = props;
  return (
    <div>
      <div className="card my-3">
        <span
          class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
          style={{ left: "85%", zIndex: "1" }}
        >
          {source ? source : "unknown"}
        </span>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://s.yimg.com/ny/api/res/1.2/acKydOhkcMvbgM.yY5db1w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/the_wall_street_journal_hosted_996/21e7efc0aea5c3b1caf01f3d592c2a6c"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <div>
            <small className="text-muted my-1 ">
              By {author ? author : "unknown"} on{" "}
              {new Date(publishedAt).toGMTString()}
            </small>
          </div>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark my-3"
          >
            {" "}
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
