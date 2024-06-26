import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const ContentSide = ({ service = {} }) => {
  const {
    image,
    title,
    text1,
    featuredImage,
    featuredTitle,
    featuredText,
    features,
    text2,
    text3,
  } = service;

  return (
    <div className="service-details">
      <div className="main-image image">
        <Image src={image.src} alt="" />
      </div>
      <div className="text-content">
        <h3>{title}</h3>
        <div>{text1}</div>
        <div className="featured">
          <Row className="clearfix">
            <Col md={6} sm={12} className="image-col">
              <div className="image">
                <Image src={featuredImage.src} alt="" />
              </div>
            </Col>
            <Col md={6} sm={12} className="text-col">
              <div className="inner">
                <h4>{featuredTitle}</h4>
                <div>{featuredText}</div>
                <ul>
                  {features.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div>{text2}</div>
        <div className="last">{text3}</div>
      </div>
    </div>
  );
};

export default ContentSide;
