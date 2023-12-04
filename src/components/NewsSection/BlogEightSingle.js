import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const BlogEightSingle = ({ blog = {} }) => {
  const { image, date, title, text, admin, comments } = blog;

  return (
    <Col md={12} lg={4}>
      <div className="blog-eight__card">
        <div className="blog-eight__image">
          <Image
            src={
              require(`@/images/update-01-10-2021/blog/${image}`).default.src
            }
            alt=""
          />
        </div>
        <div className="blog-eight__content">
          <div className="blog-eight__date">{date}</div>
          <h3 className="blog-eight__title">
            <Link href="/blog-single">{title}</Link>
          </h3>
          <div className="blog-eight__text">{text}</div>
          <div className="blog-eight__meta">
            <Link href="/">
              <i className="far fa-user-circle"></i>by {admin}
            </Link>
            <Link href="/">
              <i className="far fa-comments"></i>
              {comments} Comments
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogEightSingle;
