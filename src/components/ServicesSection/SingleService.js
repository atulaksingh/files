import React from "react";
import { Col } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import Link from "next/link";

const SingleService = ({ service = {} }) => {
  const { icon, title, text } = service;

  return (
    <Col xl={3} lg={6} md={6} sm={12} className="service-block-two">
      <div className="inner-box animated fadeInUp">
        <div className="bottom-curve"></div>
        <div className="icon-box">
          <span className={icon}></span>
        </div>
        <h5>
          <Link href="/">
            <TextSplit text={title} />
          </Link>
        </h5>
        <div className="text">{text}</div>
        <div className="link-box">
          <Link href="/">
            <span className="fa fa-angle-right"></span>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default SingleService;
