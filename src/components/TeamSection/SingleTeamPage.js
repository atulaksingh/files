import { socials } from "@/data/header";
import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleTeamPage = ({ team = {} }) => {
  const { image, name, designation } = team;

  return (
    <Col lg={4} md={6} sm={12} className="team-block">
      <div className="inner-box">
        <div className="image-box">
          <Link href="/about">
            <Link>
              <Image
                src={require(`@/images/resource/${image}`).default.src}
                alt=""
              />
            </Link>
          </Link>
          <ul className="social-links clearfix">
            {socials.map(({ id, icon, href }) => (
              <li key={id}>
                <Link href={href}>
                  <span className={icon}></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lower-box">
          <h5>
            <Link href="/">{name}</Link>
          </h5>
          <div className="designation">{designation}</div>
        </div>
      </div>
    </Col>
  );
};

export default SingleTeamPage;
